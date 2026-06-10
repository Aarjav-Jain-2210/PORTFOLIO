"use client";
import { useEffect, useRef } from "react";

export default function AnimatedText({
  text,
  className = "",
  tag: Tag = "p",
  style = {},
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Wrap each character in a span
    container.innerHTML = "";
    const chars = text.split("");
    chars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.opacity = "0.15";
      span.style.transition = "opacity 0.05s ease";
      span.style.display = "inline";
      container.appendChild(span);
    });

    const spans = container.querySelectorAll("span");

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Calculate progress: 0 when element enters bottom, 1 when at top
      const start = windowH * 0.85;
      const end = windowH * 0.2;
      const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));

      const revealCount = Math.floor(progress * spans.length);
      spans.forEach((span, i) => {
        span.style.opacity = i < revealCount ? "1" : "0.15";
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [text]);

  return <Tag ref={containerRef} className={className} style={style} />;
}
