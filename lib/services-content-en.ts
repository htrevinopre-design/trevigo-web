// English content for the /en nearshoring section.
// Each entry maps to its Spanish equivalent (esSlug) for hreflang.

export type ServiceSectionEN = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type ServiceContentEN = {
  slug: string;
  esSlug: string; // Spanish equivalent under /servicios/
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: ServiceSectionEN[];
  faqs: { q: string; a: string }[];
};

export const SERVICES_EN: ServiceContentEN[] = [
  {
    slug: "phosphating",
    esSlug: "fosfatizado",
    title: "Zinc, Iron & Tricationic Phosphating: Chemicals and Process Support",
    metaTitle: "Zinc & Tricationic Phosphating Support in Mexico",
    metaDescription:
      "Phosphating chemicals and on-site process support for paint pretreatment lines in Mexico. Zinc, iron and tricationic systems, coating weight validation, bilingual team.",
    intro:
      "Phosphating is the standard conversion coating before powder coating, e-coat and liquid paint. Industrias Trevigo formulates and supplies phosphating chemistry — zinc, iron and tricationic — and supports your line in Mexico with bath analysis, coating weight validation and troubleshooting, in English or Spanish.",
    sections: [
      {
        heading: "What we supply and support",
        paragraphs: [
          "We cover the complete pretreatment sequence used by automotive and general manufacturing plants:",
        ],
        list: [
          "Alkaline cleaners and degreasers matched to your soils and substrate.",
          "Zinc phosphate systems (crystalline coating, automotive standard) with accelerators and refiners.",
          "Iron phosphate systems for lighter-duty applications and combined cleaner-coaters.",
          "Tricationic zinc-nickel-manganese systems for high-spec OEM requirements.",
          "Post-treatment sealers, including chrome-free options compliant with RoHS and OEM restrictions.",
        ],
      },
      {
        heading: "Process support that keeps audits clean",
        paragraphs: [
          "Our technical team runs weekly bath control (concentration, free/total acid, accelerator), validates coating weight per your customer specification, and documents everything so your quality team has audit-ready records. When adhesion or salt-spray failures appear, we troubleshoot the line stage by stage instead of just shipping more chemical.",
        ],
      },
      {
        heading: "Why nearshoring plants work with us",
        paragraphs: [
          "We are based in the Monterrey metropolitan area — the region where North American manufacturing is concentrating — with 35+ years supplying the Mexican automotive and metalworking supply chain. Local inventory, deliveries in drums, totes or bulk, SDS and COA documentation with every shipment, and a bilingual technical team your U.S. engineering staff can talk to directly.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you support lines to automotive OEM specifications?",
        a: "Yes. Our zinc and tricationic phosphate systems are run daily against automotive coating-weight and salt-spray requirements. We provide the process parameters, per-batch documentation and validation testing your OEM audits require.",
      },
      {
        q: "Can you help us start up a new phosphating line in Mexico?",
        a: "Yes. We support line start-ups end to end: bath make-up calculations, initial charging, parameter definition, operator training and the first weeks of intensive bath control until the process is stable.",
      },
      {
        q: "Do you offer chrome-free sealers?",
        a: "Yes. We formulate trivalent-chrome and fully chrome-free (zirconium-based) post-treatments that meet RoHS, REACH and OEM restrictions while matching the corrosion performance of traditional chromate sealers.",
      },
    ],
  },
  {
    slug: "passivation",
    esSlug: "pasivado",
    title: "Stainless Steel Passivation: ASTM A967 Chemistry and Validation",
    metaTitle: "Stainless Steel Passivation per ASTM A967 | Mexico",
    metaDescription:
      "Passivation chemistry and process validation per ASTM A967 in Mexico: nitric and citric systems, copper sulfate testing, per-batch certificates for OEM audits.",
    intro:
      "Aerospace, medical and food-industry customers require documented passivation of stainless steel components. Industrias Trevigo supplies passivation chemistry per ASTM A967 — nitric and citric acid systems — with validated process parameters and per-batch documentation, supporting plants across Mexico from our base in Monterrey.",
    sections: [
      {
        heading: "Complete passivation process support",
        paragraphs: [
          "Our model covers the full process so you can run passivation in-house with auditable results:",
        ],
        list: [
          "No-cost diagnosis: we evaluate your parts, steel grade (304, 316, 17-4 PH) and the specification your customer requires.",
          "The right chemistry: nitric or citric acid systems per ASTM A967, at validated concentrations for your case.",
          "Documented process parameters: time, temperature and rinse sequence for your operators.",
          "Validation and certification: copper sulfate or ferroxyl testing per batch, with records ready for OEM audits.",
          "If you prefer to outsource, we connect you with qualified applicators in Nuevo León who run our chemistry.",
        ],
      },
      {
        heading: "Beyond stainless: passivation for carbon steel, aluminum and zinc",
        paragraphs: [
          "We also formulate temporary rust-preventive passivation for carbon steel between operations (30-90 day protection), conversion coatings for aluminum, and trivalent / chrome-free passivates for galvanized and zinc-plated parts replacing hexavalent chromate.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do your products comply with ASTM A967?",
        a: "Yes. Our stainless steel passivation products meet ASTM A967 methods C, D and E, validated with copper sulfate testing. We provide a COA per lot and a documented process guide for your quality department.",
      },
      {
        q: "Can you passivate parts for us, or only supply the chemistry?",
        a: "Our core model is chemistry plus full technical support so you run the process in-house with auditable quality. If you need to outsource the operation, we connect you with applicators in the Monterrey area who work with our products.",
      },
      {
        q: "Do you provide documentation in English?",
        a: "Yes. SDS, COA, process parameters and validation records are available in English for your corporate quality systems and customer audits.",
      },
    ],
  },
  {
    slug: "pickling",
    esSlug: "decapado",
    title: "Metal Pickling: Acid Chemistry, Inhibitors and Bath Control",
    metaTitle: "Metal Pickling Chemicals & Process Support | Mexico",
    metaDescription:
      "Pickling acids with inhibitors for steel, stainless and aluminum in Mexico. Immersion process support, bath control and continuous chemical supply. Monterrey based.",
    intro:
      "Pickling removes oxides, mill scale and rust before phosphating, galvanizing, painting or welding. Industrias Trevigo supplies formulated pickling acids with inhibitors, defines your process parameters, and keeps your baths under control — with continuous chemical supply from Monterrey to plants across Mexico.",
    sections: [
      {
        heading: "The right acid for each substrate",
        paragraphs: [
          "Acid selection and concentration depend on the metal:",
        ],
        list: [
          "Carbon steel: hydrochloric (15-25%) or hot sulfuric (10-15%) systems depending on volume and geometry.",
          "Galvanized steel: specially inhibited formulations that strip oxide without consuming the zinc layer.",
          "Stainless steel: nitric-hydrofluoric or nitric-phosphoric blends to remove free iron and heat tint.",
          "Aluminum: caustic etch followed by nitric desmut.",
        ],
      },
      {
        heading: "Inhibitors: the difference between cheap and expensive pickling",
        paragraphs: [
          "A pickling inhibitor stops the acid from attacking clean base metal while it keeps dissolving oxide. The result: 20-40% longer bath life, less metal loss, less hydrogen absorption (critical on high-strength steels) and lower cost per part. Our acid blends come pre-inhibited, or we dose inhibitor into your existing bath after a process diagnosis.",
        ],
      },
      {
        heading: "Supply and waste guidance",
        paragraphs: [
          "We deliver in 50 kg carboys, 200 kg drums and 1,000 kg totes across Mexico, with scheduled weekly deliveries in the Monterrey area. We also advise on neutralization and connect you with authorized hazardous-waste handlers for spent baths, in compliance with Mexican regulation (NOM-052-SEMARNAT).",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you define the pickling process for a new line?",
        a: "Yes. We run a no-cost diagnosis with your actual parts, define acid type, concentration, temperature and immersion time, and deliver a process sheet with projected chemical consumption and cost per kilogram of oxide removed.",
      },
      {
        q: "How do we know when to dump the bath?",
        a: "When dissolved iron exceeds roughly 30-50 g/L (depending on the acid), pickling speed drops to 20-30% of optimum. We monitor your bath weekly and tell you when to regenerate or replace — before quality or cycle time suffers.",
      },
      {
        q: "Do you ship outside the Monterrey area?",
        a: "Yes. We ship pallets and totes across Mexico. Nearshoring plants in Saltillo, the Bajío corridor and the border region are within routine delivery range.",
      },
    ],
  },
  {
    slug: "paint-stripping",
    esSlug: "despintado",
    title: "Industrial Paint Stripping: Removers for Racks, Hooks and Rework",
    metaTitle: "Industrial Paint Stripping Chemicals in Mexico",
    metaDescription:
      "Industrial paint strippers for powder coating racks, hooks and rework parts in Mexico. Hot alkaline and modern formulated removers with full technical support.",
    intro:
      "Every powder coating and e-coat line accumulates painted racks, hooks and reject parts. Industrias Trevigo supplies industrial paint stripping chemistry — hot alkaline systems and modern formulated removers — with the process parameters to run stripping in-house safely and economically.",
    sections: [
      {
        heading: "Stripper technologies we formulate",
        paragraphs: [
          "The right remover depends on your paint system, substrate and constraints:",
        ],
        list: [
          "Hot alkaline strippers: the workhorse for powder coating and e-coat on steel — lowest cost per kilogram of paint removed.",
          "Formulated intensive removers with co-solvents: for heavily cured epoxies or when speed matters most.",
          "Controlled-pH formulations for aluminum and sensitive alloys that alkaline systems would attack.",
        ],
      },
      {
        heading: "Typical immersion process",
        paragraphs: [
          "Racks or parts are immersed in heated tanks (80-95°C) for 30 to 120 minutes depending on coating thickness, followed by rinsing and drying. We define concentration, temperature and monitoring parameters, and track bath loading so you replace chemistry on schedule instead of by guesswork. Not sure which remover fits? Send us a sample part — we run the stripping test at no cost and recommend with data.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the best remover for powder coating racks?",
        a: "For steel racks with powder coating or e-coat, hot alkaline strippers deliver the lowest cost per kilogram of paint removed and allow high rack rotation. We formulate them to match your specific coating chemistry.",
      },
      {
        q: "Is methylene chloride still allowed in Mexico?",
        a: "It remains available but faces growing restrictions, following the regulatory direction of the U.S. and Europe. We recommend transitioning to modern formulated removers to avoid forced reformulation and compliance risk later.",
      },
      {
        q: "Do you strip parts as a service?",
        a: "We are a chemical manufacturer and technical advisor, not a job shop. We equip and train your team to strip in-house, or connect you with stripping shops in the Monterrey area that run our chemistry.",
      },
    ],
  },
  {
    slug: "galvanizing",
    esSlug: "galvanizado",
    title: "Galvanizing Process Chemicals: Pretreatment, Flux and Bath Support",
    metaTitle: "Galvanizing Process Chemicals & Support | Mexico",
    metaDescription:
      "Chemicals and technical support for hot-dip and electro galvanizing lines in Mexico: degreasing, inhibited pickling, flux control and coating validation.",
    intro:
      "Galvanizing quality is decided before the zinc: in degreasing, pickling and fluxing. Industrias Trevigo supplies the full chemical sequence for hot-dip and electrolytic galvanizing lines in Mexico, with bath analysis and coating validation to keep rejects down and audits clean.",
    sections: [
      {
        heading: "Chemistry for every stage before the kettle",
        paragraphs: [
          "A typical hot-dip line runs: alkaline cleaning, acid pickling, fluxing, drying, zinc immersion and optional passivation. We supply and control:",
        ],
        list: [
          "Alkaline degreasers matched to your part soils.",
          "Inhibited hydrochloric pickling that protects base steel and extends bath life.",
          "Flux (zinc ammonium chloride) control: density, iron contamination and pH.",
          "Post-galvanizing passivates, including trivalent and chrome-free systems.",
        ],
      },
      {
        heading: "Troubleshooting bare spots, dross and thickness issues",
        paragraphs: [
          "Bare spots, excessive dross and uneven coating almost always trace back to pretreatment chemistry. Our technical team audits the line stage by stage — cleaner concentration, iron in the pickle, flux condition — and corrects the root cause. We support plants across northern Mexico from Monterrey with scheduled deliveries and bilingual documentation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you supply chemicals for electro-galvanizing as well?",
        a: "Yes. We support both hot-dip and electrolytic galvanizing lines, including cleaners, pickling systems and post-plate passivates for zinc and zinc-nickel deposits.",
      },
      {
        q: "Can you reduce our dross generation?",
        a: "Often, yes. Excess dross usually comes from iron carried into the kettle by a poorly controlled pickle or exhausted flux. Controlling those two baths typically cuts dross measurably — we quantify the baseline and track the improvement.",
      },
      {
        q: "Do you provide English-language documentation for corporate audits?",
        a: "Yes. SDS, COAs, process parameters and control records are available in English and Spanish.",
      },
    ],
  },
  {
    slug: "electrostatic-painting",
    esSlug: "pintura-electrostatica",
    title: "Powder Coating Pretreatment: Chemistry and Line Support",
    metaTitle: "Powder Coating Pretreatment Support in Mexico",
    metaDescription:
      "Pretreatment chemistry for powder coating and e-coat lines in Mexico: cleaning, phosphating, sealing and adhesion troubleshooting with a bilingual technical team.",
    intro:
      "Powder coating adhesion and salt-spray performance are won in pretreatment. Industrias Trevigo supplies and supports the chemical stages of powder coating and e-coat lines in Mexico — cleaning, conversion coating and sealing — plus rack stripping chemistry to keep your conveyor grounded and your finish consistent.",
    sections: [
      {
        heading: "The pretreatment sequence we support",
        paragraphs: [
          "Whether your line runs 3, 5 or 7 stages, we supply chemistry and control for each:",
        ],
        list: [
          "Alkaline or acid cleaning matched to your soils and substrate mix.",
          "Iron phosphate (economical, lighter duty) or zinc phosphate (automotive standard) conversion.",
          "Chrome-free sealers that boost salt-spray performance without regulatory exposure.",
          "DI water rinse guidance for spot-free finishing.",
          "Rack and hook stripping chemistry to maintain electrostatic grounding.",
        ],
      },
      {
        heading: "When paint fails, we find out why",
        paragraphs: [
          "Fisheyes, poor adhesion, early corrosion at edges: our team troubleshoots with data — bath titrations, coating weight, contact angle and grounding checks — and fixes the process, not just the symptom. That is the difference between a chemical vendor and a process partner.",
        ],
      },
    ],
    faqs: [
      {
        q: "Iron phosphate or zinc phosphate for our powder line?",
        a: "It depends on your specification. Iron phosphate is economical and adequate for indoor-service parts; zinc phosphate is the automotive standard when salt-spray requirements exceed roughly 500 hours. We help you match the chemistry to your customer requirement, not oversell it.",
      },
      {
        q: "Can you audit our existing pretreatment line?",
        a: "Yes. We run a stage-by-stage audit — concentrations, temperatures, contact times, rinse quality — and deliver a written report with corrections ranked by impact. The audit is free for plants in the Monterrey region.",
      },
      {
        q: "Do you also supply the powder paint?",
        a: "No — we specialize in the chemical pretreatment stages and stripping. That focus is why powder and e-coat applicators use us to fix adhesion problems their paint supplier cannot explain.",
      },
    ],
  },
];

export function getServiceEN(slug: string) {
  return SERVICES_EN.find((s) => s.slug === slug);
}
