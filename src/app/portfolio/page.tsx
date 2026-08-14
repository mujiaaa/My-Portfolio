"use client";

import React, { useState } from "react";
import {
  Mail,
  Github,
  GraduationCap,
  Briefcase,
  Code2,
  FolderGit2,
  Heart,
  Sparkles,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  LayoutDashboard,
  Box,
} from "lucide-react";
import { FancyLink, GlowCard, Section, Tag } from "../components/site-ui";

// --- Content ---
const contact = {
  name: "Mujia Chen",
  headline: "Indie game enthusiast",
  motto: "Ça ira.",
  // blurb:
  //   "I build real-time worlds: rendering, gameplay systems, and interactive UI — aiming for crisp feel, clear visuals, and reliable polish.",
  email: "mujia@seas.upenn.edu",
  github: "https://github.com/mujiaaa",
};

const education = [
  {
    school: "University of Pennsylvania",
    place: "Pennsylvania, PA",
    degree: "M.S.E. in Computer Graphics and Game Technology",
    dates: "Aug 2025 – Present",
  },
  {
    school: "University of California, Santa Barbara",
    place: "Goleta, CA",
    degree: "B.S. in Computer Science",
    dates: "Aug 2022 – Jun 2025",
  },
];

type Project = {
  title: string;
  stack: string[];
  role: string;
  dates: string;
  blurb?: string;
  primaryLink?: { label: string; href: string };
  links?: { label: string; href: string }[];
  video?: string;
  image?: string;
  points: string[];
  features?: string[];
  gradient: string;
  pixel?: boolean;
};

const projects: Project[] = [
  {
    title: "Jungle Lite",
    stack: ["Physical Board Game", "Game Design", "Documentation"],
    role: "Game Designer / Documentation Lead",
    dates: "Spring 2026",
    blurb:
      "A two-player jungle strategy board game built around canopy paths, chokepoints, and terrain-driven pressure.",
    links: [
      {
        label: "Demo Video",
        href: "https://www.youtube.com/watch?v=k7sU8X2xmdI",
      },
      {
        label: "Milestone 1 PDF",
        href: "/jungle-lite/milestone1.pdf",
      },
      {
        label: "Milestone 2 PDF",
        href: "/jungle-lite/milestone2.pdf",
      },
      {
        label: "Milestone 3 PDF",
        href: "/jungle-lite/milestone3.pdf",
      },
      {
        label: "Final Rules PDF",
        href: "/jungle-lite/final_rule.pdf",
      },
    ],
    video: "https://www.youtube.com/embed/k7sU8X2xmdI",
    points: [
      "Co-designed terrain-dependent movement, asymmetric routes, character matchups, phase-based unit activation, and invasion/elimination win conditions.",
      "Developed and evaluated multiple gameplay prototypes, iterating on board size, movement routes, character balance, pacing, and rule complexity based on player behavior and playtest feedback.",
      "Helped run and document playtests, then translated feedback on cognitive load, matchup confusion, and underused mechanics into concrete rule changes.",
      "Took primary responsibility for gameplay documentation, including mechanics breakdowns, core loops, player-experience analysis, rules, design rationale, iteration notes, and gameplay-flow diagrams.",
      "Beautified the game board’s visual layout, and improved clarity of terrain, routes, pieces, and objectives, and edited the gameplay demo video.",
    ],
    features: [
      "2-Player Strategy",
      "Playtest Iteration",
      "Design Docs",
    ],
    gradient: "from-[#D4A5A5]/24 via-[#2B2B2B]/78 to-[#F2D6D6]/14",
  },
  {
    title: "Mini Minecraft",
    stack: ["C++", "OpenGL", "GLSL"],
    role: "Graphics / Gameplay Programmer",
    dates: "Fall 2025",
    blurb:
      "A voxel sandbox inspired by Minecraft — with a focus on engine systems, rendering polish, and moment-to-moment gameplay feel.",
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/CIS4600-Fall-2025/mini-minecraft-group-team-saeri",
      },
      {
        label: "Demo Video",
        href: "https://youtu.be/hP7itWxXKcM",
      },
    ],
    video: "https://www.youtube.com/embed/hP7itWxXKcM",
    points: [
      "Implemented the game-engine tick function and player physics.",
      "Built block texturing + texture animation for dynamic tiles.",
      "Implemented inventory system and on-screen GUI.",
      "Added a Zombie NPC with AI behavior.",
      "Placed assets procedurally to enrich exploration.",
      "Implemented distance fog for atmosphere + depth.",
      "Added a third-person camera mode.",
    ],
    features: [
      "Tick + Player Physics",
      "Texture + Animation",
      "Inventory + GUI",
      "Zombie AI",
      "Procedural Props",
      "Third-Person Mode",
    ],
    gradient: "from-[#2B2B2B]/88 via-[#D4A5A5]/16 to-[#F2D6D6]/12",
    pixel: true,
  },
  {
    title: "She Respawns Here",
    stack: ["Twine", "HTML", "Narrative Design"],
    role: "Writer / Game Designer",
    dates: "2026",
    blurb:
      "A standalone Twine narrative game, launched directly from this project card.",
    primaryLink: { label: "Play Game", href: "/twine_game.html" },
    image: "/twine_cover.png",
    points: [
      "Built and exported the full interactive story as a standalone HTML game.",
      "Designed the narrative flow, branching choices, and presentation in Twine.",
    ],
    features: ["Branching Narrative"],
    gradient: "from-[#D4A5A5]/20 via-[#2B2B2B]/82 to-[#F2D6D6]/14",
  },
  {
    title: "VR Bowling Learning Game",
    stack: ["Unity", "C#", "VR"],
    role: "Instruction Design Lead",
    dates: "Spring 2024",
    blurb:
      "A VR learning experience that teaches bowling techniques through guided practice and in-world instruction.",
    links: [
      { label: "GitHub Repo", href: "https://github.com/mujiaaa/VR-Bowling-Aid" },
      {
        label: "Feature Slides",
        href: "https://docs.google.com/presentation/d/15Z7Sob1Hhv2XPXXxDKgTh7Va5_WsFYte9rbLwak0v20/edit?usp=sharing",
      },
    ],
    video: "https://www.youtube.com/embed/DhsdgMlvKiE",
    points: [
      "Designed an in-game tutorial system for bowling techniques and strategies.",
      "Collaborated on gameplay mechanics for a realistic learning experience.",
    ],
    features: ["VR Tutorial UX", "Instruction Design", "Gameplay Tuning"],
    gradient: "from-[#2B2B2B]/86 via-[#D4A5A5]/18 to-[#F2D6D6]/12",
    pixel: true,
  },
];

const uiuxProjects = [
  {
    title: "Teacher-Parent Communication App",
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

type AnalysisItem = {
  title: string;
  focus: string;
  description: string;
  cta: string;
  pdfHref: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
};

const analysisItems: AnalysisItem[] = [
  {
    title: "Human: Fall Flat",
    focus: "MDA",
    description:
      "Uses the MDA framework to examine how mechanics and player interaction produce the game’s distinctive feel.",
    cta: "Read Analysis →",
    pdfHref: "/analysis/Human%20Fall%20Flat%20MDA%20analysis.pdf",
    thumbnailSrc: "/analysis/picture/human%20fall%20flat.png",
    thumbnailAlt: "Human: Fall Flat thumbnail",
  },
  {
    title: "Persona 5 Royal",
    focus: "Game Loops",
    description:
      "Breaks down the core gameplay loops and shows how repetition, progression, and structure maintain interest.",
    cta: "Read Analysis →",
    pdfHref: "/analysis/P5R%20Game%20Loops%20analysis.pdf",
    thumbnailSrc: "/analysis/picture/p5r.png",
    thumbnailAlt: "Persona 5 Royal thumbnail",
  },
  {
    title: "PEAK",
    focus: "Player Choice",
    description:
      "Studies how player choice is framed and how decisions affect engagement and interpretation.",
    cta: "Read Analysis →",
    pdfHref: "/analysis/PEAK%20Player%20Choice%20analysis.pdf",
    thumbnailSrc: "/analysis/picture/peak.png",
    thumbnailAlt: "PEAK thumbnail",
  },
  {
    title: "What Remains of Edith Finch",
    focus: "Story & Gameplay",
    description:
      "Explores how narrative structure and interactive sequences work together to create emotional impact.",
    cta: "Read Analysis →",
    pdfHref:
      "/analysis/What%20Remains%20of%20Edith%20Finch%20Story%20and%20Gameplay%20analysis.pdf",
    thumbnailSrc: "/analysis/picture/what%20remains.png",
    thumbnailAlt: "What Remains of Edith Finch thumbnail",
  },
  {
    title: "Cookie Clicker",
    focus: "Progression & Pacing",
    description:
      "Examines how incremental progression, milestone rewards, and pacing keep players engaged over time.",
    cta: "Read Analysis →",
    pdfHref: "/analysis/Cookie%20Clicker%20Progression%20and%20Pacing%20Analysis.pdf",
    thumbnailSrc: "/analysis/picture/cookie%20clicker.png",
    thumbnailAlt: "Cookie Clicker thumbnail",
  },
  {
    title: "Terraria",
    focus: "Problem Analysis",
    description:
      "Analyzes a specific design problem in Terraria and discusses my hypothesis on how to fix this issue.",
    cta: "Read Analysis →",
    pdfHref: "/analysis/Terraria%20_problem_%20analysis.pdf",
    thumbnailSrc: "/analysis/picture/terraria.png",
    thumbnailAlt: "Terraria thumbnail",
  },
  {
    title: "IDOLiSH7",
    focus: "Character Attachment & Collection Motivation",
    description:
      "Analyzes how IDOLiSH7 uses character writing, limited events, collection systems, and UI interactions to build emotional attachment and turn that attachment into long-term engagement and willingness to collect.",
    cta: "Read Analysis →",
    pdfHref: "/analysis/IDOLiSH7%20analysis.pdf",
    thumbnailSrc: "/analysis/picture/idolish7.PNG",
    thumbnailAlt: "IDOLiSH7 thumbnail",
  },
];

const skills = {
  languages: ["Python", "C++", "Swift", "C#", "JavaScript", "GLSL"],
  tools: ["Unity", "Figma", "Xcode", "Maya", "Twine", "Photoshop", "Procreate"],
};

function DrivePreview({ fileId, title }: { fileId: string; title: string }) {
  const src = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className="aspect-video rounded-2xl overflow-hidden border border-[#D88CFF]/16 bg-[#11101A]">
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
    <div className="aspect-video rounded-2xl overflow-hidden border border-[#D88CFF]/16 bg-[#11101A]">
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

const jumpLinks = [
  { href: "#about", label: "About", icon: Briefcase },
  { href: "#projects", label: "Projects", icon: FolderGit2 },
  { href: "#analysis", label: "Game Analysis", icon: Sparkles },
  { href: "#uiux", label: "UI/UX", icon: LayoutDashboard },
  { href: "#art", label: "3D Art", icon: Box },
  { href: "#skills", label: "Skills", icon: Code2 },
  { href: "#education", label: "Education", icon: GraduationCap },
] as const;

function SectionSidebar() {
  return (
    <aside className="hidden xl:block fixed inset-y-0 left-0 z-30 w-80">
      <div className="flex h-full flex-col border-r border-[#D88CFF]/16 bg-[#06060A]/92 px-5 py-6 backdrop-blur shadow-[18px_0_50px_rgba(0,0,0,0.28)]">
        <div className="pb-5 border-b border-[#281636]">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#AAA3B3]">
            Navigation
          </p>
          <p className="mt-2 text-sm text-[#F7F3F8]">
            Quick jumps
          </p>
        </div>

        <nav className="mt-5 space-y-1.5">
          {jumpLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 rounded-xl border-2 border-transparent px-3 py-3 text-sm text-[#F7F3F8] hover:border-[#FF3EB5]/28 hover:bg-[#281636] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3EB5]/70"
              >
                <Icon size={15} className="text-[#D88CFF]" />
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-[#281636] pt-4 text-xs text-[#AAA3B3]">
          ❤︎
        </div>
      </div>
    </aside>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <GlowCard gradient={p.gradient} pixel={p.pixel}>
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                <span className="text-[#F7F3F8]">
                  {p.title}
                </span>
              </h3>

              <p className="mt-1 text-sm text-[#AAA3B3]">
                {p.role} <span className="text-white/25">•</span> {p.dates}
              </p>

              {p.blurb && (
                <p className="mt-3 text-sm leading-relaxed text-[#F7F3F8]/92">
                  {p.blurb}
                </p>
              )}
            </div>

            <div className="hidden sm:flex flex-wrap justify-end gap-2">
              {p.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>

          <div className="sm:hidden mt-3 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>

          {/* Feature chips */}
          {p.features && (
            <div className="mt-4 flex flex-wrap gap-2">
              {p.features.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center rounded-full border border-[#D88CFF]/18 bg-[#11101A] px-3 py-1 text-xs text-[#F7F3F8]"
                >
                  {f}
                </span>
              ))}
            </div>
          )}

          <details className="mt-5">
            <summary className="cursor-pointer list-none inline-flex items-center gap-2 rounded-xl border border-[#D88CFF]/16 bg-[#11101A]/92 px-3 py-2 text-sm text-[#F7F3F8] hover:bg-[#281636] hover:border-[#FF3EB5]/35">
              <ChevronDown size={16} className="text-[#D88CFF]" />
              What I built <span className="text-[#AAA3B3]">(details)</span>
            </summary>
            <ul className="mt-4 list-disc list-inside space-y-1.5 text-sm text-[#F7F3F8]/88">
              {p.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </details>

          {p.primaryLink && (
            <div className="mt-5">
              <a
                href={p.primaryLink.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#FF3EB5]/35 bg-[#281636] px-5 py-3 text-sm font-semibold text-[#F7F3F8] shadow-[0_12px_32px_rgba(255,62,181,0.20)] transition hover:scale-[1.02] hover:border-[#D88CFF]/45 hover:shadow-[0_16px_40px_rgba(255,62,181,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3EB5]/80"
              >
                <ExternalLink size={16} />
                {p.primaryLink.label}
              </a>
            </div>
          )}

          {p.links && (
            <div className="mt-5 flex flex-wrap gap-3">
              {p.links.map((l) => (
                <FancyLink key={l.href} href={l.href} label={l.label} />
              ))}
            </div>
          )}
        </div>

        {(p.video || p.image) && (
          <div className="lg:col-span-2">
            <div className="aspect-video rounded-2xl overflow-hidden border border-[#D88CFF]/16 bg-[#11101A]">
              {p.video ? (
                <iframe
                  src={p.video}
                  title={`${p.title} demo video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <img
                  src={p.image}
                  alt={`${p.title} cover art`}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </GlowCard>
  );
}

function GameAnalysisCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState<"prev" | "next">("next");

  const current = analysisItems[selectedIndex];

  const goTo = (nextIndex: number, moveDirection: "prev" | "next") => {
    const wrapped = (nextIndex + analysisItems.length) % analysisItems.length;
    setDirection(moveDirection);
    setSelectedIndex(wrapped);
  };

  return (
    <Section
      id="analysis"
      title="Game Analysis"
      icon={<Sparkles className="text-[#FF3EB5]" />}
    >
      <div className="space-y-6">
        <div className="relative mx-auto w-full max-w-6xl">
          <button
            type="button"
            onClick={() => goTo(selectedIndex - 1, "prev")}
            aria-label="Previous analysis"
            className="absolute left-0 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#FF3EB5]/45 bg-[#11101A] p-3 text-[#F7F3F8] shadow-[0_0_22px_rgba(255,62,181,0.22)] transition hover:scale-105 hover:border-[#D88CFF]/70 hover:bg-[#281636] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3EB5]/80"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={() => goTo(selectedIndex + 1, "next")}
            aria-label="Next analysis"
            className="absolute right-0 top-1/2 z-20 translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#FF3EB5]/45 bg-[#11101A] p-3 text-[#F7F3F8] shadow-[0_0_22px_rgba(255,62,181,0.22)] transition hover:scale-105 hover:border-[#D88CFF]/70 hover:bg-[#281636] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3EB5]/80"
          >
            <ChevronRight size={18} />
          </button>

          <div className="overflow-hidden rounded-[2rem] border-2 border-[#FF3EB5]/40 bg-[#11101A] p-3 shadow-[0_0_0_1px_rgba(255,62,181,0.14),0_24px_70px_rgba(0,0,0,0.55)]">
            <div
              key={selectedIndex}
              className={
                direction === "next"
                  ? "animate-[carouselSlideInRight_320ms_ease]"
                  : "animate-[carouselSlideInLeft_320ms_ease]"
              }
            >
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] rounded-[1.4rem] border-2 border-[#D88CFF]/28 bg-[#06060A] p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <p className="inline-flex items-center rounded-full border-2 border-[#FF3EB5]/30 bg-[#281636] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[#F7F3F8] shadow-[0_0_18px_rgba(255,62,181,0.12)]">
                      {current.focus}
                    </p>
                    <h3 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-[#F7F3F8]">
                      {current.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#AAA3B3]">
                      {current.description}
                    </p>
                  </div>

                  <a
                    href={current.pdfHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-xl border-2 border-[#FF3EB5]/50 bg-[#281636] px-5 py-3 text-sm font-semibold text-[#F7F3F8] shadow-[0_0_18px_rgba(255,62,181,0.16)] transition hover:border-[#D88CFF]/75 hover:bg-[#321842] hover:shadow-[0_0_28px_rgba(255,62,181,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3EB5]/80"
                  >
                    {current.cta}
                  </a>
                </div>

                <div className="overflow-hidden rounded-[1.2rem] border-2 border-[#D88CFF]/28 bg-[#11101A] shadow-[0_0_30px_rgba(216,140,255,0.12)]">
                  <img
                    src={current.thumbnailSrc}
                    alt={current.thumbnailAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {analysisItems.map((item, index) => {
            const active = index === selectedIndex;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => goTo(index, index > selectedIndex ? "next" : "prev")}
                className={`group rounded-2xl border-2 bg-[#11101A] p-2 text-left transition duration-200 ${
                  active
                    ? "border-[#FF3EB5] shadow-[0_0_0_1px_rgba(255,62,181,0.16),0_0_24px_rgba(255,62,181,0.22)]"
                    : "border-[#D88CFF]/18 hover:border-[#FF3EB5]/45 hover:shadow-[0_0_18px_rgba(255,62,181,0.12)]"
                }`}
                aria-pressed={active}
              >
                <div className="overflow-hidden rounded-xl border border-[#281636] bg-[#06060A]">
                  <img
                    src={item.thumbnailSrc}
                    alt={item.thumbnailAlt}
                    className={`h-24 w-full object-cover transition duration-200 group-hover:scale-[1.03] ${
                      active ? "brightness-110 saturate-110" : "opacity-80"
                    }`}
                  />
                </div>
                <div className="mt-2 px-1 pb-1">
                  <p className="text-xs font-semibold text-[#F7F3F8] line-clamp-2">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[11px] text-[#AAA3B3]">{item.focus}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#06060A] text-[#F7F3F8] overflow-hidden xl:pl-80">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-grid-faint opacity-[0.12]" />
        <div className="absolute -top-28 -right-24 h-96 w-96 rounded-full bg-[#FF3EB5]/12 blur-3xl float-2" />
        <div className="absolute top-16 -left-24 h-80 w-80 rounded-full bg-[#D88CFF]/10 blur-3xl float-1" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#281636]/35 blur-3xl float-3" />
      </div>
  <SectionSidebar />

      {/* Hero */}
  <header className="relative">
        <div className="absolute inset-0 -z-10 opacity-35" aria-hidden>
          {/* starfield */}
          <svg className="w-full h-full" preserveAspectRatio="none">
            {[...Array(90)].map((_, i) => (
              <circle
                key={i}
                cx={Math.random() * 100 + "%"}
                cy={Math.random() * 100 + "%"}
                r={Math.random() * 1.1}
                fill="white"
                opacity={Math.random() * 0.65 + 0.2}
              />
            ))}
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-12 pb-10">
          <div className="mt-6 relative">
            {/* decorative icons */}
            <div className="pointer-events-none absolute -right-2 top-0 hidden sm:block text-[#FF3EB5]/70 float-1">
              <Heart size={44} />
            </div>
            <div className="pointer-events-none absolute -left-2 -top-4 hidden sm:block text-[#D88CFF]/70 float-2">
              <Sparkles size={42} />
            </div>

            <p className="inline-flex items-center gap-2 rounded-full border-2 border-[#FF3EB5]/28 bg-[#11101A]/88 px-4 py-2 text-xs text-[#F7F3F8] backdrop-blur shadow-[0_0_18px_rgba(255,62,181,0.10)]">
              <span className="h-2 w-2 rounded-full bg-[#FF3EB5] shadow-[0_0_12px_rgba(255,62,181,0.65)]" />
              {contact.headline}
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
              <span className="text-[#F7F3F8]">
                {contact.name}
              </span>
            </h1>

            <p className="mt-2 text-[#AAA3B3] italic">{contact.motto}</p>

            {/* <p className="mt-5 text-zinc-200 max-w-2xl leading-relaxed">
              {contact.blurb}
            </p> */}

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#D88CFF]/28 bg-[#11101A] px-4 py-2 text-sm text-[#F7F3F8] hover:border-[#FF3EB5]/70 hover:bg-[#281636] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3EB5]/60"
              >
                <Mail size={16} /> {contact.email}
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#D88CFF]/28 bg-[#11101A] px-4 py-2 text-sm text-[#F7F3F8] hover:border-[#FF3EB5]/70 hover:bg-[#281636] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3EB5]/60"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="xl:hidden px-6 sm:px-8 pb-3">
        <div className="flex gap-2 overflow-x-auto whitespace-nowrap rounded-2xl border-2 border-[#D88CFF]/22 bg-[#11101A]/88 p-2 backdrop-blur shadow-[0_0_22px_rgba(216,140,255,0.10)]">
          {jumpLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-lg border-2 border-[#D88CFF]/22 bg-[#11101A] px-3 py-1.5 text-xs text-[#F7F3F8] hover:bg-[#281636] hover:border-[#FF3EB5]/45"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div>

      {/* About */}
      <Section
        id="about"
        title="About"
        icon={<Briefcase className="text-[#D88CFF]" />}
      >
        <GlowCard gradient="from-[#281636]/96 via-[#11101A]/88 to-[#D88CFF]/10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <p className="text-sm leading-relaxed text-[#F7F3F8]/92">
                I’m interested in designing games where mechanics, systems, and player 
                experience work closely together. I enjoy exploring how movement, interaction, 
                progression, level design, and feedback shape moment-to-moment play.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#AAA3B3]">
                My taste in games ranges from Japanese otome games and visual novels 
                to life sims, sandbox games, and competitive FPS titles. I’m especially drawn to projects 
                where strong mechanics support a distinctive world and give players meaningful 
                ways to interact with it.
              </p>
            </div>

            <div className="grid gap-3">
              <div className="rounded-2xl border border-[#D88CFF]/16 bg-[#11101A] p-4 backdrop-blur">
                <p className="text-xs text-[#AAA3B3]">I design</p>
                <p className="mt-1 text-sm text-[#F7F3F8]">
                  gameplay systems, levels, and UI
                </p>
              </div>
              <div className="rounded-2xl border border-[#D88CFF]/16 bg-[#11101A] p-4 backdrop-blur">
                <p className="text-xs text-[#AAA3B3]">Dream projects</p>
                <p className="mt-1 text-sm text-[#F7F3F8]">
                  narrative games + systems-driven worlds
                </p>
              </div>
            </div>
          </div>
        </GlowCard>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        title="Projects"
        icon={<FolderGit2 className="text-[#FF3EB5]" />}
      >
        <div className="space-y-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </Section>

      <GameAnalysisCarousel />

      <Section
        id="uiux"
        title="UI/UX"
        icon={<LayoutDashboard className="text-[#D88CFF]" />}
      >
        <div className="space-y-6">
          {uiuxProjects.map((p) => (
            <GlowCard
              key={p.title}
              gradient="from-[#281636]/96 via-[#11101A]/88 to-[#FF3EB5]/10"
            >
              <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#AAA3B3]">{p.subtitle}</p>
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

                  <ul className="mt-4 list-disc list-inside space-y-1.5 text-sm text-[#F7F3F8]">
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
                    <div className="aspect-video rounded-2xl overflow-hidden border border-[#D88CFF]/16 bg-[#11101A]">
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

      <Section id="art" title="3D Art" icon={<Box className="text-[#D88CFF]" />}>
        <GlowCard gradient="from-[#281636]/96 via-[#11101A]/88 to-[#D88CFF]/10">
          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
              <h3 className="text-xl font-semibold tracking-tight">
                {art.title}
              </h3>
              <p className="mt-1 text-sm text-[#AAA3B3]">{art.subtitle}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {art.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <ul className="mt-4 list-disc list-inside space-y-1.5 text-sm text-[#F7F3F8]">
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

      {/* Skills */}
      <Section id="skills" title="Skills" icon={<Code2 className="text-[#FF3EB5]" />}>
        <div className="grid md:grid-cols-2 gap-6">
          <GlowCard gradient="from-[#281636]/96 via-[#11101A]/88 to-[#FF3EB5]/10">
            <h3 className="font-medium">Languages</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.languages.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </GlowCard>

          <GlowCard gradient="from-[#11101A]/92 via-[#281636]/88 to-[#D88CFF]/10">
            <h3 className="font-medium">Tools & Platforms</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.tools.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </GlowCard>
        </div>
      </Section>

      {/* Education */}
      <Section
        id="education"
        title="Education"
        icon={<GraduationCap className="text-[#D88CFF]" />}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((ed) => (
            <GlowCard
              key={ed.school}
              gradient="from-[#11101A]/92 via-[#281636]/92 to-[#D88CFF]/10"
            >
              <h3 className="text-lg font-semibold">{ed.school}</h3>
              <p className="text-sm text-[#AAA3B3]">{ed.place}</p>
              <p className="mt-2 text-sm text-[#F7F3F8]">{ed.degree}</p>
              <p className="text-sm text-[#AAA3B3]">{ed.dates}</p>
            </GlowCard>
          ))}
        </div>
      </Section>

      <footer className="border-t border-[#D88CFF]/14">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-8 text-sm text-[#AAA3B3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span>
            © {new Date().getFullYear()} {contact.name}
          </span>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-[#F7F3F8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3EB5]/70 rounded"
            >
              Email
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F7F3F8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3EB5]/70 rounded"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
