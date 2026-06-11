"use client";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/hero.module.css";

const ROLES = [
  "AI & ML Engineer",
  "Computer Vision Developer",
  "Full-Stack Developer",
  "Open-Source Contributor",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  // Entrance animation
  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(t);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(
          () => setDisplayText(currentRole.slice(0, displayText.length + 1)),
          80
        );
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(
          () => setDisplayText(displayText.slice(0, -1)),
          40
        );
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Snap-scroll: first scroll jumps to About
  useEffect(() => {
    let fired = false;
    const goToAbout = () => {
      if (fired) return;
      fired = true;
      const about = document.getElementById("about");
      if (about) about.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const onWheel = (e) => {
      if (fired || e.deltaY <= 0 || window.scrollY > 50) return;
      e.preventDefault();
      goToAbout();
    };

    const onKey = (e) => {
      if (fired || window.scrollY > 50) return;
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        goToAbout();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const scrollToAbout = () => {
    const about = document.getElementById("about");
    if (about) about.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} id="hero" className={styles.hero}>
      {/* Background video */}
      <video
        ref={videoRef}
        className={styles.heroVideo}
        src="/hero-video.mp4"
        playsInline
      />

      {/* Gradient overlays */}
      <div className={styles.gradientOverlay} />
      <div className={styles.bottomGradient} />

      {/* Play/Pause toggle */}
      <button
        className={styles.soundToggle}
        onClick={() => {
          if (videoRef.current) {
            if (isPlaying) {
              videoRef.current.pause();
              setIsPlaying(false);
            } else {
              videoRef.current.muted = false;
              videoRef.current.play();
              setIsPlaying(true);
            }
          }
        }}
        aria-label={isPlaying ? "Pause Video" : "Play Video"}
      >
        {!isPlaying ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        )}
      </button>

      {/* Content */}
      <div className={`${styles.content} ${showContent ? styles.visible : ""}`}>
        <p className={styles.tagline}>CREATIVE DEVELOPER & INNOVATOR</p>

        <h1 className={styles.name}>
          <span className={styles.firstName}>AARJAV</span>
          <span className={styles.lastName}>JAIN</span>
        </h1>

        <div className={styles.roleWrapper}>
          <span className={styles.roleText}>{displayText}</span>
          <span className={styles.cursor}>|</span>
        </div>

        <p className={styles.bio}>
          B.Tech CSE (AI & ML) Student building intelligent systems with
          cutting-edge technology. Passionate about AI, Computer Vision, and Full-Stack Development.
        </p>

        <div className={styles.ctas}>
          <a href="/resume.pdf" download className={styles.primaryBtn}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
          <button onClick={scrollToAbout} className={styles.secondaryBtn}>
            Explore More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className={styles.scrollIndicator}
        aria-label="Scroll down"
      >
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>SCROLL</span>
      </button>
    </section>
  );
}
