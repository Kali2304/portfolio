import {
  Brain, Globe, GitBranch, Code2, Palette, Bot, Wind, Database,
} from "lucide-react";
import Image from "next/image";

const skills = [
  {
    title: "AI & LLMs",
    icon: Brain,
    description:
      "Building intelligent systems powered by modern AI models and conversational experiences.",
  },

  {
    title: "Next.js",
    icon: Globe,
    description:
      "Creating fast, scalable, and modern full-stack web applications with seamless performance.",
  },

  {
    title: "Python",
    icon: Code2,
    description:
      "Developing automation tools, AI systems, and backend logic with clean and efficient code.",
  },

  {
    title: "Tailwind CSS",
    icon: Wind,
    description:
      "Designing responsive and elegant interfaces with utility-first modern styling workflows.",
  },

  {
    title: "UI/UX Design",
    icon: Palette,
    description:
      "Crafting intuitive user experiences focused on clarity, accessibility, and visual balance.",
  },

  {
    title: "APIs",
    icon: Database,
    description:
      "Integrating external services and building reliable data-driven application architectures.",
  },

  {
    title: "GitHub",
    icon: GitBranch,
    description:
      "Managing version control, collaboration, and deployment workflows across development projects.",
  },

  {
    title: "Automation",
    icon: Bot,
    description:
      "Building smart automation systems that streamline repetitive tasks and improve productivity.",
  },

  {
    title: "React",
    icon: Globe,
    description:
      "Creating interactive and component-based user interfaces with smooth frontend experiences.",
  },

  {
    title: "Node.js",
    icon: Bot,
    description:
      "Developing scalable server-side applications and REST APIs with efficient backend architecture.",
  },

  {
    title: "SQL",
    icon: Database,
    description:
      "Designing structured databases and managing relational data with optimized queries.",
  },

  {
    title: "Machine Learning",
    icon: Brain,
    description:
      "Training intelligent models capable of pattern recognition, prediction, and smart decision-making.",
  },
];

const btnPrimary: React.CSSProperties = {
  borderRadius: "999px",
  background: "var(--foreground)",
  color: "var(--background)",
  padding: "14px 32px",
  fontSize: "14px",
  fontWeight: 500,
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

const btnSecondary: React.CSSProperties = {
  borderRadius: "999px",
  border: "1px solid var(--border)",
  background: "rgba(255,255,255,0.45)",
  color: "var(--foreground)",
  padding: "14px 32px",
  fontSize: "14px",
  fontWeight: 500,
  cursor: "pointer",
};

const card: React.CSSProperties = {
  borderRadius: "32px",
  border: "1px solid var(--border)",
  background: "rgba(255,255,255,0.55)",
  padding: "32px",
  backdropFilter: "blur(10px)",
};

const sectionLabel: React.CSSProperties = {
  fontSize: "11px",
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: "16px",
};

const sectionHeading: React.CSSProperties = {
  fontSize: "clamp(28px, 3.5vw, 48px)",
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: "-0.03em",
  margin: 0,
};

export default function Home() {
  return (
    <div
      id="top"
      style={{
        position: "relative",
        overflowX: "hidden",
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Ambient Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "-10%",
            top: "-10%",
            height: "500px",
            width: "500px",
            borderRadius: "50%",
            background: "rgba(216,195,165,0.25)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "-10%",
            height: "500px",
            width: "500px",
            borderRadius: "50%",
            background: "rgba(234,223,206,0.35)",
            filter: "blur(90px)",
          }}
        />
      </div>

      {/* Navbar */}
      <header
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "28px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: "18px",
            fontWeight: 500,
            letterSpacing: "0.04em",
          }}
        >
          Manas
        </span>

        <nav style={{ display: "flex", gap: "40px", fontSize: "14px" }}>
          <a
            href="#about"
            style={{ color: "var(--muted)", textDecoration: "none" }}
          >
            About
          </a>

          <a
            href="#projects"
            style={{ color: "var(--muted)", textDecoration: "none" }}
          >
            Projects
          </a>

          <a
            href="#contact"
            style={{ color: "var(--muted)", textDecoration: "none" }}
          >
            Contact
          </a>
        </nav>
      </header>

      <main
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 48px",
        }}
      >
        {/* Hero */}
        <section
          style={{
            padding: "60px 0 120px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "40px",
            alignItems: "center",
            minHeight: "88vh",
          }}
        >
          <div style={{ position: "relative", zIndex: 2 }}>
            <p style={sectionLabel}>Personal Portfolio</p>

            <h1
              style={{
                fontSize: "clamp(58px, 7vw, 96px)",
                fontWeight: 600,
                lineHeight: 0.98,
                letterSpacing: "-0.05em",
                margin: "0 0 28px",
              }}
            >
              Hi, I&apos;m Manas.
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.9",
                color: "var(--muted)",
                maxWidth: "540px",
                margin: "0 0 42px",
              }}
            >
              I create thoughtful digital experiences and AI-powered
              applications with a focus on simplicity, creativity, and
              meaningful interaction.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href="#projects" style={btnPrimary}>
                View Projects
              </a>

              <button style={btnSecondary}>Contact Me</button>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "560px",
                height: "560px",
                borderRadius: "50%",
                background: "rgba(216,195,165,0.18)",
                filter: "blur(90px)",
              }}
            />

            <div
              style={{
                position: "relative",
                width: "500px",
                height: "500px",
                borderRadius: "50%",
                overflow: "hidden",
                background: "#ebe7e1",
                boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
              }}
            >
              <Image
                src="/man.png"
                alt="Profile"
                fill
                priority
                sizes="500px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" style={{ padding: "100px 0" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
          >
            <div>
              <p style={sectionLabel}>About</p>

              <h2 style={sectionHeading}>
                Designing experiences that feel calm, human, and meaningful.
              </h2>
            </div>

            <div
              style={{
                borderRadius: "32px",
                border: "1px solid var(--border)",
                background: "rgba(255,255,255,0.55)",
                padding: "36px 40px",
                backdropFilter: "blur(12px)",
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.9",
                  color: "var(--muted)",
                  margin: 0,
                }}
              >
                I specialize in bridging the gap between sophisticated technology and human-centered design.
                        My focus is on engineering AI-powered applications and interactive systems that do more than just function—they feel intuitive, welcoming, and intentional.
                        I believe technology should be a quiet enabler, leaving users feeling inspired, capable, and more connected to the world around them.
              </p>

              <p
                style={{
                  marginTop: "20px",
                  fontSize: "15px",
                  lineHeight: "1.9",
                  color: "var(--muted)",
                }}
              >
                My goal is to create products that not only work well, but also
                leave people feeling comfortable, inspired, and connected.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" style={{ padding: "100px 0 120px" }}>
          <div style={{ maxWidth: "560px", marginBottom: "56px" }}>
            <p style={sectionLabel}>Skills</p>

            <h2 style={sectionHeading}>
              Tools and technologies I enjoy working with.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px",
            }}
          >
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  style={{
                    borderRadius: "28px",
                    border: "1px solid var(--border)",
                    background: "rgba(255,255,255,0.55)",
                    padding: "28px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "var(--card)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.8}
                      color="var(--accent)"
                    />
                  </div>

                  <h3
                    style={{
                      fontSize: "17px",
                      fontWeight: 600,
                      margin: "0 0 10px",
                    }}
                  >
                    {skill.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: "1.8",
                      color: "var(--muted)",
                      margin: 0,
                    }}
                  >
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" style={{ padding: "100px 0 140px" }}>
          <div style={{ maxWidth: "620px", marginBottom: "60px" }}>
            <p style={sectionLabel}>Projects</p>

            <h2 style={sectionHeading}>
              A few things I&apos;ve built and enjoyed working on.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            {/* TravelLoop */}
            <div style={card}>
              <p
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "18px",
                }}
              >
                AI Project
              </p>

              <h3
                style={{
                  fontSize: "22px",
                  margin: "0 0 14px",
                  fontWeight: 600,
                }}
              >
                TravelLoop AI Planner
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.9",
                  color: "var(--muted)",
                  marginBottom: "28px",
                }}
              >
                AI-powered travel planning platform with smart itinerary
                generation, interactive maps, and personalized destination
                experiences.
              </p>

              <a
                  href="https://github.com/Kali2304/odoo-hackathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                  textDecoration: "none",
                  color: "var(--foreground)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                View Project &rarr;
              </a>
            </div>

            {/* Voice Launcher */}
            <div style={card}>
              <p
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "18px",
                }}
              >
                Automation
              </p>

              <h3
                style={{
                  fontSize: "22px",
                  margin: "0 0 14px",
                  fontWeight: 600,
                }}
              >
                Voice Command Launcher
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.9",
                  color: "var(--muted)",
                  marginBottom: "28px",
                }}
              >
                Android assistant that launches apps and performs actions using
                voice commands with a clean and futuristic interface.
              </p>

              <a
                href="https://github.com/Kali2304/Voice-command-launcher"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "var(--foreground)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                View Project &rarr;
              </a>
            </div>

            {/* Traffic Detection */}
            <div style={card}>
              <p
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "18px",
                }}
              >
                AI System
              </p>

              <h3
                style={{
                  fontSize: "22px",
                  margin: "0 0 14px",
                  fontWeight: 600,
                }}
              >
                Traffic Violation Detection
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.9",
                  color: "var(--muted)",
                  marginBottom: "28px",
                }}
              >
                Intelligent traffic monitoring system capable of identifying
                rule violations and improving urban road safety.
              </p>

              <a
                href="https://github.com/Kali2304/Traffic-violation-detection"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "var(--foreground)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                View Project &rarr;
              </a>
            </div>

            {/* PashuSathi */}
            <div style={card}>
              <p
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "18px",
                }}
              >
                AI Healthcare
              </p>

              <h3
                style={{
                  fontSize: "22px",
                  margin: "0 0 14px",
                  fontWeight: 600,
                }}
              >
                PashuSathi
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.9",
                  color: "var(--muted)",
                  marginBottom: "28px",
                }}
              >
                AI-powered veterinary assistance platform designed to help
                farmers and pet owners identify animal diseases, receive
                guidance, and access smarter livestock care solutions.
              </p>

              <a
                href="https://github.com/Kali2304/pashuSaathi"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "var(--foreground)",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                View Project &rarr;
              </a>
            </div>
          </div>
        </section>
        {/* Contact */}
<section id="contact" style={{ padding: "80px 0 140px" }}>
  <div style={{ maxWidth: "700px", marginBottom: "50px" }}>
    <p style={sectionLabel}>Contact</p>

    <h2 style={sectionHeading}>
      Let&apos;s connect and build something meaningful together.
    </h2>
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "20px",
    }}
  >
    {/* LinkedIn */}
    <a
      href="www.linkedin.com/in/manas-chhonker-7aa5312b8"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...card,
        textDecoration: "none",
        color: "var(--foreground)",
      }}
    >
      <p
        style={{
          fontSize: "12px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "18px",
        }}
      >
        LinkedIn
      </p>

      <h3
        style={{
          fontSize: "22px",
          margin: "0 0 14px",
          fontWeight: 600,
        }}
      >
        Manas Chhonker
      </h3>

      <p
        style={{
          fontSize: "14px",
          lineHeight: "1.9",
          color: "var(--muted)",
          margin: 0,
        }}
      >
        Connect professionally and explore my experience, projects, and journey.
      </p>
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/Kali2304"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...card,
        textDecoration: "none",
        color: "var(--foreground)",
      }}
    >
      <p
        style={{
          fontSize: "12px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "18px",
        }}
      >
        Github
      </p>

      <h3
        style={{
          fontSize: "22px",
          margin: "0 0 14px",
          fontWeight: 600,
        }}
      >
        Kali2304
      </h3>

      <p
        style={{
          fontSize: "14px",
          lineHeight: "1.9",
          color: "var(--muted)",
          margin: 0,
        }}
      >
        Explore my repositories, development projects, and open-source work.
      </p>
    </a>

    {/* Email */}
    <a
      href="mailto:manaschhonker2005@gmail.com"
      style={{
        ...card,
        textDecoration: "none",
        color: "var(--foreground)",
      }}
    >
      <p
        style={{
          fontSize: "12px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "18px",
        }}
      >
        Email
      </p>

      <h3
        style={{
          fontSize: "22px",
          margin: "0 0 14px",
          fontWeight: 600,
          wordBreak: "break-word",
        }}
      >
        manaschhonker2005@gmail.com
      </h3>

      <p
        style={{
          fontSize: "14px",
          lineHeight: "1.9",
          color: "var(--muted)",
          margin: 0,
        }}
      >
        Reach out directly for collaborations, opportunities, or discussions.
      </p>
    </a>

    {/* Phone */}
    <a
      href="tel:+91 9054871422"
      style={{
        ...card,
        textDecoration: "none",
        color: "var(--foreground)",
      }}
    >
      <p
        style={{
          fontSize: "12px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "18px",
        }}
      >
        Phone
      </p>

      <h3
        style={{
          fontSize: "22px",
          margin: "0 0 14px",
          fontWeight: 600,
        }}
      >
        +91 9054 871422
      </h3>

      <p
        style={{
          fontSize: "14px",
          lineHeight: "1.9",
          color: "var(--muted)",
          margin: 0,
        }}
      >
        Available for networking, project discussions, and collaboration.
      </p>
    </a>
  </div>
</section>
      </main>

      {/* Back To Top */}
      <a
        href="#top"
        style={{
          position: "fixed",
          right: "32px",
          bottom: "32px",
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.7)",
          border: "1px solid var(--border)",
          backdropFilter: "blur(12px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          color: "var(--foreground)",
          fontSize: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          zIndex: 100,
        }}
      >
        ^
      </a>
    </div>
  );
}