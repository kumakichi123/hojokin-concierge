import Image from "next/image";
import styles from "./DemoPreviewSection.module.css";

const points = [
  { emoji: "🔔", text: "新着通知で見逃しゼロ" },
  { emoji: "📊", text: "上限額・補助率・締切を一覧確認" },
  { emoji: "📱", text: "PC・スマホどちらでも使いやすい" },
];

export default function DemoPreviewSection() {
  return (
    <section className={`${styles.section} section`} id="demo-preview">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.label}>サービス画面イメージ</p>
          <h2 className={styles.heading}>
            あなたの会社に合った補助金が、
            <br />
            毎日届く。
          </h2>
          <p className={styles.subCopy}>
            煩雑な情報収集は不要。AIが企業情報をもとに最適な補助金をピックアップし、
            PC・スマホで確認できるダッシュボードでいつでも把握できます。
          </p>
        </div>

        {/* Device mockup */}
        <div className={styles.showcase}>
          {/* Browser frame (PC) */}
          <div className={styles.browserFrame}>
            <div className={styles.browserBar}>
              <div className={styles.browserDots}>
                <span className={styles.browserDot} />
                <span className={styles.browserDot} />
                <span className={styles.browserDot} />
              </div>
            </div>
            <Image
              src="/demo-preview-pc.png"
              alt="補助金コンシェル PCダッシュボード画面"
              width={1280}
              height={720}
              className={styles.pcScreenshot}
              priority
            />
          </div>

          {/* Phone frame (hidden on mobile) */}
          <div className={styles.phoneFrame}>
            <div className={styles.phoneInner}>
              <div className={styles.phoneNotch} aria-hidden="true" />
              <Image
                src="/demo-preview-mobile.png"
                alt="補助金コンシェル スマホダッシュボード画面"
                width={390}
                height={844}
                className={styles.mobileScreenshot}
              />
            </div>
          </div>
        </div>

        {/* Feature points */}
        <div className={styles.points}>
          {points.map((p) => (
            <div key={p.text} className={styles.point}>
              <span className={styles.pointEmoji} aria-hidden="true">{p.emoji}</span>
              {p.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
