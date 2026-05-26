"use client";

import {
  Brain, Globe, GitBranch, Code2, Palette, Bot, Wind, Database, Server, Layers,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, CSSProperties, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const skills = [
  { title: "AI & LLMs",        icon: Brain,    desc: "Intelligent, conversational systems powered by modern AI models." },
  { title: "Next.js",          icon: Globe,    desc: "Fast, scalable full-stack web apps with seamless performance." },
  { title: "Python",           icon: Code2,    desc: "Automation tools, AI pipelines, and clean backend logic." },
  { title: "UI/UX Design",     icon: Palette,  desc: "Intuitive interfaces focused on clarity and visual balance." },
  { title: "React",            icon: Layers,   desc: "Component-based interfaces with smooth frontend experiences." },
  { title: "Tailwind CSS",     icon: Wind,     desc: "Responsive, elegant interfaces with utility-first styling." },
  { title: "APIs",             icon: Database, desc: "Integrating services and building data-driven architectures." },
  { title: "Automation",       icon: Bot,      desc: "Smart systems that streamline repetitive tasks at scale." },
  { title: "Node.js",          icon: Server,   desc: "Scalable server-side applications and REST APIs." },
  { title: "SQL",              icon: Database, desc: "Structured databases with optimized relational queries." },
  { title: "Machine Learning", icon: Brain,    desc: "Models for pattern recognition, prediction, and decisions." },
  { title: "GitHub",           icon: GitBranch,desc: "Version control, collaboration, and deployment workflows." },
];

const projects = [
  { type: "AI Project",    title: "TravelLoop AI Planner",       desc: "AI-powered travel planning with smart itinerary generation, interactive maps, and personalized destination experiences.", tags: ["Next.js","AI","Maps API"],          href: "https://github.com/Kali2304/odoo-hackathon",            featured: true  },
  { type: "AI Healthcare", title: "PashuSathi",                  desc: "AI-powered veterinary platform helping farmers and pet owners identify animal diseases and access smarter livestock care.", tags: ["Python","AI","Healthcare"],         href: "https://github.com/Kali2304/pashuSaathi",               featured: false },
  { type: "AI System",     title: "Traffic Violation Detection", desc: "Intelligent traffic monitoring system that identifies rule violations and improves urban road safety.",                       tags: ["Python","Computer Vision","ML"],    href: "https://github.com/Kali2304/Traffic-violation-detection",featured: false },
  { type: "Automation",    title: "Voice Command Launcher",      desc: "Android assistant that launches apps and performs actions using voice commands with a clean, futuristic interface.",         tags: ["Android","Voice AI","Automation"],  href: "https://github.com/Kali2304/Voice-command-launcher",    featured: false },
];

const contacts = [
  { platform: "LinkedIn", value: "Manas Chhonker",               sub: "Professional profile & experience",        href: "https://www.linkedin.com/in/manas-chhonker-7aa5312b8", icon: "💼" },
  { platform: "GitHub",   value: "Kali2304",                     sub: "Repositories & open-source work",          href: "https://github.com/Kali2304",                          icon: "🐙" },
  { platform: "Email",    value: "manaschhonker2005@gmail.com",   sub: "Best for collaborations & opportunities",  href: "mailto:manaschhonker2005@gmail.com",                   icon: "✉️" },
  { platform: "Phone",    value: "+91 9054 871422",               sub: "Available for direct conversations",       href: "tel:+919054871422",                                    icon: "📱" },
];

/* ─────────────────────────────────────────
   ANIMATION HELPERS
───────────────────────────────────────── */
type AnimDir = "up" | "left" | "right" | "scale";

const animBase: CSSProperties = {
  transition: "opacity 0.6s ease, transform 0.6s ease",
};

function getInitial(dir: AnimDir): CSSProperties {
  if (dir === "up")    return { opacity: 0, transform: "translateY(28px)" };
  if (dir === "left")  return { opacity: 0, transform: "translateX(-24px)" };
  if (dir === "right") return { opacity: 0, transform: "translateX(24px)" };
  return { opacity: 0, transform: "scale(0.93)" };
}

const visibleStyle: CSSProperties = { opacity: 1, transform: "none" };

interface AnimProps {
  dir?: AnimDir;
  delay?: number;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

function Anim({ dir = "up", delay = 0, children, style, className, as: Tag = "div" }: AnimProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });
  const combined: CSSProperties = {
    ...animBase,
    transitionDelay: `${delay}ms`,
    ...(inView ? visibleStyle : getInitial(dir)),
    ...style,
  };
  // @ts-expect-error dynamic tag
  return <Tag ref={ref} style={combined} className={className}>{children}</Tag>;
}

/* count-up hook */
function useCountUp(target: number, active: boolean, duration = 900) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      start = Math.min(start + step, target);
      setVal(Math.round(start));
      if (start >= target) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [active, target, duration]);
  return val;
}

/* ─────────────────────────────────────────
   SHARED MICRO-COMPONENTS
───────────────────────────────────────── */
function SectionTag({ label }: { label: string }) {
  return (
    <Anim>
      <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 14, display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ display: "block", width: 18, height: 1, background: "var(--accent)" }} />
        {label}
      </p>
    </Anim>
  );
}

function Divider() {
  return <hr style={{ border: "none", borderTop: "1px solid rgba(176,137,104,0.12)" }} />;
}

const sectionH2: CSSProperties = {
  fontSize: "clamp(28px, 3.5vw, 44px)",
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: "-0.03em",
  margin: 0,
  color: "var(--foreground)",
};

const bodyP: CSSProperties = {
  fontSize: 14,
  lineHeight: 1.9,
  color: "var(--muted)",
  marginBottom: 16,
};

const card: CSSProperties = {
  background: "rgba(255,255,255,0.55)",
  border: "1px solid rgba(176,137,104,0.15)",
  borderRadius: 20,
  padding: "24px 28px",
  backdropFilter: "blur(10px)",
};

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  /* sticky nav glass effect */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* hero fade-in on mount */
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 80); return () => clearTimeout(t); }, []);

  /* stat count-up triggers when hero is visible */
  const count1 = useCountUp(4,  heroVisible, 800);
  const count2 = useCountUp(12, heroVisible, 950);

  function heroStyle(delay: number): CSSProperties {
    return {
      ...animBase,
      transitionDelay: `${delay}ms`,
      ...(heroVisible ? visibleStyle : getInitial("up")),
    };
  }

  return (
    <div id="top" style={{ position: "relative", overflowX: "hidden", background: "var(--background)", color: "var(--foreground)" }}>

      {/* Ambient blobs */}
      <div style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}>
        <div style={{ position: "absolute", left: "-10%", top: "-10%", height: 500, width: 500, borderRadius: "50%", background: "rgba(216,195,165,0.22)", filter: "blur(90px)" }} />
        <div style={{ position: "absolute", bottom: "-15%", right: "-10%", height: 500, width: 500, borderRadius: "50%", background: "rgba(234,223,206,0.32)", filter: "blur(90px)" }} />
      </div>

      {/* ── NAVBAR ── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: scrolled ? "rgba(245,241,235,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(176,137,104,0.15)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 17, fontWeight: 600, letterSpacing: "0.05em" }}>Manas</span>
          <nav style={{ display: "flex", gap: 36, fontSize: 13 }}>
            {["about","skills","projects","contact"].map(s => (
              <a key={s} href={`#${s}`}
                style={{ color: "var(--muted)", textDecoration: "none", textTransform: "capitalize", letterSpacing: "0.02em", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>{s}</a>
            ))}
          </nav>
          <a href="mailto:manaschhonker2005@gmail.com" style={{ fontSize: 12, fontWeight: 500, padding: "9px 22px", borderRadius: 999, border: "1px solid var(--accent)", color: "var(--accent)", background: "transparent", textDecoration: "none", letterSpacing: "0.03em", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--accent)"; }}>
            Get in touch
          </a>
        </div>
      </header>

      <main style={{ maxWidth: 1160, margin: "0 auto", padding: "0 40px" }}>

        {/* ── HERO ── */}
        <section style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 60, alignItems: "center", minHeight: "88vh", padding: "60px 0 100px" }}>
          <div>
            <div style={heroStyle(0)}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 24 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", display: "inline-block",
                  animation: "pulse 2s ease infinite" }} />
                Available for opportunities
              </div>
            </div>

            <h1 style={{ ...heroStyle(120), fontSize: "clamp(58px, 7vw, 88px)", fontWeight: 600, lineHeight: 0.97, letterSpacing: "-0.05em", margin: "0 0 28px" }}>
              Hi, I&apos;m<br />
              <span style={{ color: "var(--accent)" }}>Manas.</span>
            </h1>

            <p style={{ ...heroStyle(220), fontSize: 16, lineHeight: 1.9, color: "var(--muted)", maxWidth: 480, margin: "0 0 40px" }}>
              I build AI-powered applications and thoughtful digital experiences — bridging sophisticated technology with calm, human-centered design.
            </p>

            <div style={{ ...heroStyle(320), display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#projects" style={{ borderRadius: 999, background: "var(--foreground)", color: "var(--background)", padding: "13px 30px", fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer", textDecoration: "none", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--foreground)")}>
                View Projects
              </a>
              <a href="#contact" style={{ borderRadius: 999, border: "1px solid rgba(176,137,104,0.4)", background: "transparent", color: "var(--muted)", padding: "13px 30px", fontSize: 13, fontWeight: 500, cursor: "pointer", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(176,137,104,0.4)"; e.currentTarget.style.color = "var(--muted)"; }}>
                Contact Me
              </a>
            </div>
          </div>

          {/* Image + stats */}
          <div style={{ ...heroStyle(200), display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: 28, background: "var(--card)", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.06)" }}>
              <Image src="/man.png" alt="Manas Chhonker" fill priority sizes="500px" style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {([{ n: count1, l: "Projects shipped" }, { n: count2, l: "Technologies" }]).map(({ n, l }) => (
                <div key={l} style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(176,137,104,0.18)", borderRadius: 16, padding: "16px 20px", backdropFilter: "blur(8px)" }}>
                  <div style={{ fontSize: 22, fontWeight: 600, color: "var(--foreground)" }}>{n}+</div>
                  <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 3, letterSpacing: "0.04em" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" style={{ padding: "100px 0" }}>
          <SectionTag label="About" />
          <Anim delay={100}>
            <h2 style={sectionH2}>I make technology feel<br />quiet, capable, and human.</h2>
          </Anim>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start", marginTop: 52 }}>
            <div>
              <Anim dir="left" delay={150}><p style={bodyP}>I specialize in engineering AI-powered applications and interactive systems that do more than just function — they feel intuitive, welcoming, and intentional.</p></Anim>
              <Anim dir="left" delay={230}><p style={bodyP}>My focus is on the space where design and engineering meet: building things that work beautifully, not just correctly. The best technology is invisible.</p></Anim>
              <Anim delay={310}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 28 }}>
                  {["AI & LLMs","Full-stack","UI/UX Design","Open to work"].map(t => (
                    <span key={t} style={{ fontSize: 11, padding: "6px 14px", borderRadius: 999, border: "1px solid rgba(176,137,104,0.35)", color: "var(--accent)", letterSpacing: "0.05em" }}>{t}</span>
                  ))}
                </div>
              </Anim>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: "🎯", title: "Engineering meets design",  body: "I build systems that are as thoughtful to look at as they are to use.",                              delay: 150 },
                { icon: "🤖", title: "AI-first mindset",          body: "Every project explores what's possible when intelligence is baked in from the start.",               delay: 230 },
                { icon: "⚡", title: "Ship fast, iterate often",  body: "From hackathons to side projects, I move quickly and improve relentlessly.",                         delay: 310 },
              ].map(({ icon, title, body, delay }) => (
                <Anim key={title} dir="right" delay={delay}>
                  <div style={card}>
                    <div style={{ fontSize: 22, marginBottom: 10 }}>{icon}</div>
                    <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 6, color: "var(--foreground)" }}>{title}</h4>
                    <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.75, margin: 0 }}>{body}</p>
                  </div>
                </Anim>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── SKILLS ── */}
        <section id="skills" style={{ padding: "100px 0" }}>
          <SectionTag label="Skills" />
          <Anim delay={100}><h2 style={sectionH2}>Tools and technologies I<br />enjoy working with.</h2></Anim>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginTop: 52 }}>
            {skills.map(({ title, icon: Icon, desc }, i) => (
              <Anim key={title} delay={i * 60}>
                <div style={{ ...card, cursor: "default", transition: "border-color 0.2s, transform 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(176,137,104,0.5)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(176,137,104,0.15)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: "var(--card)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                    <Icon size={18} strokeWidth={1.8} color="var(--accent)" />
                  </div>
                  <h3 style={{ fontSize: 13, fontWeight: 600, margin: "0 0 6px", color: "var(--foreground)" }}>{title}</h3>
                  <p style={{ fontSize: 11.5, color: "var(--muted)", lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </Anim>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── PROJECTS ── */}
        <section id="projects" style={{ padding: "100px 0" }}>
          <SectionTag label="Projects" />
          <Anim delay={100}><h2 style={sectionH2}>A few things I&apos;ve built<br />and enjoyed working on.</h2></Anim>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginTop: 52 }}>
            {projects.map(({ type, title, desc, tags, href, featured }, i) => (
              <Anim key={title} delay={i * 90}>
                <div style={{
                  background: featured ? "linear-gradient(145deg,#fffdfb,#fdf8f2)" : "rgba(255,255,255,0.55)",
                  border: `1px solid ${featured ? "rgba(176,137,104,0.4)" : "rgba(176,137,104,0.15)"}`,
                  borderRadius: 24, padding: 32, display: "flex", flexDirection: "column", gap: 12,
                  backdropFilter: "blur(10px)", transition: "border-color 0.2s", height: "100%",
                }}
                  onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(176,137,104,0.5)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = featured ? "rgba(176,137,104,0.4)" : "rgba(176,137,104,0.15)")}>
                  <p style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 500, margin: 0 }}>{type}</p>
                  <h3 style={{ fontSize: 19, fontWeight: 600, color: "var(--foreground)", margin: 0, lineHeight: 1.25 }}>{title}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {tags.map(t => (
                      <span key={t} style={{ fontSize: 10, padding: "3px 10px", borderRadius: 999, background: "var(--card)", color: "var(--muted)", border: "1px solid rgba(176,137,104,0.2)" }}>{t}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.85, flex: 1, margin: 0 }}>{desc}</p>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: 12, fontWeight: 500, color: "var(--accent)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 5, marginTop: 4 }}>
                    View on GitHub <span>→</span>
                  </a>
                </div>
              </Anim>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── CONTACT ── */}
        <section id="contact" style={{ padding: "100px 0 120px" }}>
          <SectionTag label="Contact" />
          <Anim delay={100}><h2 style={sectionH2}>Let&apos;s build something<br />meaningful together.</h2></Anim>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginTop: 52 }}>
            {contacts.map(({ platform, value, sub, href, icon }, i) => (
              <Anim key={platform} delay={i * 80}>
                <a href={href} target="_blank" rel="noopener noreferrer"
                  style={{ ...card, padding: "26px 30px", textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: 18, transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(176,137,104,0.5)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(176,137,104,0.15)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <div style={{ width: 44, height: 44, minWidth: 44, borderRadius: 14, background: "var(--card)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{icon}</div>
                  <div>
                    <p style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 4px" }}>{platform}</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "var(--foreground)", margin: "0 0 2px", wordBreak: "break-word" }}>{value}</p>
                    <p style={{ fontSize: 12, color: "var(--muted)", margin: 0 }}>{sub}</p>
                  </div>
                </a>
              </Anim>
            ))}
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid rgba(176,137,104,0.12)", padding: "28px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1160, margin: "0 auto" }}>
        <p style={{ fontSize: 12, color: "var(--muted)" }}>© 2025 Manas Chhonker</p>
        <p style={{ fontSize: 12, color: "var(--muted)" }}>Built with Next.js · Designed with care</p>
      </footer>

      {/* Back to top */}
      <a href="#top" style={{ position: "fixed", right: 28, bottom: 28, width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,0.75)", border: "1px solid rgba(176,137,104,0.25)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", color: "var(--foreground)", fontSize: 18, boxShadow: "0 6px 24px rgba(0,0,0,0.07)", zIndex: 100, transition: "transform 0.2s" }}
        onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
        ↑
      </a>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.35); }
        }
      `}</style>
    </div>
  );
}