import Link from "next/link";

interface Props {
  href: string;
  icon: string;
  title: string;
  description: string;
}

export default function SectionCard({ href, icon, title, description }: Props) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-2 rounded-2xl border border-line bg-white/60 p-6 transition-all hover:-translate-y-0.5 hover:border-coral hover:shadow-[0_8px_24px_-12px_rgba(193,95,60,0.35)]"
    >
      <span className="mb-1 flex h-11 w-11 items-center justify-center rounded-xl bg-coral-soft text-xl">
        {icon}
      </span>
      <h3 className="flex items-center gap-1.5 text-lg font-semibold">
        {title}
        <span className="text-coral transition-transform group-hover:translate-x-1">
          →
        </span>
      </h3>
      <p className="text-sm leading-relaxed text-ink-soft">{description}</p>
    </Link>
  );
}
