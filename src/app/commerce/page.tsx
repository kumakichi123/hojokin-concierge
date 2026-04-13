import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | 補助金コンシェル",
};

export default function CommercePage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <article className={styles.card}>
          <p className={styles.kicker}>Specified Commercial Transactions Act</p>
          <h1 className={styles.title}>特定商取引法に基づく表記</h1>
          <p className={styles.updated}>最終更新日: 2026年4月13日</p>

          <section className={styles.section}>
            <h2>販売事業者</h2>
            <p>朝部耀平</p>
          </section>

          <section className={styles.section}>
            <h2>連絡先</h2>
            <p>メールアドレス: info@mirai-axis.com</p>
            <p>
              住所および電話番号は、特定商取引法第11条に基づき、請求があった場合には遅滞なく開示します。
            </p>
          </section>

          <section className={styles.section}>
            <h2>販売価格</h2>
            <p>各サービスの案内時または別途提示する申込ページに表示します。</p>
          </section>

          <section className={styles.section}>
            <h2>商品代金以外の必要料金</h2>
            <p>インターネット接続にかかる通信料は利用者の負担となります。</p>
          </section>

          <section className={styles.section}>
            <h2>代金の支払時期・方法</h2>
            <p>提供条件に応じて、別途提示する方法および時期によります。</p>
          </section>

          <section className={styles.section}>
            <h2>サービス提供時期</h2>
            <p>受付完了後、運営者が確認のうえ順次案内または提供します。</p>
          </section>

          <section className={styles.section}>
            <h2>返品・キャンセル</h2>
            <p>
              デジタルサービスの性質上、提供開始後の返品・返金には応じられません。キャンセル条件がある場合は、別途提示する条件に従います。
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
