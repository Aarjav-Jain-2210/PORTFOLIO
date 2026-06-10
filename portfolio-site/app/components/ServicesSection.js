"use client";
import FadeIn from "./FadeIn";
import styles from "../styles/services.module.css";

const SERVICES = [
  {
    number: "01",
    icon: "🚀",
    title: "AI & Machine Learning Solutions",
    description:
      "Building intelligent systems using Python, TensorFlow, PyTorch, and Scikit-learn.",
  },
  {
    number: "02",
    icon: "👁️",
    title: "Computer Vision Applications",
    description:
      "Custom object detection, image processing, and real-time monitoring solutions.",
  },
  {
    number: "03",
    icon: "🌐",
    title: "Full-Stack Web Development",
    description:
      "Modern web applications with React.js, MongoDB, and API integrations.",
  },
  {
    number: "04",
    icon: "🔒",
    title: "Cybersecurity Tools",
    description:
      "Phishing detection systems, browser extensions, and security-focused applications.",
  },
  {
    number: "05",
    icon: "📊",
    title: "Data Analytics & Visualization",
    description:
      "Transforming raw data into actionable business insights through ML and dashboards.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <FadeIn y={50}>
          <h2 className={styles.heading}>SERVICES</h2>
          <p className={styles.subtitle}>WHAT I CAN DO FOR YOU</p>
        </FadeIn>

        <div className={styles.list}>
          {SERVICES.map((service, i) => (
            <FadeIn key={service.number} delay={i * 0.06} y={20}>
              <div className={styles.serviceItem}>
                <div className={styles.serviceNumber}>
                  <span className={styles.serviceIcon}>{service.icon}</span>
                  {service.number}
                </div>
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.description}</p>
                </div>
                <div className={styles.serviceArrow}>→</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
