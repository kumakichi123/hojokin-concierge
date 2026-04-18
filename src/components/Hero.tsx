import Image from "next/image";
import styles from "./Hero.module.css";

const badges = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 5V9.5L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    text: "6万件超を横断収集",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M2 9C2 5.13 5.13 2 9 2s7 3.13 7 7-3.13 7-7 7-7-3.13-7-7z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 5.5v1.2M9 9.5v2.2M6.5 7.5l1 .6M10.5 9.5l1 .5M6.5 10.5l1-.5M10.5 7.5l1-.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    text: "47都道府県対応",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 2L10.9 6.8L16 7.3L12.5 10.5L13.5 15.5L9 13L4.5 15.5L5.5 10.5L2 7.3L7.1 6.8L9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    text: "新着更新を毎日通知",
  },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>
        <div className={styles.stage}>
          {/* Mobile title (shown above image on small screens) */}
          <div className={styles.mobileIntro}>
            <h1 className={styles.mobileTitle}>
              知らないだけで、
              <br />
              逃すお金がある。
            </h1>
          </div>

          {/* Background image */}
          <div className={styles.media}>
            <Image
              src="/hero-woman-side-profile.png"
              alt="補助金・助成金の確認イメージ"
              fill
              priority
              className={styles.heroImage}
              sizes="100vw"
            />
            <div className={styles.overlay} aria-hidden="true" />
            <div className={styles.leftShade} aria-hidden="true" />
            <div className={styles.bottomShade} aria-hidden="true" />
          </div>

          {/* Copy block */}
          <div className={styles.copy}>
            <h1 className={styles.title}>
              知らないだけで、
              <br />
              逃すお金がある。
            </h1>

            <p className={styles.lead}>
              補助金・助成金・給付金は、申請した会社だけが受け取れます。
              <br />
              毎日60,000件超の制度を追跡し、あなたの会社に合った候補を
              見つけ次第すぐ通知します。
            </p>

            <div className={styles.ctaGroup}>
              <a href="#contact" className={styles.primaryCta} id="hero-cta-primary">
                無料で申し込む
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M4 9H14M10 5L14 9L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#features" className={styles.secondaryCta} id="hero-cta-secondary">
                できることを見る
              </a>
            </div>

            {/* Trust badges */}
            <div className={styles.badges}>
              {badges.map((badge) => (
                <div key={badge.text} className={styles.badge}>
                  <span className={styles.badgeIcon}>{badge.icon}</span>
                  <span className={styles.badgeText}>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
