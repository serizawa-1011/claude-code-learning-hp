import { Fragment } from "react";
import Term from "@/components/Term";

// インラインの軽量記法をReactノードに変換する。
//  - `code`        … 等幅のインラインコード
//  - [[用語]]       … 用語集ツールチップ（表示も用語名）
//  - [[用語|表示]]  … 用語集ツールチップ（表示テキストを変える）
//  - **強調**       … 太字
export function renderInline(text: string): React.ReactNode {
  // まず `code` で分割（コード内は他の記法を解釈しない）
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) {
      return (
        <code
          key={i}
          className="rounded bg-cream-deep px-1.5 py-0.5 font-mono text-[0.85em] text-coral-deep"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <Fragment key={i}>{renderTermsAndBold(part)}</Fragment>;
  });
}

function renderTermsAndBold(text: string): React.ReactNode {
  // [[用語]] / [[用語|表示]] を抽出
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[\[([^\]]+)\]\]$/);
    if (m) {
      const [word, label] = m[1].split("|");
      return (
        <Term key={i} word={word.trim()}>
          {label ? label.trim() : undefined}
        </Term>
      );
    }
    return <Fragment key={i}>{renderBold(part)}</Fragment>;
  });
}

function renderBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
