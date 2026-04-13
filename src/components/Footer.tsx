import styles from "./Footer.module.css";

const footerNav = [
  {
    title: "ページ",
    links: [
      { label: "できること", href: "#features" },
      { label: "よくある質問", href: "#case-studies" },
      { label: "受付フォーム", href: "#contact" },
    ],
  },
  {
    title: "受付",
    links: [
      { label: "無料で申し込む", href: "#contact" },
      { label: "24時間以内に案内", href: "#contact" },
      { label: "会社URLから開始", href: "#hero" },
    ],
  },
];

const legalLinks = [
  { label: "利用規約", href: "/terms" },
  { label: "プライバシーポリシー", href: "/privacy" },
  { label: "特定商取引法表記", href: "/commerce" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.brand}>
            <a href="/" className={styles.logoLink}>
              <div className={styles.logoMark}>
                <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="6" fill="#2aab9f" />
                  <path
                    d="M7 14C7 10.134 10.134 7 14 7C17.866 7 21 10.134 21 14"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="14" cy="18" r="3" fill="white" />
                </svg>
              </div>
              <span className={styles.logoText}>補助金コンシェル</span>
            </a>
            <p className={styles.tagline}>
              会社サイトURLから始める
              <br />
              補助金・助成金・給付金の受付
            </p>
          </div>

          {footerNav.map((col) => (
            <div key={col.title} className={styles.navCol}>
              <h3 className={styles.navTitle}>{col.title}</h3>
              <ul className={styles.navList}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.navLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <ul className={styles.legalList}>
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.legalLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className={styles.copyright}>© 2026 補助金コンシェル. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
