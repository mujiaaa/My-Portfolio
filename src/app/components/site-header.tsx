import React from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown, Home, Palette } from "lucide-react";
import { JamIcon } from "./site-ui";

type NavItem = { label: string; href: string };

function NavGroup({
  label,
  icon,
  items,
  accent,
}: {
  label: string;
  icon: React.ReactNode;
  items: NavItem[];
  accent?: "design";
}) {
  const summaryBase =
    "list-none cursor-pointer select-none rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/60";
  const innerBase =
    "inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-zinc-100 hover:bg-white/10";

  return (
    <details className="relative">
      <summary
        className={
          accent === "design"
            ? `${summaryBase} p-[1px] bg-gradient-to-r from-amber-500/60 via-orange-500/45 to-rose-500/60`
            : `${summaryBase} border border-white/10 bg-white/5`
        }
      >
        <span
          className={
            accent === "design"
              ? `${innerBase} bg-zinc-950/60`
              : `${innerBase} bg-transparent`
          }
        >
          <span className="text-zinc-200">{icon}</span>
          <span className="hidden sm:inline">{label}</span>
          <ChevronDown size={16} className="text-zinc-300" />
        </span>
      </summary>

      <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-white/10 bg-zinc-950/85 backdrop-blur p-2 shadow-lg">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="block rounded-xl px-3 py-2 text-sm text-zinc-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
          >
            {it.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

export function SiteHeader({ backToPortfolio }: { backToPortfolio?: boolean }) {
  const mainItems: NavItem[] = [
    { label: "Projects", href: "/portfolio#projects" },
    { label: "Skills", href: "/portfolio#skills" },
    { label: "Education", href: "/portfolio#education" },
  ];

  const designItems: NavItem[] = [
    { label: "UI/UX", href: "/design#uiux" },
    { label: "3D Art", href: "/design#art" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/55 backdrop-blur">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {backToPortfolio && (
            <Link
              href="/portfolio"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/70"
              aria-label="Back to portfolio"
              title="Back to portfolio"
            >
              <ArrowLeft size={18} className="text-zinc-100" />
            </Link>
          )}

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-semibold tracking-tight"
            aria-label="Go to portfolio home"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <JamIcon size={18} />
            </span>
            <span className="hidden sm:inline">Mujia Chen</span>
          </Link>
        </div>

        <nav className="flex items-center gap-2 sm:gap-3">
          <NavGroup label="Main Page" icon={<Home size={16} />} items={mainItems} />
          <NavGroup
            label="Design & Art"
            icon={<Palette size={16} />}
            items={designItems}
            accent="design"
          />
        </nav>
      </div>
    </header>
  );
}
