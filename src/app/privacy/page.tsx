import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 補助金コンシェル",
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <article className={styles.card}>
          <p className={styles.kicker}>Privacy Policy</p>
          <h1 className={styles.title}>プライバシーポリシー</h1>
          <p className={styles.updated}>最終更新日: 2026年4月13日</p>

          <section className={styles.section}>
            <h2>1. 取得する情報</h2>
            <p>
              本サービスでは、会社URL、メールアドレス、所在地、業種、使い道、補足事項その他利用者がフォームに入力した情報を取得します。
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. 利用目的</h2>
            <ul>
              <li>制度候補の調査および案内のため</li>
              <li>問い合わせ対応および本人確認のため</li>
              <li>サービス改善、品質向上および不正利用防止のため</li>
              <li>必要な連絡、通知、法令対応のため</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. 第三者提供</h2>
            <p>
              運営者は、法令に基づく場合を除き、本人の同意なく個人情報を第三者へ提供しません。
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. 安全管理</h2>
            <p>
              運営者は、個人情報の漏えい、滅失または毀損の防止その他安全管理のため、合理的かつ適切な措置を講じます。
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. 開示、訂正、削除等</h2>
            <p>
              本人から自己情報の開示、訂正、利用停止または削除の請求があった場合、法令に従い合理的な範囲で対応します。
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. お問い合わせ窓口</h2>
            <p>運営者: 朝部耀平</p>
            <p>メールアドレス: info@mirai-axis.com</p>
          </section>
        </article>
      </div>
    </main>
  );
}
