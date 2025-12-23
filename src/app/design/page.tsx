import React from "react";
import { LayoutDashboard, Box } from "lucide-react";
import { FancyLink, GlowCard, Section, Tag } from "../components/site-ui";
import { SiteHeader } from "../components/site-header";

const uiuxProjects = [
  {
    title: "Teacher–Parent Communication App",
    subtitle: "UI/UX Design",
    tags: ["Figma", "User research", "Prototyping"],
    demoDriveId: "1dmnzJHRT-n0kgTJcT7xxwh6ZLdhCr698",
    links: [
      {
        label: "Figma Demo (video)",
        href: "https://drive.google.com/file/d/1dmnzJHRT-n0kgTJcT7xxwh6ZLdhCr698/view?usp=sharing",
      },
      {
        label: "Documentation",
        href: "https://docs.google.com/document/d/1E7mkWLlBYv269s3iZZ-5dMS9qVRiuv4e/edit?usp=sharing&ouid=114732687253789352102&rtpof=true&sd=true",
      },
    ],
    points: [
      "Designed an app concept to improve communication between elementary school teachers and parents.",
      "Focused on clear information flow, quick check-ins, and reducing friction for busy schedules.",
    ],
  },
  {
    title: "Social Screen-Time Companion",
    subtitle: "UI/UX Design",
    tags: ["Figma", "Social features", "Product thinking"],
    demoDriveId: "19uuLRYiC9aQZ5TtmZzWpLNh5Yh8qkW2Y",
    youtubeEmbed: "https://www.youtube.com/embed/GMnpJp43bX4",
    links: [
      {
        label: "Figma Demo (video)",
        href: "https://drive.google.com/file/d/19uuLRYiC9aQZ5TtmZzWpLNh5Yh8qkW2Y/view?usp=sharing",
      },
      {
        label: "Product Presentation (YouTube)",
        href: "https://www.youtube.com/watch?v=GMnpJp43bX4",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/ucsb-cs148-w24/project-pj12-BeeFree",
      },
    ],
    points: [
      "Designed a concept that helps users limit screen time while adding light social motivation.",
      "Explored comparisons with friends, progress feedback, and positive reinforcement UX.",
    ],
  },
];

const art = {
  title: "Stylized Character Model",
  subtitle: "3D Modeling + Texturing",
  tags: ["Maya", "Substance Painter", "Sketchfab"],
  sketchfabId: "bfa983d60a084b368da345dc05356830",
  links: [
    {
      label: "View on Sketchfab",
      href: "https://sketchfab.com/3d-models/kuromi-20-bfa983d60a084b368da345dc05356830",
    },
  ],
  points: [
    "Modeled in Maya and textured in Substance Painter.",
    "Focused on clean silhouette, readable materials, and stylized detail.",
  ],
};

function DrivePreview({ fileId, title }: { fileId: string; title: string }) {
  const src = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40">
      <iframe
        src={src}
        title={title}
        allow="autoplay"
        className="w-full h-full"
      />
    </div>
  );
}

function SketchfabEmbed({ modelId, title }: { modelId: string; title: string }) {
  const src = `https://sketchfab.com/models/${modelId}/embed`;

  return (
    <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40">
      <iframe
        title={title}
        src={src}
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}

export default function DesignPage() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-zinc-100 overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-grid-faint opacity-20" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-rose-500/12 blur-3xl float-2" />
        <div className="absolute top-16 -left-24 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl float-1" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl float-3" />
      </div>

      {/* ✅ Obvious return icon is in the header (back arrow) */}
      <SiteHeader backToPortfolio />

      <header className="max-w-5xl mx-auto px-6 sm:px-8 pt-12 pb-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-200">
          <span className="h-2 w-2 rounded-full bg-amber-400/80" />
          Design & Art
        </p>

        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            UI/UX and 3D work
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-200">
          A small collection of UI/UX prototypes and 3D art.
        </p>
      </header>

      {/* UI/UX */}
      <Section
        id="uiux"
        title="UI/UX"
        icon={<LayoutDashboard className="text-zinc-300" />}
      >
        <div className="space-y-6">
          {uiuxProjects.map((p) => (
            <GlowCard
              key={p.title}
              gradient="from-amber-500/25 via-orange-500/15 to-rose-500/20"
            >
              <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-400">{p.subtitle}</p>
                    </div>
                    <div className="hidden sm:flex flex-wrap justify-end gap-2">
                      {p.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>

                  <div className="sm:hidden mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>

                  <ul className="mt-4 list-disc list-inside space-y-1.5 text-sm text-zinc-200">
                    {p.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {p.links.map((l) => (
                      <FancyLink key={l.href} href={l.href} label={l.label} />
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-4">
                  <DrivePreview
                    fileId={p.demoDriveId}
                    title={`${p.title} demo`}
                  />
                  {p.youtubeEmbed && (
                    <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                      <iframe
                        src={p.youtubeEmbed}
                        title={`${p.title} presentation video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* 3D Art */}
      <Section id="art" title="3D Art" icon={<Box className="text-zinc-300" />}>
        <GlowCard gradient="from-sky-500/20 via-emerald-500/10 to-purple-500/20">
          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
              <h3 className="text-xl font-semibold tracking-tight">
                {art.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">{art.subtitle}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {art.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <ul className="mt-4 list-disc list-inside space-y-1.5 text-sm text-zinc-200">
                {art.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-3">
                {art.links.map((l) => (
                  <FancyLink key={l.href} href={l.href} label={l.label} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <SketchfabEmbed modelId={art.sketchfabId} title={art.title} />
            </div>
          </div>
        </GlowCard>
      </Section>

      <footer className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-8 text-sm text-zinc-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Mujia Chen</span>
          <div className="flex flex-wrap gap-4">
            <a
              href="/portfolio"
              className="hover:text-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/70 rounded"
            >
              Back to Portfolio
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
