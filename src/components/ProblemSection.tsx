import styles from "./ProblemSection.module.css";

const solutions = [
  {
    num: "01",
    title: "簡単なフォームに入力",
    desc: "会社情報などをフォームに入れるだけで受付できます。長い説明や複雑な準備は不要です。",
  },
  {
    num: "02",
    title: "24時間以内に最初の制度を通知",
    desc: "企業に合いそうな補助金や助成金を毎日調査し、最初の候補を24時間以内に通知します。",
  },
  {
    num: "03",
    title: "新しい制度も最速で通知",
    desc: "その後も取れそうな補助金の情報が出るたびに、見逃す前にすぐ通知します。",
  },
];

export default function ProblemSection() {
  return (
    <section className={`section section--light ${styles.problem}`} id="problem">
      <div className="container">
        <div className={styles.problemBlock}>
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
              stroke="#2aab9f"
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

        <div className={styles.solutionBlock}>
          <h2 className={`section-title ${styles.solutionTitle}`}>ご利用の流れ</h2>
          <div className={styles.solutionGrid}>
            {solutions.map((s) => (
              <div key={s.num} className={`card ${styles.solutionCard}`}>
                <div className={styles.solutionNum}>{s.num}</div>
                <h3 className={styles.solutionCardTitle}>{s.title}</h3>
                <p className={styles.solutionDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
