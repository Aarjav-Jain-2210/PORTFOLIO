"use client";
import FadeIn from "./FadeIn";
import styles from "../styles/skills.module.css";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: "💻",
    skills: ["C/C++", "Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    icon: "⚡",
    skills: ["React.js", "Node.js", "Express.js"],
  },
  {
    title: "AI / ML",
    icon: "🧠",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "NLP", "Computer Vision"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Figma", "Vercel"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <FadeIn y={50}>
          <h2
            className={`hero-heading ${styles.heading}`}
            style={{ fontSize: "clamp(3rem, 10vw, 120px)" }}
          >
            Skills
          </h2>
          <p className={styles.subtitle}>
            Technologies and tools I work with daily
          </p>
        </FadeIn>

        <div className={styles.grid}>
          {SKILL_CATEGORIES.map((category, i) => (
            <FadeIn key={category.title} delay={i * 0.08} y={30}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>{category.icon}</div>
                <h3 className={styles.cardTitle}>{category.title}</h3>
                <div className={styles.cardSkills}>
                  {category.skills.map((skill) => (
                    <span key={skill} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
