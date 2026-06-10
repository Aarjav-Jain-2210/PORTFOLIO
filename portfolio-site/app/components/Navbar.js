"use client";
import { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          &lt;AJ/&gt;
        </a>

        {/* Desktop links */}
        <div className={styles.links}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
          <button 
            className={styles.resumeBtn}
            onClick={() => setShowResumeModal(true)}
          >
            Resume
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            className={styles.resumeBtn}
            onClick={() => {
              setMenuOpen(false);
              setShowResumeModal(true);
            }}
          >
            Resume
          </button>
        </div>
      )}

      {/* Resume Modal */}
      {showResumeModal && (
        <div className={styles.modalOverlay} onClick={() => setShowResumeModal(false)}>
          <button 
            className={styles.modalClose} 
            onClick={(e) => {
              e.stopPropagation();
              setShowResumeModal(false);
            }}
            aria-label="Close modal"
          >
            &times;
          </button>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <iframe 
              src="/PORTFOLIO/resume.pdf" 
              title="Aarjav Jain Resume"
              width="100%" 
              height="100%"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
