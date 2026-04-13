import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>
        <div className={styles.stage}>
          <Image
            src="/hero-woman-side-profile.png"
            alt="制度確認のイメージ"
            fill
            priority
            className={styles.heroImage}
            sizes="100vw"
          />

          <div className={styles.leftShade} aria-hidden="true" />
          <div className={styles.bottomShade} aria-hidden="true" />

          <div className={styles.copy}>
            <h1 className={styles.title}>
              知らないだけで、
              <br />
              逃すお金がある。
            </h1>

            <p className={styles.lead}>
              補助金・助成金・給付金を毎日確認し、あなたの会社で申請できる候補を通知します。
            </p>

            <div className={styles.ctaGroup}>
              <a href="#contact" className={`btn ${styles.primaryCta}`}>
                まずは14日間！無料診断+トライアル
              </a>
              <a href="#features" className={`btn ${styles.secondaryCta}`}>
                できることを見る
              </a>
            </div>
          </div>

          <div className={styles.frame} />
        </div>
      </div>
    </section>
  );
}
