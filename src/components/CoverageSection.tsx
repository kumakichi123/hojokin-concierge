import styles from "./CoverageSection.module.css";

const stats = [
  {
    value: "60,000+",
    label: "公募・支援情報",
    note: "補助金・助成金・給付金を全国横断で収集",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M8 11h12M8 15h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="22" cy="8" r="4" fill="currentColor" opacity="0.15"/>
        <circle cx="22" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M21 8h2M22 7v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    value: "47",
    label: "都道府県対応",
    note: "国だけでなく地域制度まで候補に含めて確認",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M14 4C14 4 10 9 10 14C10 19 14 24 14 24" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M14 4C14 4 18 9 18 14C18 19 14 24 14 24" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M4 14H24" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M5.5 10H22.5M5.5 18H22.5" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2"/>
      </svg>
    ),
  },
  {
    value: "毎日",
    label: "継続追跡",
    note: "新着公募や更新情報を継続的に収集・通知",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M14 8V14.5L18 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22.5 6L25 4M5.5 6L3 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function CoverageSection() {
  return (
    <section className={styles.coverage} aria-label="対応範囲と収集体制">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.grid}>
            {stats.map((stat, idx) => (
              <article key={stat.label} className={styles.card}>
                <div className={styles.cardHead}>
                  <span className={styles.icon}>{stat.icon}</span>
                  <span className={`${styles.value} tabular-nums`}>{stat.value}</span>
                </div>
                <p className={styles.label}>{stat.label}</p>
                <p className={styles.note}>{stat.note}</p>
                {idx < stats.length - 1 && (
                  <div className={styles.divider} aria-hidden="true" />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
