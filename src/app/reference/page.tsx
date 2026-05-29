import type { Metadata } from "next";
import CommandTable from "@/components/CommandTable";

export const metadata: Metadata = { title: "コマンド・Tips" };

export default function ReferencePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-coral">
        リファレンス
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        コマンド・Tips
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-soft">
        よく使うスラッシュコマンド・CLI・キーバインドを検索できます。
      </p>

      <div className="mt-10">
        <CommandTable />
      </div>

      <p className="mt-6 text-sm text-ink-soft">
        ※ 代表的なものを抜粋しています。最新の全コマンドは対話中に{" "}
        <code className="rounded bg-cream-deep px-1.5 py-0.5 font-mono text-coral-deep">
          /help
        </code>{" "}
        で確認できます。
      </p>
    </div>
  );
}
