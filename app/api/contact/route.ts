import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  return new Resend(key);
}

const FROM =
  process.env.RESEND_FROM_EMAIL ?? "Industrias Trevigo <noreply@trevigo.com.mx>";
const TO = ["ventas@trevigo.com.mx", "htrevinopre@gmail.com", "Andress.trevi@gmail.com", "andres.trevino@trevigo.com.mx"];

// ─── HTML helpers ──────────────────────────────────────────────────────────

function row(label: string, value: string | undefined) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:8px 12px;background:#f8f9fa;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;width:1%;border-bottom:1px solid #e5e7eb;">${label}</td>
      <td style="padding:8px 12px;font-size:14px;color:#111827;border-bottom:1px solid #e5e7eb;">${value}</td>
    </tr>`;
}

// Normaliza un teléfono a formato wa.me (solo dígitos, con lada de país).
// Asume México (52) cuando el número llega con 10 dígitos locales.
function waNumber(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `52${digits}`;                       // local MX → +52
  if (digits.length === 11 && digits.startsWith("1")) return `52${digits.slice(1)}`; // 1 + 10
  return digits;                                                        // ya trae lada (ej. 52…)
}

// Fila de teléfono con botón de WhatsApp a un lado que abre el chat.
function phoneRow(phone: string | undefined) {
  if (!phone) return "";
  const link = `https://wa.me/${waNumber(phone)}`;
  return `
    <tr>
      <td style="padding:8px 12px;background:#f8f9fa;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;width:1%;border-bottom:1px solid #e5e7eb;">Teléfono</td>
      <td style="padding:8px 12px;font-size:14px;color:#111827;border-bottom:1px solid #e5e7eb;">
        <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;"><tr>
          <td style="font-size:14px;color:#111827;padding-right:14px;white-space:nowrap;">${phone}</td>
          <td><a href="${link}" target="_blank" style="display:inline-block;background:#25D366;color:#ffffff;font-size:12px;font-weight:700;text-decoration:none;padding:7px 14px;border-radius:6px;white-space:nowrap;">WhatsApp &rarr;</a></td>
        </tr></table>
      </td>
    </tr>`;
}

function emailWrapper(title: string, badge: string, body: string) {
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb;">

        <!-- Header -->
        <tr>
          <td style="background:#0f172a;padding:28px 32px;">
            <p style="margin:0 0 4px;font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.15em;">Industrias Trevigo</p>
            <h1 style="margin:0;font-size:20px;font-weight:900;color:#ffffff;text-transform:uppercase;">${title}</h1>
          </td>
        </tr>

        <!-- Badge -->
        <tr>
          <td style="padding:16px 32px;background:#fff7ed;border-bottom:2px solid #f97316;">
            <span style="font-size:11px;font-weight:700;color:#c2410c;text-transform:uppercase;letter-spacing:0.1em;">${badge}</span>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:28px 32px;">
            ${body}
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px;background:#f8f9fa;border-top:1px solid #e5e7eb;">
            <p style="margin:0;font-size:11px;color:#9ca3af;">Este mensaje fue generado automáticamente desde <strong>trevigo.com.mx</strong>. Responde directamente a este correo para contactar al remitente.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Contact form email ────────────────────────────────────────────────────

function buildContactHtml(f: Record<string, string>) {
  const table = `
    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
      ${row("Nombre", f.nombre)}
      ${row("Empresa", f.empresa)}
      ${row("Correo", f.email)}
      ${phoneRow(f.telefono)}
      ${row("Industria", f.industria)}
      ${row("Asunto", f.asunto)}
    </table>`;

  const mensaje = f.mensaje
    ? `<div style="margin-top:20px;padding:16px;background:#f8f9fa;border-left:3px solid #f97316;border-radius:0 6px 6px 0;">
        <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.1em;">Mensaje</p>
        <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">${f.mensaje.replace(/\n/g, "<br>")}</p>
       </div>`
    : "";

  return emailWrapper(
    "Nueva solicitud de contacto",
    `Motivo: ${f.asunto || "Consulta general"}`,
    table + mensaje
  );
}

// ─── Quote form email ──────────────────────────────────────────────────────

function buildQuoteHtml(f: Record<string, string>) {
  const table = `
    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
      ${row("Nombre", f.nombre)}
      ${row("Empresa", f.empresa)}
      ${row("Correo", f.email)}
      ${phoneRow(f.telefono)}
      ${row("Ciudad", f.ciudad)}
      ${row("Categoría de interés", f.categoria)}
      ${row("Producto de interés", f.producto)}
    </table>`;

  const descripcion = f.descripcion
    ? `<div style="margin-top:20px;padding:16px;background:#f8f9fa;border-left:3px solid #f97316;border-radius:0 6px 6px 0;">
        <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.1em;">Descripción</p>
        <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">${f.descripcion.replace(/\n/g, "<br>")}</p>
       </div>`
    : "";

  return emailWrapper(
    "Cotización rápida",
    `Categoría: ${f.categoria || "General"}`,
    table + descripcion
  );
}

// ─── Product quote email ───────────────────────────────────────────────────

function buildProductoHtml(f: Record<string, string>) {
  const table = `
    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
      ${row("Producto", f.producto)}
      ${row("SKU", f.sku)}
      ${row("Presentación", f.presentacion)}
      ${row("Cantidad", f.cantidad)}
      ${row("Pedido periódico", f.periodo)}
      ${row("Nombre", f.nombre)}
      ${row("Empresa", f.empresa)}
      ${row("Correo", f.correo)}
      ${phoneRow(f.telefono)}
      ${row("Estado", f.estado)}
      ${row("Puesto", f.puesto)}
      ${row("¿Ya es cliente?", f.yaCliente === "true" ? "Sí" : "No")}
    </table>`;

  return emailWrapper(
    "Solicitud de producto",
    `Producto: ${f.producto || "Por definir"} · SKU: ${f.sku || "—"}`,
    table
  );
}

// ─── Service quote email ───────────────────────────────────────────────────

function buildServiceHtml(f: Record<string, string>) {
  const table = `
    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
      ${row("Servicio", f.servicio)}
      ${row("Nombre", f.nombre)}
      ${row("Empresa", f.empresa)}
      ${row("Correo", f.correo)}
      ${phoneRow(f.telefono)}
      ${row("Estado", f.estado)}
      ${row("Puesto", f.puesto)}
      ${row("Tipo de pieza / aplicación", f.aplicacion)}
      ${row("Frecuencia estimada", f.frecuencia)}
      ${row("¿Ya es cliente?", f.yaCliente === "true" ? "Sí" : "No")}
    </table>`;

  const detalles = f.detalles
    ? `<div style="margin-top:20px;padding:16px;background:#f8f9fa;border-left:3px solid #f97316;border-radius:0 6px 6px 0;">
        <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.1em;">Detalles del proyecto</p>
        <p style="margin:0;font-size:14px;color:#374151;line-height:1.6;">${f.detalles.replace(/\n/g, "<br>")}</p>
       </div>`
    : "";

  return emailWrapper(
    "Solicitud de servicio",
    `Servicio: ${f.servicio || "Por definir"}`,
    table + detalles
  );
}

// ─── Route handler ─────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body: Record<string, string> = await req.json();
    const { tipo } = body;

    let subject = "";
    let html = "";

    if (tipo === "contacto") {
      const empresa = body.empresa ? ` — ${body.empresa}` : "";
      subject = `[Web] Nueva solicitud: ${body.asunto || "Consulta"}${empresa}`;
      html = buildContactHtml(body);
    } else if (tipo === "cotizacion") {
      const empresa = body.empresa ? ` — ${body.empresa}` : "";
      subject = `[Web] Cotización rápida${empresa}`;
      html = buildQuoteHtml(body);
    } else if (tipo === "servicio") {
      const empresa = body.empresa ? ` — ${body.empresa}` : "";
      subject = `[Web] Servicio: ${body.servicio || "Solicitud"}${empresa}`;
      html = buildServiceHtml(body);
    } else if (tipo === "producto") {
      const empresa = body.empresa ? ` — ${body.empresa}` : "";
      subject = `[Web] Producto: ${body.producto || "Solicitud"}${empresa}`;
      html = buildProductoHtml(body);
    } else {
      return NextResponse.json({ error: "Tipo inválido" }, { status: 400 });
    }

    const replyTo = body.email || body.correo;

    const { data, error } = await getResend().emails.send({
      from: FROM,
      to: TO,
      ...(replyTo ? { replyTo } : {}),
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Error al enviar el correo" }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
