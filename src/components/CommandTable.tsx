"use client";

import { useMemo, useState } from "react";
import { commands, type CommandCategory } from "@/data/commands";

const categories: ("すべて" | CommandCategory)[] = [
  "すべて",
  "スラッシュコマンド",
  "CLI",
  "キーバインド",
];

export default function CommandTable() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"すべて" | CommandCategory>("すべて");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return commands.filter((c) => {
      const matchCat = category === "すべて" || c.category === category;
      const matchQuery =
        q === "" ||
        c.command.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="コマンドや説明で検索…"
          className="w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-coral sm:max-w-xs"
        />
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
                category === cat
                  ? "bg-coral text-white"
                  : "border border-line bg-white text-ink-soft hover:border-coral"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-line">
        <table className="w-full text-left text-sm">
          <thead className="bg-cream-deep text-xs uppercase tracking-wide text-ink-soft">
            <tr>
              <th className="px-4 py-3 font-medium">コマンド</th>
              <th className="hidden px-4 py-3 font-medium sm:table-cell">分類</th>
              <th className="px-4 py-3 font-medium">説明</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr
                key={c.command}
                className="border-t border-line bg-white/50 align-top"
              >
                <td className="px-4 py-3">
                  <code className="whitespace-nowrap rounded bg-cream-deep px-1.5 py-0.5 font-mono text-[12.5px] text-coral-deep">
                    {c.command}
                  </code>
                </td>
                <td className="hidden px-4 py-3 text-xs text-ink-soft sm:table-cell">
                  {c.category}
                </td>
                <td className="px-4 py-3 text-ink-soft">{c.description}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr className="border-t border-line bg-white/50">
                <td colSpan={3} className="px-4 py-8 text-center text-ink-soft">
                  該当するコマンドが見つかりませんでした。
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
