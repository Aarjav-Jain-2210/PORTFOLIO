"use client";
import { useEffect, useRef } from "react";

export default function ScrollRevealText({ lines, className = "", style = {} }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lineEls = container.querySelectorAll("[data-reveal-line]");

    const handleScroll = () => {
      lineEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowH = window.innerHeight;
        // Reveal when line crosses 80% mark from top
        const trigger = windowH * 0.82;
        if (rect.top < trigger) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          el.style.filter = "blur(0)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={className} style={style}>
      {lines.map((line, i) => (
        <p
          key={i}
          data-reveal-line
          style={{
            opacity: 0,
            transform: "translateY(18px)",
            filter: "blur(4px)",
            transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.06}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.06}s, filter 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.06}s`,
          }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
