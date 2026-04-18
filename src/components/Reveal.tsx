"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./Reveal.module.css";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  variant?: "up" | "left" | "right" | "scale";
};

export default function Reveal({
  children,
  className,
  delayMs = 0,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isPrepared, setIsPrepared] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const rect = node.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const isInInitialViewport = rect.top < viewportHeight * 0.92 && rect.bottom > 0;

    if (isInInitialViewport) {
      setIsPrepared(true);
      setIsVisible(true);
      return;
    }

    setIsPrepared(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const variantClassMap = {
    up: styles.variantUp,
    left: styles.variantLeft,
    right: styles.variantRight,
    scale: styles.variantScale,
  };

  const innerClasses = [
    styles.revealInner,
    isPrepared ? styles.prepared : "",
    isPrepared ? variantClassMap[variant] : "",
    isPrepared && !isVisible ? styles.hidden : "",
    isVisible ? styles.visible : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={className}>
      <div className={innerClasses} style={{ transitionDelay: `${delayMs}ms` }}>
        {children}
      </div>
    </div>
  );
}
