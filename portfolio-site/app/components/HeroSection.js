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
  const [isMuted, setIsMuted] = useState(false);
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
        autoPlay
        muted={isMuted}
        playsInline
      />

      {/* Gradient overlays */}
      <div className={styles.gradientOverlay} />
      <div className={styles.bottomGradient} />

      {/* Sound toggle */}
      <button
        className={styles.soundToggle}
        onClick={() => {
          setIsMuted(!isMuted);
          if (videoRef.current) videoRef.current.muted = !isMuted;
        }}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
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
