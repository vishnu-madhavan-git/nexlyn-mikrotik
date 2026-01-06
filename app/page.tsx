"use client";

import { useMemo, useState } from "react";

type Product = {
  id: string;
  model: string;
  category: string;
  specs: string[];
};

const PRODUCTS: Product[] = [
  { id: "1", model: "hAP ax S", category: "Wireless", specs: ["Wi-Fi 6", "2.5G SFP", "PoE in / out"] },
  { id: "2", model: "CRS418-8P-8G-2S+RM", category: "Switches", specs: ["PoE", "10G uplinks", "Rackmount"] },
  { id: "3", model: "Chateau 5G R17 ax", category: "LTE / 5G", specs: ["5G", "Wi-Fi 6", "2.5G Ethernet"] },
];

const WA_NUMBER = "971589216757";

function waLink(product?: Product | null) {
  const msg = product
    ? `Hi NEXLYN, I need price & availability for MikroTik model: ${product.model}.
Quantity:
Delivery location (City/Country):
Company name:
Urgency:`
    : `Hi NEXLYN, I need MikroTik pricing/availability.
Model:
Quantity:
Delivery location:
Company name:`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function Page() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    if (!query) return PRODUCTS;
    return PRODUCTS.filter(
      (p) =>
        p.model.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-sm font-semibold">
            NEXLYN DISTRIBUTION LLC
            <div className="text-xs font-normal text-neutral-500">
              MikroTik Products • UAE • GCC • Export
            </div>
          </div>
          <a
            href={waLink(null)}
            target="_blank"
            className="rounded-full bg-black px-4 py-2 text-sm text-white"
          >
            WhatsApp Enquiry
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-4xl font-semibold">
          MikroTik Networking Products Distribution
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Stock confirmation • B2B pricing • UAE delivery • GCC & export support
        </p>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold">Products</h2>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search product…"
            className="rounded-lg border px-3 py-2 text-sm"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className="rounded-xl border p-5 text-left hover:bg-neutral-50"
            >
              <div className="font-semibold">{p.model}</div>
              <div className="text-xs text-neutral-500">{p.category}</div>
              <ul className="mt-3 list-disc pl-5 text-xs">
                {p.specs.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </button>
          ))}
        </div>
      </section>

      {/* Product Modal */}
      {selected && (
        <div className="fixed inset-0 z-20 bg-black/40">
          <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-3xl rounded-t-2xl bg-white p-6">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-semibold">{selected.model}</h3>
                <p className="text-sm text-neutral-500">{selected.category}</p>
              </div>
              <button onClick={() => setSelected(null)}>Close</button>
            </div>

            <ul className="mt-4 list-disc pl-5 text-sm">
              {selected.specs.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Floating WhatsApp */}
      <a
        href={waLink(selected)}
        target="_blank"
        className="fixed bottom-5 right-5 rounded-full bg-black px-4 py-3 text-sm text-white shadow-lg"
      >
        {selected ? `WhatsApp: ${selected.model}` : "WhatsApp Enquiry"}
      </a>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-neutral-500">
          <div>NEXLYN DISTRIBUTION LLC</div>
          <div className="mt-2">
            MikroTik® is a registered trademark of MikroTik. Independent distributor.
          </div>
        </div>
      </footer>
    </main>
  );
}
