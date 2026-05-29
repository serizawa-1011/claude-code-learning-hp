import { renderInline } from "@/lib/richtext";
import CodeBlock from "@/components/CodeBlock";

// 教科書の本文を構成するブロック。データ駆動で章を組み立てる。
export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "code"; code: string; terminal?: boolean }
  | { type: "callout"; tone?: "tip" | "warn" | "note"; title?: string; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] };

const calloutStyle: Record<
  NonNullable<Extract<Block, { type: "callout" }>["tone"]>,
  { box: string; icon: string; label: string }
> = {
  tip: {
    box: "border-coral/30 bg-coral-soft/50",
    icon: "💡",
    label: "ヒント",
  },
  warn: {
    box: "border-amber-400/40 bg-amber-50",
    icon: "⚠️",
    label: "注意",
  },
  note: {
    box: "border-line bg-cream-deep/60",
    icon: "📝",
    label: "メモ",
  },
};

export default function ContentBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h":
            return (
              <h2
                key={i}
                className="mt-10 scroll-mt-24 border-b border-line pb-2 text-xl font-bold tracking-tight"
              >
                {renderInline(block.text)}
              </h2>
            );
          case "p":
            return (
              <p key={i} className="leading-[1.9] text-ink-soft">
                {renderInline(block.text)}
              </p>
            );
          case "code":
            return <CodeBlock key={i} code={block.code} terminal={block.terminal} />;
          case "list":
            return block.ordered ? (
              <ol key={i} className="ml-5 list-decimal space-y-2 leading-relaxed text-ink-soft marker:text-coral">
                {block.items.map((it, j) => (
                  <li key={j} className="pl-1">
                    {renderInline(it)}
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="ml-5 list-disc space-y-2 leading-relaxed text-ink-soft marker:text-coral">
                {block.items.map((it, j) => (
                  <li key={j} className="pl-1">
                    {renderInline(it)}
                  </li>
                ))}
              </ul>
            );
          case "callout": {
            const s = calloutStyle[block.tone ?? "tip"];
            return (
              <div key={i} className={`rounded-xl border p-4 ${s.box}`}>
                <p className="mb-1 flex items-center gap-2 text-sm font-semibold text-ink">
                  <span>{s.icon}</span>
                  {block.title ?? s.label}
                </p>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {renderInline(block.text)}
                </p>
              </div>
            );
          }
          case "table":
            return (
              <div key={i} className="my-4 overflow-x-auto rounded-xl border border-line">
                <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                  <thead className="bg-cream-deep">
                    <tr>
                      {block.head.map((h, j) => (
                        <th key={j} className="px-4 py-2.5 font-semibold text-ink">
                          {renderInline(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j} className="border-t border-line align-top">
                        {row.map((cell, k) => (
                          <td key={k} className="px-4 py-2.5 text-ink-soft">
                            {renderInline(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
