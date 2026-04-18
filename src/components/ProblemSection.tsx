import styles from "./ProblemSection.module.css";

const solutions = [
  {
    num: "01",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="5" y="4" width="22" height="28" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M10 12H22M10 17H19M10 22H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="24" cy="9" r="5" fill="var(--color-accent-light)" stroke="var(--color-accent)" strokeWidth="1.5"/>
        <path d="M22.5 9H25.5M24 7.5V10.5" stroke="var(--color-accent)" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: "簡単なフォームに入力",
    desc: "会社URLと地域・業種・使い道を選ぶだけ。複雑な準備は一切不要です。スマートフォンからでも2〜3分で完了します。",
  },
  {
    num: "02",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M16 10V16.5L20 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M27 7L30 5M5 7L2 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: "24時間以内に最初の候補を通知",
    desc: "担当者が会社サイトと入力内容を確認し、あなたの会社に合いそうな補助金・助成金の候補をメールでご案内します。",
  },
  {
    num: "03",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 16L13 21L24 11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
    title: "新しい制度も最速で通知",
    desc: "その後も取れそうな制度が出るたびに継続的にお知らせします。見逃す前に、あなたに合った情報が届きます。",
  },
];

export default function ProblemSection() {
  return (
    <section className={`section section--light ${styles.problem}`} id="problem">
      <div className="container">
        <div className={styles.problemBlock}>
          <div className={styles.problemHeader}>
            <span className="section-label">Problem</span>
            <h2 className={`section-title ${styles.problemTitle}`}>必要になってから探すと遅い</h2>
          </div>
          <p className={styles.problemIntro}>
            補助金や助成金は、必要になってから探すと遅いことが多い。
            <br />
            忙しい会社ほど、そのまま流れます。
          </p>
        </div>

        <div className={styles.arrow} aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M20 8L20 32M12 24L20 32L28 24"
              stroke="var(--color-accent)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={styles.arrowText}>
            企業に合った補助金・助成金・給付金を毎日調査し、
            通知するので取りこぼしを防げます。
          </span>
        </div>

        <div className={styles.flowDivider} aria-hidden="true">
          <span className={styles.flowDividerLine} />
          <span className={styles.flowDividerDot} />
          <span className={styles.flowDividerLine} />
        </div>

        <div className={styles.solutionBlock}>
          <h2 className={`section-title ${styles.solutionTitle}`}>ご利用の流れ</h2>
          <div className={styles.solutionGrid}>
            {solutions.map((s, idx) => (
              <div key={s.num} className={styles.solutionItem}>
                <div className={`card ${styles.solutionCard}`}>
                  <div className={styles.solutionHead}>
                    <div className={styles.solutionIconWrap}>{s.icon}</div>
                    <div className={styles.solutionNum}>{s.num}</div>
                  </div>
                  <h3 className={styles.solutionCardTitle}>{s.title}</h3>
                  <p className={styles.solutionDesc}>{s.desc}</p>
                </div>
                {idx < solutions.length - 1 && (
                  <div className={styles.stepConnector} aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12H19M15 8L19 12L15 16"
                        stroke="var(--color-accent)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
