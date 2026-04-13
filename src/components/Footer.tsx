import Link from "next/link";
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
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logoMark}>
                <img src="/logo-mark.svg" alt="" width="36" height="36" />
              </div>
              <span className={styles.logoText}>補助金コンシェル</span>
            </Link>
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
