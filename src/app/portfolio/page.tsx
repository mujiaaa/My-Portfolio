import React from "react";
import {
  Mail,
  Phone,
  Github,
  GraduationCap,
  Briefcase,
  Code2,
  FolderGit2,
  Heart,
  Sparkles,
  ChevronDown,
  Palette,
} from "lucide-react";
import Link from "next/link";
import { FancyLink, GlowCard, Section, Tag } from "../components/site-ui";
import { SiteHeader } from "../components/site-header";

// --- Content ---
const contact = {
  name: "Mujia Chen",
  headline: "Indie game enthusiast",
  motto: "Ça ira.",
  // blurb:
  //   "I build real-time worlds: rendering, gameplay systems, and interactive UI — aiming for crisp feel, clear visuals, and reliable polish.",
  email: "mujia@seas.upenn.edu",
  phone: "+1-614-852-1552",
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
  links?: { label: string; href: string }[];
  video?: string;
  points: string[];
  features?: string[];
  gradient: string;
  pixel?: boolean;
};

const projects: Project[] = [
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
    gradient: "from-emerald-400/30 via-sky-400/20 to-purple-500/25",
    pixel: true,
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
    gradient: "from-fuchsia-500/35 via-pink-500/20 to-sky-500/25",
  },
];

const skills = {
  languages: ["Python", "C++", "Swift", "C#", "JavaScript", "GLSL"],
  tools: ["Unity", "Xcode", "Maya", "Substance Painter", "Figma"],
};

function ProjectCard({ p }: { p: Project }) {
  return (
    <GlowCard gradient={p.gradient} pixel={p.pixel}>
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  {p.title}
                </span>
              </h3>

              <p className="mt-1 text-sm text-zinc-300">
                {p.role} <span className="text-zinc-500">•</span> {p.dates}
              </p>

              {p.blurb && (
                <p className="mt-3 text-sm leading-relaxed text-zinc-200">
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
                  className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200"
                >
                  {f}
                </span>
              ))}
            </div>
          )}

          <details className="mt-5">
            <summary className="cursor-pointer list-none inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10">
              <ChevronDown size={16} className="text-zinc-300" />
              What I built <span className="text-zinc-500">(details)</span>
            </summary>
            <ul className="mt-4 list-disc list-inside space-y-1.5 text-sm text-zinc-200">
              {p.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </details>

          {/* links */}
          {p.links && (
            <div className="mt-5 flex flex-wrap gap-3">
              {p.links.map((l) => (
                <FancyLink key={l.href} href={l.href} label={l.label} />
              ))}
            </div>
          )}
        </div>

        {/* video */}
        {p.video && (
          <div className="lg:col-span-2">
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <iframe
                src={p.video}
                title={`${p.title} demo video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        )}
      </div>
    </GlowCard>
  );
}

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-zinc-950 via-black to-zinc-950 text-zinc-100 overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-grid-faint opacity-25" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl float-2" />
        <div className="absolute top-16 -left-24 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl float-1" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl float-3" />
      </div>

      <SiteHeader />

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
            <div className="pointer-events-none absolute -right-2 top-0 hidden sm:block text-pink-300/40 float-1">
              <Heart size={44} />
            </div>
            <div className="pointer-events-none absolute -left-2 -top-4 hidden sm:block text-sky-300/35 float-2">
              <Sparkles size={42} />
            </div>

            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
              {contact.headline}
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                {contact.name}
              </span>
            </h1>

            <p className="mt-2 text-zinc-300 italic">{contact.motto}</p>

            {/* <p className="mt-5 text-zinc-200 max-w-2xl leading-relaxed">
              {contact.blurb}
            </p> */}

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/60"
              >
                <Mail size={16} /> {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replaceAll(" ", "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/60"
              >
                <Phone size={16} /> {contact.phone}
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/60"
              >
                <Github size={16} /> GitHub
              </a>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-500/70 via-pink-500/70 to-sky-500/70 gradient-animated px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/70"
              >
                <FolderGit2 size={16} />
                View Projects
              </a>

              <Link
                href="/design"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500/75 via-orange-500/70 to-rose-500/75 gradient-animated px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/70"
              >
                <Palette size={16} />
                Design & Art
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <Section
        id="about"
        title="About"
        icon={<Briefcase className="text-zinc-300" />}
      >
        <GlowCard gradient="from-purple-500/25 via-pink-500/15 to-sky-500/20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <p className="text-sm leading-relaxed text-zinc-200">
                I’m interested in building game experiences where the
                moment-to-moment feel is as important as the visuals — snappy
                movement, readable UI, and atmosphere that supports play.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                I enjoy both engine work (physics, AI, rendering) and
                player-facing design (controls, feedback, UI). I’m always
                looking for projects where systems and polish work together.
              </p>
            </div>

            <div className="grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-zinc-400">I build</p>
                <p className="mt-1 text-sm text-zinc-200">
                  gameplay systems, shaders, and UI
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-zinc-400">Dream projects</p>
                <p className="mt-1 text-sm text-zinc-200">
                  stylish indie games + narrative UX
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
        icon={<FolderGit2 className="text-zinc-300" />}
      >
        <div className="space-y-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" icon={<Code2 className="text-zinc-300" />}>
        <div className="grid md:grid-cols-2 gap-6">
          <GlowCard gradient="from-purple-500/25 via-pink-500/15 to-purple-500/20">
            <h3 className="font-medium">Languages</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.languages.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </GlowCard>

          <GlowCard gradient="from-sky-500/25 via-emerald-500/15 to-pink-500/20">
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
        icon={<GraduationCap className="text-zinc-300" />}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((ed) => (
            <GlowCard
              key={ed.school}
              gradient="from-white/10 via-white/5 to-white/10"
            >
              <h3 className="text-lg font-semibold">{ed.school}</h3>
              <p className="text-sm text-zinc-400">{ed.place}</p>
              <p className="mt-2 text-sm text-zinc-200">{ed.degree}</p>
              <p className="text-sm text-zinc-400">{ed.dates}</p>
            </GlowCard>
          ))}
        </div>
      </Section>

      <footer className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-8 text-sm text-zinc-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span>
            © {new Date().getFullYear()} {contact.name}
          </span>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/70 rounded"
            >
              Email
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70 rounded"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
