"use client";
import { useRef, useEffect, useState } from "react";
import FadeIn from "./FadeIn";
import styles from "../styles/projects.module.css";

const PROJECTS = [
  {
    number: "01",
    category: "AI/ML · Computer Vision",
    name: "Project Drishti",
    subtitle: "Urban Infrastructure Monitoring",
    description:
      "An AI-powered urban infrastructure monitoring system built using YOLOv8 and PyTorch. Detects potholes, billboards, and traffic signs from road images to support smart city infrastructure management.",
    tech: ["OpenCV", "PyTorch", "YOLOv8", "Roboflow"],
    metrics: [
      { label: "Training Images", value: "45K+" },
      { label: "F1-Score", value: "0.83" },
      { label: "Detection", value: "Real-time" },
    ],
    image: "/PORTFOLIO/projects/drishti.png",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    number: "02",
    category: "Machine Learning · Data Science",
    name: "Customer Segmentation",
    subtitle: "Behavioral Analysis Engine",
    description:
      "A machine learning solution that segments customers based on purchasing behavior using clustering and classification techniques to improve targeted marketing strategies.",
    tech: ["Scikit-learn", "NumPy", "Matplotlib", "Python"],
    metrics: [
      { label: "Customers", value: "50K+" },
      { label: "Accuracy", value: "94%" },
      { label: "Marketing Lift", value: "+30%" },
    ],
    image: "/PORTFOLIO/projects/segmentation.png",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    number: "03",
    category: "NLP · Machine Learning",
    name: "Spam Detection",
    subtitle: "Intelligent Email Classification",
    description:
      "An intelligent email spam detection system using Natural Language Processing and machine learning to classify emails with high accuracy while minimizing false positives.",
    tech: ["Python", "NLTK", "Scikit-learn", "Pandas"],
    metrics: [
      { label: "Emails Processed", value: "58K+" },
      { label: "Accuracy", value: "98%" },
      { label: "False Positives", value: "1.3%" },
    ],
    image: "/PORTFOLIO/projects/spam-detection.png",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    number: "04",
    category: "AI · FinTech",
    name: "SIMPLFY",
    subtitle: "Smart Finance Management",
    description:
      "A full-stack finance management platform that helps users track budgets, manage expenses, generate reports, and receive AI-powered financial assistance.",
    tech: ["React.js", "MongoDB", "OpenAI API"],
    metrics: [
      { label: "AI Chatbot", value: "✓" },
      { label: "PDF Reports", value: "✓" },
      { label: "Analytics", value: "Interactive" },
    ],
    image: "/PORTFOLIO/projects/simplfy.png",
    githubUrl: "#",
    liveUrl: "#",
  },
];

function ProjectCard({ project, index, total }) {
  const cardRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleScroll = () => {
      const rect = card.getBoundingClientRect();
      const windowH = window.innerHeight;
      const p = Math.max(
        0,
        Math.min(1, (windowH - rect.top) / (windowH + rect.height))
      );
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = 1 - (1 - targetScale) * Math.min(progress * 2, 1);

  return (
    <div
      ref={cardRef}
      className={styles.cardWrapper}
      style={{ top: `${80 + index * 28}px` }}
    >
      <div className={styles.card} style={{ transform: `scale(${scale})` }}>
        <div className={styles.cardInner}>
          <div className={styles.cardInfo}>
            <div className={styles.cardMeta}>
              <span className={styles.cardNumber}>{project.number}</span>
              <span className={styles.cardCategory}>{project.category}</span>
            </div>
            <h3 className={styles.cardName}>{project.name}</h3>
            <p className={styles.cardSubtitle}>{project.subtitle}</p>
            <p className={styles.cardDesc}>{project.description}</p>

            {/* Metric badges */}
            <div className={styles.metrics}>
              {project.metrics.map((m) => (
                <div key={m.label} className={styles.metricBadge}>
                  <span className={styles.metricValue}>{m.value}</span>
                  <span className={styles.metricLabel}>{m.label}</span>
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div className={styles.cardTech}>
              {project.tech.map((t) => (
                <span key={t} className={styles.techTag}>
                  {t}
                </span>
              ))}
            </div>

          </div>
          <div className={styles.cardImage}>
            <img src={project.image} alt={project.name} loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <FadeIn y={50}>
          <h2
            className={`hero-heading ${styles.heading}`}
            style={{ fontSize: "clamp(3rem, 10vw, 120px)" }}
          >
            Projects
          </h2>
          <p className={styles.subtitle}>FEATURED WORK & AI INNOVATIONS</p>
        </FadeIn>

        <div
          className={styles.stickyContainer}
          style={{ height: `${PROJECTS.length * 580 + 300}px` }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={i}
              total={PROJECTS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
