"use client";

import { useState } from "react";

interface Props {
  code: string;
  // ターミナル風に各行へプロンプト記号を付けるか
  terminal?: boolean;
}

export default function CodeBlock({ code, terminal = false }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // クリップボード不可の環境では何もしない
    }
  };

  return (
    <div className="group relative my-4 overflow-hidden rounded-xl border border-line bg-terminal">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-coral" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        </div>
        <button
          type="button"
          onClick={copy}
          className="rounded-md px-2 py-1 text-xs text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          {copied ? "コピーしました" : "コピー"}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[13px] leading-relaxed text-cream">
        {code.split("\n").map((line, i) => (
          <div key={i} className="whitespace-pre">
            {terminal && <span className="select-none text-coral">$ </span>}
            {line}
          </div>
        ))}
      </pre>
    </div>
  );
}
