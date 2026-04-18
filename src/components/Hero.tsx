import Image from "next/image";
import styles from "./Hero.module.css";

const badges = [
  {
    text: "6万件超を横断収集",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 5.2V9L11.8 10.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    text: "47都道府県対応",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 6.1V11.9M6.1 9H11.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="9" cy="9" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    text: "新着更新を毎日通知",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path
          d="M9 2.8L10.65 6.15L14.35 6.69L11.67 9.3L12.3 13L9 11.27L5.7 13L6.33 9.3L3.65 6.69L7.35 6.15L9 2.8Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.mediaLayer} aria-hidden="true">
        <Image
          src="/hero-woman-side-profile.png"
          alt="補助金・助成金の確認イメージ"
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            知らないだけで、
            <br />
            逃すお金がある。
          </h1>

          <p className={styles.lead}>
            補助金・助成金・給付金は、申請した会社だけが受け取れます。毎日60,000件超の制度を追跡し、あなたの会社に合った候補を見つけ次第すぐ通知します。
          </p>

          <div className={styles.ctaGroup}>
            <a href="#contact" className={styles.primaryCta} id="hero-cta-primary">
              無料で申し込む →
            </a>
            <a href="#features" className={styles.secondaryCta} id="hero-cta-secondary">
              できることを見る
            </a>
          </div>

          <div className={styles.badges}>
            {badges.map((badge) => (
              <div key={badge.text} className={styles.badge}>
                <span className={styles.badgeIcon}>{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
