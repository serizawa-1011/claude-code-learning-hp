"use client";

import { useEffect, useRef, useState } from "react";
import { getTerm } from "@/data/glossary";

interface Props {
  // 用語集（glossary.ts）の term と一致させる
  word: string;
  // 表示テキストを変えたい場合（省略時は word をそのまま表示）
  children?: React.ReactNode;
}

export default function Term({ word, children }: Props) {
  const entry = getTerm(word);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // 用語集に未登録なら、ただのテキストとして表示
  if (!entry) return <>{children ?? word}</>;

  return (
    <span ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="cursor-help font-medium text-coral-deep underline decoration-coral/40 decoration-dotted underline-offset-2 hover:decoration-coral"
      >
        {children ?? word}
      </button>
      {open && (
        <span
          role="tooltip"
          className="absolute left-0 top-full z-50 mt-2 block w-[min(16rem,calc(100vw-2rem))] rounded-xl border border-line bg-white p-3 text-left text-sm font-normal leading-relaxed text-ink shadow-[0_10px_30px_-12px_rgba(31,30,29,0.4)]"
        >
          <span className="mb-1 block font-semibold text-coral-deep">
            {entry.term}
            {entry.reading && (
              <span className="ml-1 text-xs font-normal text-ink-soft">
                （{entry.reading}）
              </span>
            )}
          </span>
          {entry.description}
        </span>
      )}
    </span>
  );
}
