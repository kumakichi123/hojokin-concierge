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
          <p className={styles.updated}>最終更新日: 2026年4月18日</p>

          <section className={styles.section}>
            <h2>販売事業者</h2>
            <p>みらいアクシス運営事務局(個人事業主：朝部耀平)</p>
          </section>

          <section className={styles.section}>
            <h2>運営統括責任者</h2>
            <p>朝部耀平</p>
          </section>

          <section className={styles.section}>
            <h2>所在地</h2>
            <p>〒001-0018 北海道札幌市北区北18条西6-1-7-201</p>
          </section>

          <section className={styles.section}>
            <h2>電話番号</h2>
            <p>070-3619-7051</p>
          </section>

          <section className={styles.section}>
            <h2>連絡先</h2>
            <p>メールアドレス: info@mirai-axis.com</p>
          </section>

          <section className={styles.section}>
            <h2>販売価格</h2>
            <p>各サービスの申込ページまたは案内ページに表示します。</p>
          </section>

          <section className={styles.section}>
            <h2>商品代金以外の必要料金</h2>
            <p>インターネット接続にかかる通信費等は、お客様のご負担となります。</p>
          </section>

          <section className={styles.section}>
            <h2>支払方法</h2>
            <p>申込時に案内する方法によりお支払いいただきます。</p>
          </section>

          <section className={styles.section}>
            <h2>役務提供時期</h2>
            <p>申込受付後、内容確認のうえ、案内した時期にサービスを提供します。</p>
          </section>

          <section className={styles.section}>
            <h2>キャンセル・返金</h2>
            <p>
              デジタルサービスの性質上、提供開始後のキャンセルおよび返金には原則として応じられません。
              個別の条件がある場合は、申込ページまたは案内時に明示します。
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
