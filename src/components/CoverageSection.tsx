import styles from "./CoverageSection.module.css";

const stats = [
  {
    value: "60,000+",
    label: "公募・支援情報",
    note: "全国の補助金・助成金・給付金を横断して確認",
  },
  {
    value: "47",
    label: "都道府県対応",
    note: "国だけでなく地域制度まで候補に含めて確認",
  },
  {
    value: "Daily",
    label: "毎日収集",
    note: "新着公募や更新情報を継続的に追跡",
  },
];

export default function CoverageSection() {
  return (
    <section className={styles.coverage} aria-label="対応範囲と収集体制">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.grid}>
            {stats.map((stat) => (
              <article key={stat.label} className={styles.card}>
                <div className={styles.value}>{stat.value}</div>
                <p className={styles.label}>{stat.label}</p>
                <p className={styles.note}>{stat.note}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
