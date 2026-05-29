import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { notes, getNote } from "@/data/notes";
import CodeBlock from "@/components/CodeBlock";

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  return { title: note ? note.title : "ノート" };
}

export default async function NoteDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 py-12">
      <Link
        href="/notes"
        className="text-sm text-ink-soft underline-offset-2 hover:text-coral-deep hover:underline"
      >
        ← 学習ノート一覧
      </Link>

      <div className="mt-6 flex items-center gap-3 text-xs text-ink-soft">
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

      <h1 className="mt-3 text-3xl font-bold tracking-tight">{note.title}</h1>

      <div className="mt-8">
        {note.body.map((block, i) =>
          block.startsWith("code:") ? (
            <CodeBlock key={i} code={block.slice(5)} />
          ) : (
            <p key={i} className="mb-4 leading-relaxed text-ink-soft">
              {block}
            </p>
          )
        )}
      </div>
    </article>
  );
}
