import SectionCard from "@/components/SectionCard";
import CodeBlock from "@/components/CodeBlock";
import Term from "@/components/Term";

const sections = [
  {
    href: "/guide",
    icon: "📘",
    title: "使い方",
    description:
      "インストールから初回起動、基本ワークフローまで。まずはここから。",
  },
  {
    href: "/reference",
    icon: "⌨️",
    title: "コマンド・Tips",
    description:
      "スラッシュコマンド・CLI・キーバインドを検索できるリファレンス。",
  },
  {
    href: "/notes",
    icon: "📝",
    title: "学習ノート",
    description: "触って気づいたことを日付つきで記録していく場所。",
  },
  {
    href: "/demos",
    icon: "✨",
    title: "サンプル集",
    description: "そのまま使えるプロンプト例。コピーして試せる。",
  },
  {
    href: "/glossary",
    icon: "📖",
    title: "用語集",
    description: "専門用語をやさしく解説。わからない言葉はここで。",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-5">
      {/* ヒーロー */}
      <section className="py-16 sm:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-3 py-1 text-xs text-ink-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-coral" />
          個人用の学習・整理サイト
        </span>
        <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Claude Code を
          <br />
          <span className="text-coral">学びながら整理する</span>ノート
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
          <Term word="ターミナル" />
          で動く AI コーディング
          <Term word="エージェント" />、Claude Code。
          使い方・コマンド・気づき・サンプルを 1 か所にまとめています。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/guide"
            className="rounded-lg bg-coral px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-coral-deep"
          >
            使い方を見る
          </a>
          <a
            href="/reference"
            className="rounded-lg border border-line bg-white px-5 py-2.5 text-sm font-medium transition-colors hover:border-coral"
          >
            コマンドを探す
          </a>
        </div>
      </section>

      {/* クイックスタート */}
      <section className="mb-16">
        <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-ink-soft">
          クイックスタート
        </h2>
        <p className="mb-2 text-ink-soft">
          インストールして、プロジェクトのルートで起動するだけ。
        </p>
        <CodeBlock
          terminal
          code={`npm install -g @anthropic-ai/claude-code
cd your-project
claude`}
        />
      </section>

      {/* セクションカード */}
      <section className="pb-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {sections.map((s) => (
            <SectionCard key={s.href} {...s} />
          ))}
        </div>
      </section>
    </div>
  );
}
