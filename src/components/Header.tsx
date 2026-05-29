"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/guide", label: "使い方" },
  { href: "/reference", label: "コマンド" },
  { href: "/notes", label: "学習ノート" },
  { href: "/demos", label: "サンプル" },
  { href: "/glossary", label: "用語集" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-coral font-mono text-lg text-white">
            ✳
          </span>
          <span className="text-[15px]">Claude Code 学習ノート</span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? "bg-coral-soft text-coral-deep"
                    : "text-ink-soft hover:bg-cream-deep hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="メニュー"
          className="flex h-9 w-9 items-center justify-center rounded-md text-ink-soft hover:bg-cream-deep sm:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-cream px-5 py-2 sm:hidden">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2.5 text-sm ${
                  active
                    ? "bg-coral-soft text-coral-deep"
                    : "text-ink-soft hover:bg-cream-deep"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
