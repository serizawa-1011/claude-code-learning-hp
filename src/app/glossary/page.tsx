import type { Metadata } from "next";
import GlossaryList from "@/components/GlossaryList";

export const metadata: Metadata = { title: "用語集" };

export default function GlossaryPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-coral">
        用語集
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        わからない言葉をここで
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-soft">
        プログラミングが初めてでも読めるように、このサイトに出てくる専門用語を
        やさしい言葉で説明します。サイト本文中で
        <span className="mx-1 font-medium text-coral-deep underline decoration-coral/40 decoration-dotted underline-offset-2">
          点線つきの言葉
        </span>
        をタップ（クリック）すると、その場で解説が出ます。
      </p>

      <div className="mt-10">
        <GlossaryList />
      </div>
    </div>
  );
}
