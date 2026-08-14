import React from "react";
import { Link as LinkIcon } from "lucide-react";

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border-2 border-[#FF3EB5]/28 bg-[#11101A] px-3 py-1 text-xs text-[#F7F3F8] shadow-[0_0_0_1px_rgba(255,62,181,0.10),0_0_14px_rgba(255,62,181,0.10)]">
      {children}
    </span>
  );
}

export function JamIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="shrink-0"
    >
      {/* lid */}
      <rect
        x="7"
        y="3.5"
        width="10"
        height="3.5"
        rx="1.2"
        fill="rgba(236, 72, 153, 0.35)"
        stroke="currentColor"
        strokeWidth="1"
      />

      {/* jar */}
      <rect
        x="6.5"
        y="7"
        width="11"
        height="14.5"
        rx="2.6"
        fill="rgba(255, 255, 255, 0.06)"
        stroke="currentColor"
        strokeWidth="1"
      />

      {/* jam */}
      <rect
        x="7.7"
        y="11"
        width="8.6"
        height="9"
        rx="1.8"
        fill="rgba(244, 63, 94, 0.65)"
      />

      {/* label */}
      <rect
        x="8.2"
        y="14"
        width="7.6"
        height="3.5"
        rx="1.2"
        fill="rgba(255, 255, 255, 0.15)"
      />

      {/* tiny strawberry */}
      <circle cx="12" cy="15.75" r="1.05" fill="rgba(244, 63, 94, 0.95)" />
      <path
        d="M12 13.9c.8 0 1.6-.3 2.1-.8-.7-.2-1.4-.3-2.1-.3s-1.4.1-2.1.3c.5.5 1.3.8 2.1.8Z"
        fill="rgba(34, 197, 94, 0.9)"
      />

      {/* highlight */}
      <path
        d="M9.2 11.8c0 3.8 0 6.5 0 7.7"
        stroke="rgba(255, 255, 255, 0.25)"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FancyLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border-2 border-[#D88CFF]/28 bg-[#11101A] px-3 py-2 text-sm text-[#F7F3F8] hover:border-[#FF3EB5]/70 hover:bg-[#281636] hover:shadow-[0_0_24px_rgba(255,62,181,0.24)] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3EB5]/55"
    >
      <LinkIcon size={14} />
      {label}
    </a>
  );
}

export function GlowCard({
  children,
  gradient,
  pixel,
}: {
  children: React.ReactNode;
  gradient: string;
  pixel?: boolean;
}) {
  void gradient;
  const shape = pixel ? "pixel-corners" : "rounded-3xl";

  return (
    <div
      className={`group relative ${shape} border-2 border-[#FF3EB5]/45 bg-[#281636]/34 p-[3px] shadow-[0_0_0_1px_rgba(255,62,181,0.15),0_0_22px_rgba(255,62,181,0.12)]`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-6 -bottom-4 h-3 rounded-b-[inherit] bg-[#FF3EB5] blur-lg opacity-85 transition-opacity duration-500 group-hover:opacity-100 -z-10"
      />

      <div
        className={`relative ${shape} border-2 border-[#D88CFF]/30 bg-[#11101A] backdrop-blur p-6 sm:p-7 shadow-[0_22px_70px_rgba(0,0,0,0.72)]`}
      >
        {children}
      </div>
    </div>
  );
}

export function Section({
  id,
  title,
  icon,
  children,
}: {
  id?: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-6 sm:px-8 py-10">
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          {title}
        </h2>
        <div className="ml-auto hidden sm:block h-[3px] flex-1 rounded-full bg-[#FF3EB5]/40 shadow-[0_0_12px_rgba(255,62,181,0.45)]" />
      </div>
      {children}
    </section>
  );
}
