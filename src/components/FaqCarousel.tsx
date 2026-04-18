"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CaseStudiesSection.module.css";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqCarouselProps = {
  items: FaqItem[];
};

export default function FaqCarousel({ items }: FaqCarouselProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    const viewport = viewportRef.current;
    const card = cardRefs.current[index];

    if (!viewport || !card) {
      return;
    }

    const nextLeft = card.offsetLeft - (viewport.clientWidth - card.clientWidth) / 2;

    viewport.scrollTo({
      left: Math.max(0, nextLeft),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const updateActiveCard = () => {
      const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
      let nextIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, index) => {
        if (!card) {
          return;
        }

        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nextIndex = index;
        }
      });

      setActiveIndex(nextIndex);
    };

    updateActiveCard();
    viewport.addEventListener("scroll", updateActiveCard, { passive: true });

    return () => viewport.removeEventListener("scroll", updateActiveCard);
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselHeader}>
        <button
          type="button"
          className={styles.navButton}
          aria-label="前のFAQへ"
          onClick={() => scrollToCard(activeIndex === 0 ? items.length - 1 : activeIndex - 1)}
        >
          &lt;
        </button>
        <div className={styles.carouselTitle}>FAQカード</div>
        <button
          type="button"
          className={styles.navButton}
          aria-label="次のFAQへ"
          onClick={() => scrollToCard(activeIndex === items.length - 1 ? 0 : activeIndex + 1)}
        >
          &gt;
        </button>
      </div>

      <div ref={viewportRef} className={styles.viewport}>
        <div className={styles.track}>
          {items.map((faq, index) => (
            <div
              key={faq.question}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className={`card ${styles.card} ${index === activeIndex ? styles.cardActive : ""}`}
            >
              <div className={styles.cardTag}>FAQ</div>
              <h4 className={styles.question}>{faq.question}</h4>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dots} aria-label="FAQ navigation">
        {items.map((faq, index) => (
          <button
            key={`${faq.question}-dot`}
            type="button"
            className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
            aria-label={`${index + 1}つ目のFAQを表示`}
            aria-pressed={index === activeIndex}
            onClick={() => scrollToCard(index)}
          />
        ))}
      </div>
    </div>
  );
}
