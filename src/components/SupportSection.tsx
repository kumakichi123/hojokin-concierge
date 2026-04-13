import styles from "./SupportSection.module.css";

const steps = [
  {
    num: 1,
    title: "フォーム入力",
    desc: "会社URL、メールアドレス、所在地、事業形態、確認したい制度種別を入力します。",
  },
  {
    num: 2,
    title: "受付内容を保存",
    desc: "入力内容を保存し、確認に回します。",
  },
  {
    num: 3,
    title: "24時間以内に案内",
    desc: "会社サイトと入力内容をもとに候補制度をメールで案内します。",
  },
];

export default function SupportSection() {
  return (
    <section className="section section--light" id="support">
      <div className="container">
        <div className={styles.block}>
          <div className={styles.blockHeader}>
            <h2 className="section-title">受付から案内までの流れ</h2>
          </div>

          <div className={styles.steps}>
            {steps.map((s, i) => (
              <div key={s.num} className={styles.stepWrapper}>
                <div className={styles.step}>
                  <div className={styles.stepNum}>{s.num}</div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className={styles.stepArrow} aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12H19M15 8L19 12L15 16"
                        stroke="#2aab9f"
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
