"use client";

import { useMemo, useState } from "react";
import { glossary } from "@/data/glossary";

export default function GlossaryList() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = [...glossary].sort((a, b) =>
      a.term.localeCompare(b.term, "ja")
    );
    if (q === "") return list;
    return list.filter(
      (e) =>
        e.term.toLowerCase().includes(q) ||
        e.reading?.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="用語を検索…（例: ターミナル、API）"
        className="mb-6 w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-coral sm:max-w-sm"
      />

      <dl className="space-y-3">
        {filtered.map((e) => (
          <div
            key={e.term}
            id={e.term}
            className="rounded-2xl border border-line bg-white/60 p-5 scroll-mt-24"
          >
            <dt className="flex flex-wrap items-baseline gap-2">
              <span className="text-lg font-semibold text-coral-deep">
                {e.term}
              </span>
              {e.reading && (
                <span className="text-xs text-ink-soft">{e.reading}</span>
              )}
            </dt>
            <dd className="mt-1.5 leading-relaxed text-ink-soft">
              {e.description}
            </dd>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="rounded-2xl border border-line bg-white/60 px-4 py-8 text-center text-ink-soft">
            該当する用語が見つかりませんでした。
          </p>
        )}
      </dl>
    </div>
  );
}
