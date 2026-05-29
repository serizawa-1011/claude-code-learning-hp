import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  chapters,
  getChapter,
  getAdjacentChapters,
} from "@/data/curriculum";
import ContentBlocks from "@/components/ContentBlocks";

export function generateStaticParams() {
  return chapters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) return { title: "教科書" };
  return {
    title: `第${chapter.num}章 ${chapter.title}`,
    description: chapter.summary,
  };
}

const levelBadge: Record<string, string> = {
  入門: "bg-coral-soft text-coral-deep",
  実践: "bg-emerald-100 text-emerald-700",
  上級: "bg-indigo-100 text-indigo-700",
};

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();

  const { prev, next } = getAdjacentChapters(slug);

  return (
    <article className="mx-auto max-w-3xl px-5 py-12">
      <nav className="text-sm text-ink-soft">
        <Link href="/learn" className="hover:text-coral-deep hover:underline">
          教科書
        </Link>
        <span className="mx-1.5">/</span>
        <span>第{chapter.num}章</span>
      </nav>

      <div className="mt-4 flex items-center gap-3">
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${levelBadge[chapter.level]}`}
        >
          {chapter.level}編
        </span>
        <span className="text-sm font-semibold text-coral">
          Chapter {chapter.num}
        </span>
      </div>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {chapter.title}
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-ink-soft">
        {chapter.summary}
      </p>

      <div className="mt-10">
        <ContentBlocks blocks={chapter.blocks} />
      </div>

      <div className="mt-14 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/learn/${prev.slug}`}
            className="group rounded-xl border border-line bg-white/60 p-4 transition-colors hover:border-coral/40 hover:bg-coral-soft/30"
          >
            <span className="text-xs text-ink-soft">← 前の章</span>
            <span className="mt-1 block font-semibold text-ink group-hover:text-coral-deep">
              第{prev.num}章 {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/learn/${next.slug}`}
            className="group rounded-xl border border-line bg-white/60 p-4 text-right transition-colors hover:border-coral/40 hover:bg-coral-soft/30"
          >
            <span className="text-xs text-ink-soft">次の章 →</span>
            <span className="mt-1 block font-semibold text-ink group-hover:text-coral-deep">
              第{next.num}章 {next.title}
            </span>
          </Link>
        ) : (
          <Link
            href="/learn"
            className="group rounded-xl border border-line bg-white/60 p-4 text-right transition-colors hover:border-coral/40 hover:bg-coral-soft/30"
          >
            <span className="text-xs text-ink-soft">完了 🎉</span>
            <span className="mt-1 block font-semibold text-ink group-hover:text-coral-deep">
              目次に戻る
            </span>
          </Link>
        )}
      </div>
    </article>
  );
}
