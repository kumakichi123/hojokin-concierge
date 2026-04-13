"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const navItems = [
  { label: "できること", href: "#features" },
  { label: "よくある質問", href: "#case-studies" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo} aria-label="補助金コンシェル トップへ">
          <div className={styles.logoMark}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
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

        <nav className={styles.nav} aria-label="グローバルナビゲーション">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.label} className={styles.navItem}>
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href="#contact" className="btn btn--primary btn--sm">
            無料で申し込む
          </a>
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開閉する"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <nav>
            <ul className={styles.mobileNavList}>
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className={styles.mobileCtas}>
              <a
                href="#contact"
                className="btn btn--primary"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => setMenuOpen(false)}
              >
                無料で申し込む
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
