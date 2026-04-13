import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "利用規約 | 補助金コンシェル",
};

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <article className={styles.card}>
          <p className={styles.kicker}>Terms</p>
          <h1 className={styles.title}>利用規約</h1>
          <p className={styles.updated}>最終更新日: 2026年4月14日</p>

          <section className={styles.section}>
            <h2>第1条 適用</h2>
            <p>
              本規約は、「補助金コンシェル」（以下「本サービス」といいます。）の利用条件を定めるものです。利用者は、本サービスを利用することにより、本規約に同意したものとみなされます。
            </p>
          </section>

          <section className={styles.section}>
            <h2>第2条 サービス内容</h2>
            <p>
              本サービスは、利用者が入力した会社URL、所在地、業種、使い道その他の情報をもとに、補助金、助成金、給付金その他の支援制度候補を案内する受付サービスです。
            </p>
            <p>
              本サービスは、支援制度の採択、受給、申請成功その他の結果を保証するものではありません。
            </p>
          </section>

          <section className={styles.section}>
            <h2>第3条 利用申込み</h2>
            <p>
              利用者は、本サービス所定の方法により必要事項を入力し、本規約に同意のうえ、本サービスの利用を申し込むものとします。
            </p>
          </section>

          <section className={styles.section}>
            <h2>第4条 禁止事項</h2>
            <ul>
              <li>虚偽または不正確な情報を入力する行為</li>
              <li>法令または公序良俗に違反する行為</li>
              <li>本サービスの運営を妨害する行為</li>
              <li>第三者の権利利益を侵害する行為</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>第5条 免責</h2>
            <p>
              本サービスに掲載または案内される制度情報の完全性、正確性、最新性、有用性について、運営者は保証しません。利用者は、自らの責任において最終確認および申請判断を行うものとします。
            </p>
          </section>

          <section className={styles.section}>
            <h2>第6条 サービス変更・停止</h2>
            <p>
              運営者は、保守、障害対応、法令対応その他の必要がある場合、利用者への事前通知なく本サービスの全部または一部を変更、停止または終了できるものとします。
            </p>
          </section>

          <section className={styles.section}>
            <h2>第7条 準拠法・管轄</h2>
            <p>
              本規約の準拠法は日本法とし、本サービスに関して紛争が生じた場合は、日本法令に従って解決するものとします。
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
