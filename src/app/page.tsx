import {
  Brain,
  Globe,
  GitBranch,
  Code2,
  Palette,
  Bot,
  Wind,
  Database,
} from "lucide-react";

const skills = [
  { title: "AI & LLMs", icon: Brain },
  { title: "Next.js", icon: Globe },
  { title: "Python", icon: Code2 },
  { title: "Tailwind CSS", icon: Wind },
  { title: "UI/UX Design", icon: Palette },
  { title: "APIs", icon: Database },
  { title: "GitHub", icon: GitBranch },
  { title: "Automation", icon: Bot },
];

export default function Home() {
  return (
    <div style={{ position: "relative", overflow: "hidden", background: "var(--background)", color: "var(--foreground)" }}>

      {/* Ambient Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: -1, pointerEvents: "none" }}>
        <div style={{ position: "absolute", left: "-10%", top: "-10%", height: "500px", width: "500px", borderRadius: "50%", background: "rgba(216,195,165,0.3)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "-20%", right: "-10%", height: "500px", width: "500px", borderRadius: "50%", background: "rgba(234,223,206,0.4)", filter: "blur(80px)" }} />
      </div>

      {/* Navbar */}
      <header style={{ maxWidth: "1280px", margin: "0 auto", padding: "24px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "18px", fontWeight: 500, letterSpacing: "0.05em" }}>Manas</span>
        <nav style={{ display: "flex", gap: "40px", fontSize: "14px" }}>
          <a href="#about" style={{ color: "var(--muted)", textDecoration: "none" }}>About</a>
          <a href="#projects" style={{ color: "var(--muted)", textDecoration: "none" }}>Projects</a>
          <a href="#contact" style={{ color: "var(--muted)", textDecoration: "none" }}>Contact</a>
        </nav>
      </header>

      <main style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}>

        {/* Hero */}
        <section style={{ padding: "96px 0 120px" }}>
          <div style={{ maxWidth: "760px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "28px" }}>
              Personal Portfolio
            </p>
            <h1 style={{ fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 600, lineHeight: 1.02, letterSpacing: "-0.04em", margin: 0 }}>
              Hi, I&apos;m Manas.
            </h1>
            <p style={{ marginTop: "28px", maxWidth: "520px", fontSize: "17px", lineHeight: "1.85", color: "var(--muted)" }}>
              I create thoughtful digital experiences and AI-powered applications with a focus on simplicity, creativity, and meaningful interaction.
            </p>
            <div style={{ marginTop: "44px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button style={{ borderRadius: "999px", background: "var(--foreground)", color: "var(--background)", padding: "13px 30px", fontSize: "14px", fontWeight: 500, border: "none", cursor: "pointer" }}>
                View Projects
              </button>
              <button style={{ borderRadius: "999px", border: "1px solid var(--border)", background: "rgba(255,255,255,0.4)", padding: "13px 30px", fontSize: "14px", fontWeight: 500, cursor: "pointer" }}>
                Contact Me
              </button>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" style={{ padding: "100px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "20px" }}>About</p>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.03em", margin: 0 }}>
                Designing experiences that feel calm, human, and meaningful.
              </h2>
            </div>
            <div style={{ borderRadius: "32px", border: "1px solid var(--border)", background: "rgba(255,255,255,0.55)", padding: "36px 40px" }}>
              <p style={{ fontSize: "15px", lineHeight: "1.9", color: "var(--muted)", margin: 0 }}>
                I&apos;m passionate about building modern digital experiences that combine thoughtful design with intelligent technology. I enjoy creating AI-powered applications, interactive interfaces, and systems that feel intuitive, welcoming, and useful.
              </p>
              <p style={{ marginTop: "20px", fontSize: "15px", lineHeight: "1.9", color: "var(--muted)" }}>
                My goal is to create products that not only work well, but also leave people feeling comfortable, inspired, and connected.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" style={{ padding: "100px 0 120px" }}>
          <div style={{ maxWidth: "560px", marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "16px" }}>Skills</p>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 600, lineHeight: 1.2, letterSpacing: "-0.03em", margin: 0 }}>
              Tools and technologies I enjoy working with.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.title}
                  style={{ borderRadius: "24px", border: "1px solid var(--border)", background: "rgba(255,255,255,0.6)", padding: "24px" }}
                >
                  <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "var(--card)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                    <Icon size={20} strokeWidth={1.8} color="var(--accent)" />
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px" }}>{skill.title}</h3>
                  <p style={{ fontSize: "13px", lineHeight: "1.75", color: "var(--muted)", margin: 0 }}>
                    Building thoughtful and modern digital experiences with simplicity and clarity.
                  </p>
                </div>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
}