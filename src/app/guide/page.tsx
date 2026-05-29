import type { Metadata } from "next";
import CodeBlock from "@/components/CodeBlock";
import Term from "@/components/Term";

export const metadata: Metadata = { title: "使い方" };

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-coral">
        使い方
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        Claude Code をはじめる
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-soft">
        インストールから基本的な使い方までの流れをまとめます。
      </p>

      {/* 初心者向けの案内 */}
      <div className="mt-6 rounded-xl border border-line bg-coral-soft/50 p-4 text-sm leading-relaxed text-ink">
        <p className="font-medium">📖 はじめての方へ</p>
        <p className="mt-1 text-ink-soft">
          本文中の
          <span className="mx-0.5 font-medium text-coral-deep underline decoration-coral/40 decoration-dotted underline-offset-2">
            点線つきの言葉
          </span>
          はタップ（クリック）すると解説が出ます。まとめて読みたいときは{" "}
          <a href="/glossary" className="text-coral-deep underline-offset-2 hover:underline">
            用語集
          </a>
          へ。
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">1. インストール</h2>
        <p className="mt-3 leading-relaxed text-ink-soft">
          まず <Term word="Node.js" /> を用意したうえで、{" "}
          <Term word="npm" /> を使って{" "}
          <Term word="グローバルインストール" />
          します。下のコマンドを <Term word="ターミナル" /> に打ち込みます。
        </p>
        <CodeBlock terminal code="npm install -g @anthropic-ai/claude-code" />
        <p className="text-sm text-ink-soft">
          ※ 先頭の「$」は入力する必要はありません。「ここから先がコマンドですよ」という目印です。
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">2. 初回起動</h2>
        <p className="mt-3 leading-relaxed text-ink-soft">
          作業したいプロジェクトの <Term word="ルートディレクトリ" />（一番上の
          フォルダ）に移動して{" "}
          <code className="rounded bg-cream-deep px-1.5 py-0.5 font-mono text-sm text-coral-deep">
            claude
          </code>{" "}
          を実行します。初回はブラウザでの <Term word="認証" />（ログイン）を求められます。
        </p>
        <CodeBlock
          terminal
          code={`cd your-project
claude`}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">3. プロジェクトを理解させる</h2>
        <p className="mt-3 leading-relaxed text-ink-soft">
          起動後にまず{" "}
          <code className="rounded bg-cream-deep px-1.5 py-0.5 font-mono text-sm text-coral-deep">
            /init
          </code>{" "}
          という <Term word="スラッシュコマンド" /> を実行すると、{" "}
          <Term word="リポジトリ" /> を解析して{" "}
          <Term word="CLAUDE.md" /> が作られます。プロジェクトの概要やルールがここに
          記録され、以降の会話で文脈を共有しやすくなります。
        </p>
        <CodeBlock code="/init" />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">4. 基本のワークフロー</h2>
        <ul className="mt-4 space-y-3">
          {[
            {
              t: "やりたいことを言葉で伝える",
              d: (
                <>
                  「このバグを直して」「テストを追加して」など、目的を
                  <Term word="自然言語" />（普段の言葉）で具体的に書きます。この依頼文を
                  <Term word="プロンプト" /> と呼びます。
                </>
              ),
            },
            {
              t: "変更を確認する",
              d: (
                <>
                  編集内容は <Term word="diff" />（変更前後の差分）として示されます。意図と
                  違えば、その場で指摘できます。
                </>
              ),
            },
            {
              t: "大きな変更は計画モードで",
              d: (
                <>
                  <code className="rounded bg-cream-deep px-1 py-0.5 font-mono text-xs text-coral-deep">
                    Shift + Tab
                  </code>{" "}
                  で <Term word="計画モード" /> に切り替え、先に方針を確認してから
                  実行させると安全です。
                </>
              ),
            },
            {
              t: "文脈を整理する",
              d: (
                <>
                  話題が変わったら{" "}
                  <code className="rounded bg-cream-deep px-1 py-0.5 font-mono text-xs text-coral-deep">
                    /clear
                  </code>
                  、会話が長くなったら{" "}
                  <code className="rounded bg-cream-deep px-1 py-0.5 font-mono text-xs text-coral-deep">
                    /compact
                  </code>{" "}
                  で <Term word="セッション" /> の履歴を整理します。
                </>
              ),
            },
          ].map((item) => (
            <li
              key={item.t}
              className="rounded-xl border border-line bg-white/60 p-4"
            >
              <p className="font-medium">{item.t}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                {item.d}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">5. 知っておくと便利な操作</h2>
        <p className="mt-2 text-sm text-ink-soft">
          以下は <Term word="キーバインド" />（ショートカットキー）の例です。
        </p>
        <ul className="mt-4 space-y-2 text-ink-soft">
          <li className="flex gap-3">
            <code className="shrink-0 rounded bg-cream-deep px-1.5 py-0.5 font-mono text-sm text-coral-deep">
              Esc
            </code>
            <span>実行中の処理を止める。</span>
          </li>
          <li className="flex gap-3">
            <code className="shrink-0 rounded bg-cream-deep px-1.5 py-0.5 font-mono text-sm text-coral-deep">
              Shift + Tab
            </code>
            <span>通常 / 自動承認 / 計画モードを切り替える。</span>
          </li>
          <li className="flex gap-3">
            <code className="shrink-0 rounded bg-cream-deep px-1.5 py-0.5 font-mono text-sm text-coral-deep">
              claude -c
            </code>
            <span>直前の <Term word="セッション" /> を再開する。</span>
          </li>
        </ul>
        <p className="mt-6 text-sm text-ink-soft">
          より詳しいコマンド一覧は{" "}
          <a href="/reference" className="text-coral-deep underline-offset-2 hover:underline">
            コマンド・Tips
          </a>{" "}
          を参照してください。
        </p>
      </section>
    </article>
  );
}
