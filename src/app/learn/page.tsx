import type { Metadata } from "next";
import Link from "next/link";
import { chapters, levels } from "@/data/curriculum";

export const metadata: Metadata = {
  title: "教科書",
  description:
    "Claude Code を入門から上級まで体系的に学べる教科書。全18章でマスターを目指す。",
};

const levelBadge: Record<string, string> = {
  入門: "bg-coral-soft text-coral-deep",
  実践: "bg-emerald-100 text-emerald-700",
  上級: "bg-indigo-100 text-indigo-700",
};

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-coral">
        教科書
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        Claude Code マスター講座
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-soft">
        全{chapters.length}章で、Claude Code を入門から上級まで体系的に学びます。
        上から順に読めば、はじめての人でも「使いこなし」まで到達できる構成です。
        専門用語には点線が引いてあり、クリックすると意味が表示されます。
      </p>

      <div className="mt-6">
        <Link
          href={`/learn/${chapters[0].slug}`}
          className="inline-flex items-center gap-2 rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral-deep"
        >
          第1章から始める →
        </Link>
      </div>

      <div className="mt-12 space-y-12">
        {levels.map((lv) => {
          const items = chapters.filter((c) => c.level === lv.level);
          return (
            <section key={lv.level}>
              <div className="flex items-baseline gap-3">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${levelBadge[lv.level]}`}
                >
                  {lv.label}
                </span>
                <p className="text-sm text-ink-soft">{lv.description}</p>
              </div>
              <ul className="mt-4 space-y-2">
                {items.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/learn/${c.slug}`}
                      className="group flex items-start gap-3 rounded-xl border border-line bg-white/60 p-4 transition-colors hover:border-coral/40 hover:bg-coral-soft/30"
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream-deep text-sm font-semibold text-coral-deep">
                        {c.num}
                      </span>
                      <span>
                        <span className="block font-semibold text-ink group-hover:text-coral-deep">
                          {c.title}
                        </span>
                        <span className="mt-0.5 block text-sm leading-relaxed text-ink-soft">
                          {c.summary}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
