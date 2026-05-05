// IndexNow submission script.
// Notifica a Bing, Yandex y otros buscadores compatibles con IndexNow
// cada vez que cambia contenido. Bing comparte señales con Google y
// suele indexar más rápido — esto acelera la indexación general.
//
// Uso: `npm run indexnow`
//
// Lee las mismas fuentes que el sitemap (data.ts + articles.ts) para
// no duplicar la lista. Hace 1 sola request POST con todas las URLs.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const HOST = "www.trevigo.com.mx";
const BASE_URL = `https://${HOST}`;
const KEY = "418afff771aa420fa1671b3302c4c68a";
const KEY_LOCATION = `${BASE_URL}/${KEY}.txt`;

// ── Extraer datos sin depender del runtime de Next.js ──────────────
// Parseamos los archivos TS como texto para sacar IDs y slugs.
function readFile(rel) {
  return readFileSync(resolve(ROOT, rel), "utf8");
}

function extractMatches(text, regex, groupIdx = 1) {
  const out = [];
  let m;
  while ((m = regex.exec(text)) !== null) out.push(m[groupIdx]);
  return out;
}

const dataSrc = readFile("lib/data.ts");
const articlesSrc = readFile("lib/articles.ts");
const servicesSrc = readFile("lib/services-content.ts");
const glossarySrc = readFile("lib/glossary.ts");

// Product IDs: 12+ espacios de indent (dentro de subcategorías)
const productIds = extractMatches(
  dataSrc,
  /^ {12}id: "([^"]+)",/gm
);

// Industry slugs: cada industria tiene `slug: "...", icon: "..."`
const industrySlugs = extractMatches(
  dataSrc,
  /slug: "([a-z0-9-]+)", icon:/g
);

// Article slugs
const articleSlugs = extractMatches(
  articlesSrc,
  /slug: "([a-z0-9-]+)"/g
);

// Service detail page slugs
const serviceSlugs = extractMatches(
  servicesSrc,
  /slug: "([a-z0-9-]+)"/g
);

// Glossary entry slugs
const glossarySlugs = extractMatches(
  glossarySrc,
  /slug: "([a-z0-9-]+)"/g
);

// ── Construir lista de URLs ────────────────────────────────────────
const staticPaths = [
  "/",
  "/productos",
  "/servicios",
  "/industrias",
  "/nosotros",
  "/contacto",
  "/sak",
  "/surface-ai",
  "/recursos",
  "/casos-de-exito",
  "/glosario",
];

const urls = [
  ...staticPaths,
  ...productIds.map((id) => `/productos/${id}`),
  ...industrySlugs.map((s) => `/industrias/${s}`),
  ...articleSlugs.map((s) => `/recursos/${s}`),
  ...serviceSlugs.map((s) => `/servicios/${s}`),
  ...glossarySlugs.map((s) => `/glosario/${s}`),
].map((p) => `${BASE_URL}${p}`);

// Deduplicar
const urlList = [...new Set(urls)];

console.log(`📡 Enviando ${urlList.length} URLs a IndexNow...`);
console.log(`   Host: ${HOST}`);
console.log(`   Key:  ${KEY}`);

// ── POST a IndexNow ─────────────────────────────────────────────────
const body = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify(body),
});

console.log(`\n✅ Status: ${res.status} ${res.statusText}`);

if (res.status === 200 || res.status === 202) {
  console.log("   Las URLs fueron aceptadas. Bing/Yandex las procesarán pronto.");
} else if (res.status === 400) {
  console.error("   ❌ Bad request — revisar formato del JSON");
} else if (res.status === 403) {
  console.error("   ❌ Key inválida o keyLocation no accesible públicamente");
  console.error(`   Verifica: curl -I ${KEY_LOCATION}`);
} else if (res.status === 422) {
  console.error("   ❌ URLs no pertenecen al host declarado");
} else if (res.status === 429) {
  console.error("   ❌ Rate limit — espera unos minutos");
} else {
  console.error(`   ⚠️  Status inesperado. Body: ${await res.text()}`);
}

console.log("\nURLs enviadas:");
urlList.forEach((u) => console.log(`  • ${u}`));
