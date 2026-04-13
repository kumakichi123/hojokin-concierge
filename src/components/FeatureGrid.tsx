import styles from "./FeatureGrid.module.css";

const features = [
  {
    icon: "URL",
    label: "会社URL",
    desc: "会社サイトをもとに確認するための必須項目です。",
    tag: "必須",
  },
  {
    icon: "MAIL",
    label: "メールアドレス",
    desc: "24時間以内のご案内送付先として利用します。",
    tag: "必須",
  },
  {
    icon: "AREA",
    label: "所在地（都道府県）",
    desc: "対象制度の確認に必要な地域情報です。",
    tag: "必須",
  },
  {
    icon: "TYPE",
    label: "事業形態",
    desc: "法人または個人事業主を選択式で受け付けます。",
    tag: "必須",
  },
  {
    icon: "KIND",
    label: "確認したい制度種別",
    desc: "補助金、助成金、給付金、わからないから選べます。",
    tag: "必須",
  },
  {
    icon: "NOTE",
    label: "補足事項",
    desc: "任意で補足を残せます。自由記述は最小限にとどめます。",
    tag: "任意",
  },
  {
    icon: "DB",
    label: "受付内容の保存",
    desc: "後続処理へ回せるようにDBへ保存する前提です。",
    tag: "運用",
  },
  {
    icon: "MAIL",
    label: "管理者通知",
    desc: "まずは管理者へメール通知し、内容確認後に個別対応します。",
    tag: "運用",
  },
];

const tagColors: Record<string, string> = {
  必須: "#2aab9f",
  任意: "#5b8dee",
  運用: "#f59e0b",
};

export default function FeatureGrid() {
  return (
    <section className="section section--light" id="feature-grid">
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">
            離脱を防ぐために
            <br />
            <span style={{ color: "var(--color-accent)" }}>入力項目は最小限</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.label} className={`card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{f.icon}</span>
                <span
                  className={styles.tag}
                  style={{ backgroundColor: `${tagColors[f.tag]}20`, color: tagColors[f.tag] }}
                >
                  {f.tag}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{f.label}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="#contact" className="btn btn--outline">
            受付フォームへ進む
          </a>
        </div>
      </div>
    </section>
  );
}
