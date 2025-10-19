import React from "react";
import { Mail, Phone, Github, GraduationCap, Briefcase, Code2, FolderGit2, Link as LinkIcon } from "lucide-react";

// --- Simple data model built from the resume ---
const contact = {
  name: "Mujia Chen",
  email: "mujia@seas.upenn.edu",
  phone: "+1-614-852-1552",
  github: "https://github.com/mujiaaa",
  tagline: "Ça ira."
};

const education = [
  {
    school: "University of Pennsylvania",
    place: "Pennsylvania, PA",
    degree: "M.S.E. in Computer Graphics and Game Technology",
    dates: "Aug 2025 – Present"
  },
  {
    school: "University of California, Santa Barbara",
    place: "Goleta, CA",
    degree: "B.S. in Computer Science",
    dates: "Aug 2022 – Jun 2025"
  }
];

const projects = [
  {
    title: "VR Bowling Learning Game",
    stack: ["Unity", "C#", "VR"],
    role: "Instruction Design Lead",
    dates: "Apr 2024 – Jun 2024",
    links: [
      { label: "GitHub Repo", href: "https://github.com/mujiaaa/VR-Bowling-Aid" },
      { label: "Feature Slides", href: "https://docs.google.com/presentation/d/15Z7Sob1Hhv2XPXXxDKgTh7Va5_WsFYte9rbLwak0v20/edit?usp=sharing" }
    ],
    video: "https://www.youtube.com/embed/DhsdgMlvKiE",
    points: [
      "Designed in‑game tutorial system for bowling techniques and strategies.",
      "Collaborated on gameplay mechanics for a realistic learning experience."
    ]
  }
];

const skills = {
  languages: ["Python", "C++", "Swift", "C#", "JavaScript", "GLSL"],
  tools: ["Unity", "Xcode", "Maya", "Figma"],
};

// --- Small presentational components ---
function Section({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="max-w-5xl mx-auto px-6 sm:px-8 py-10">
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow">
      {children}
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-950 via-zinc-950 to-black text-zinc-100">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
          {/* Simple starfield */}
          <svg className="w-full h-full" preserveAspectRatio="none">
            {[...Array(120)].map((_, i) => (
              <circle key={i} cx={Math.random()*100+"%"} cy={Math.random()*100+"%"} r={Math.random()*1.2} fill="white" opacity={Math.random()*0.7+0.2} />
            ))}
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-16 pb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{contact.name}</h1>
          <p className="mt-3 text-zinc-300 max-w-2xl">{contact.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 hover:bg-zinc-800" href={`mailto:${contact.email}`}>
              <Mail size={16}/> {contact.email}
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 hover:bg-zinc-800" href={`tel:${contact.phone.replaceAll(" ", "")}`}>
              <Phone size={16}/> {contact.phone}
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-4 py-2 hover:bg-zinc-800" href={contact.github} target="_blank" rel="noreferrer">
              <Github size={16}/> GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Projects */}
      <Section title="Projects" icon={<FolderGit2 className="text-zinc-400"/>}>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card key={p.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    {p.role} • {p.dates}
                  </p>
                </div>
                <div className="text-xs text-zinc-400">{p.stack.join(" · ")}</div>
              </div>

              <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-zinc-200">
                {p.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>

              {/* 🔗 Optional resource links (GitHub, slides, etc.) */}
              {p.links && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {p.links.map((l, i) => (
                    <a
                      key={i}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-3 py-1.5 text-sm text-blue-400 hover:bg-zinc-800 hover:underline"
                    >
                      <LinkIcon size={14} /> {l.label}
                    </a>
                  ))}
                </div>
              )}

              {/* 🎬 Embedded video (VR Bowling Demo) */}
              {p.video && (
                <div className="mt-4 aspect-video rounded-xl overflow-hidden border border-zinc-800">
                  <iframe
                    src={p.video}
                    title={`${p.title} demo video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills" icon={<Code2 className="text-zinc-400"/>}>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-medium">Languages</h3>
            <p className="mt-2 text-sm text-zinc-300">{skills.languages.join(" • ")}</p>
          </Card>
          <Card>
            <h3 className="font-medium">Tools & Platforms</h3>
            <p className="mt-2 text-sm text-zinc-300">{skills.tools.join(" • ")}</p>
          </Card>
        </div>
      </Section>

      {/* Education */}
      <Section title="Education" icon={<GraduationCap className="text-zinc-400"/>}>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((ed) => (
            <Card key={ed.school}>
              <h3 className="text-lg font-semibold">{ed.school}</h3>
              <p className="text-sm text-zinc-400">{ed.place}</p>
              <p className="mt-2 text-sm">{ed.degree}</p>
              <p className="text-sm text-zinc-400">{ed.dates}</p>
            </Card>
          ))}
        </div>
      </Section>

      <footer className="border-t border-zinc-900/60">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-8 text-sm text-zinc-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} {contact.name}</span>
          <div className="flex gap-4">
            <a href={`mailto:${contact.email}`} className="hover:text-zinc-200">Email</a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="hover:text-zinc-200">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
