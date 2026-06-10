"use client";
import FadeIn from "./FadeIn";
import ScrollRevealText from "./ScrollRevealText";
import styles from "../styles/about.module.css";

const SKILL_ROWS = [
  ["Python", "Machine Learning", "Computer Vision", "Deep Learning"],
  ["PyTorch", "TensorFlow", "OpenCV", "Scikit-Learn"],
  ["React.js", "Node.js", "MongoDB", "Docker"],
  ["Generative AI", "Full-Stack Development"],
];

const STATS = [
  {
    value: "SoI",
    label: "Survey of India",
    sublabel: "Intern",
    color: "var(--accent-blue)",
  },
  {
    value: "PwC",
    label: "Acceleration Center India",
    sublabel: "Advisory Launchpad Trainee",
    color: "var(--accent-purple)",
  },
  {
    value: "CFB '25",
    label: "Code For Bharat",
    sublabel: "Finalist",
    color: "var(--accent-orange)",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Heading */}
        <FadeIn y={50}>
          <h2 className={`hero-heading ${styles.heading}`}>About Me</h2>
        </FadeIn>

        {/* Role badges */}
        <FadeIn delay={0.08} y={20}>
          <div className={styles.roleBadges}>
            <span className={styles.roleBadge}>
              <span className={styles.roleDot} style={{ background: "var(--accent-blue)" }} />
              AI & ML Engineer
            </span>
            <span className={styles.roleBadge}>
              <span className={styles.roleDot} style={{ background: "var(--accent-orange)" }} />
              Full-Stack Developer
            </span>
          </div>
        </FadeIn>

        {/* Bio — scroll-revealed line by line */}
        <ScrollRevealText
          className={styles.bioWrapper}
          style={{
            textAlign: "center",
            maxWidth: "960px",
            width: "100%",
          }}
          lines={[
            "Aspiring AI & ML Engineer currently pursuing B.Tech in Computer Science (AI & ML) at Graphic Era Deemed University.",
            "",
            "Passionate about building intelligent systems that combine machine learning, computer vision, and software engineering to solve real-world challenges.",
            "",
            "My experience includes training YOLOv8 models on 45,000+ images for urban infrastructure monitoring, developing AI-powered analytics solutions, and creating full-stack applications enhanced with modern AI capabilities.",
            "",
            "I enjoy transforming complex problems into scalable, data-driven products that deliver measurable impact.",
          ]}
        />

        {/* Skills — structured rows */}
        <FadeIn delay={0.22} y={30}>
          <div className={styles.skillsBlock}>
            {SKILL_ROWS.map((row, ri) => (
              <div key={ri} className={styles.skillRow}>
                {row.map((skill) => (
                  <span key={skill} className={styles.pill}>
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Achievement cards */}
        <div className={styles.stats}>
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={0.08 * i} y={20}>
              <div className={styles.statCard}>
                <div className={styles.statValue} style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statSublabel}>{stat.sublabel}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Terminal card */}
        <FadeIn delay={0.15} y={40}>
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span className={styles.dot} style={{ background: "#ff5f57" }} />
              <span className={styles.dot} style={{ background: "#febc2e" }} />
              <span className={styles.dot} style={{ background: "#28c840" }} />
              <span className={styles.terminalTitle}>aarjav@portfolio ~ %</span>
            </div>
            <div className={styles.terminalBody}>
              <p>
                <span className={styles.prompt}>$</span> whoami
              </p>
              <br />
              <p className={styles.termName}>Aarjav Jain</p>
              <br />
              <p className={styles.termRole}>AI & ML Engineer</p>
              <p className={styles.termRole}>Computer Vision Developer</p>
              <p className={styles.termRole}>Full-Stack Developer</p>
              <br />
              <p className={styles.termFocus}>Current Focus:</p>
              <p className={styles.termItem}>
                <span className={styles.arrow}>→</span> YOLOv8 & Computer Vision
              </p>
              <p className={styles.termItem}>
                <span className={styles.arrow}>→</span> Deep Learning with PyTorch
              </p>
              <p className={styles.termItem}>
                <span className={styles.arrow}>→</span> Generative AI Applications
              </p>
              <p className={styles.termItem}>
                <span className={styles.arrow}>→</span> Intelligent Full-Stack Systems
              </p>
              <br />
              <p className={styles.blinkLine}>
                <span className={styles.prompt}>$</span>{" "}
                <span className={styles.cursor}>_</span>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
