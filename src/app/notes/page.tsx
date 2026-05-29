import type { Metadata } from "next";
import Link from "next/link";
import { notes } from "@/data/notes";

export const metadata: Metadata = { title: "学習ノート" };

export default function NotesPage() {
  const sorted = [...notes].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-coral">
        学習ノート
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        触って気づいたこと
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-soft">
        学習の記録を日付つきで残していきます。新しいノートは{" "}
        <code className="rounded bg-cream-deep px-1.5 py-0.5 font-mono text-sm text-coral-deep">
          src/data/notes.ts
        </code>{" "}
        に追記します。
      </p>

      <div className="mt-10 space-y-4">
        {sorted.map((note) => (
          <Link
            key={note.slug}
            href={`/notes/${note.slug}`}
            className="block rounded-2xl border border-line bg-white/60 p-6 transition-all hover:-translate-y-0.5 hover:border-coral"
          >
            <div className="flex items-center gap-3 text-xs text-ink-soft">
              <time>{note.date}</time>
              <div className="flex flex-wrap gap-1.5">
                {note.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-coral-soft px-2 py-0.5 text-coral-deep"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="mt-2 text-lg font-semibold">{note.title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">
              {note.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
