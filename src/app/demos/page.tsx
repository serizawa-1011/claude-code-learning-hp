import type { Metadata } from "next";
import { demos } from "@/data/demos";
import CodeBlock from "@/components/CodeBlock";

export const metadata: Metadata = { title: "サンプル集" };

export default function DemosPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-coral">
        サンプル集
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        そのまま使えるプロンプト例
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-soft">
        場面別の依頼の仕方です。コピーして自分のプロジェクトで試せます。
        わからない用語は{" "}
        <a href="/glossary" className="text-coral-deep underline-offset-2 hover:underline">
          用語集
        </a>
        で確認できます。
      </p>

      <div className="mt-10 space-y-8">
        {demos.map((demo) => (
          <section
            key={demo.title}
            className="rounded-2xl border border-line bg-white/60 p-6"
          >
            <h2 className="text-lg font-semibold">{demo.title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">
              {demo.description}
            </p>
            <CodeBlock code={demo.prompt} />
            {demo.tip && (
              <p className="mt-1 flex gap-2 text-sm text-ink-soft">
                <span className="text-coral">💡</span>
                <span>{demo.tip}</span>
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
