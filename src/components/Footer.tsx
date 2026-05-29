export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p>
          Claude Code 学習ノート — 学習・整理のための個人用サイト
        </p>
        <p className="font-mono text-xs">
          公式ドキュメント:{" "}
          <a
            href="https://docs.claude.com/en/docs/claude-code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-coral-deep underline-offset-2 hover:underline"
          >
            docs.claude.com
          </a>
        </p>
      </div>
    </footer>
  );
}
