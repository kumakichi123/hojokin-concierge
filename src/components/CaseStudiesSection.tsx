import styles from "./CaseStudiesSection.module.css";
import Reveal from "./Reveal";

const faqs = [
  {
    question: "申し込んでから、どれくらいで案内が届きますか？",
    answer:
      "受付後24時間以内にメールでご案内します。担当者が内容を確認した上で、あなたの会社に合いそうな制度の候補をお届けします。内容によっては追加で確認をお願いする場合があります。",
  },
  {
    question: "まだ使える制度があるか分からない段階でも申し込めますか？",
    answer:
      "申し込めます。業種と使い道を選ぶだけで受付できるので、制度名が分からない・何から調べれば良いかわからない段階でも問題ありません。",
  },
  {
    question: "法人ではなく個人事業主でも使えますか？",
    answer:
      "使えます。法人・個人事業主の両方を受付対象にしています。対象となる制度も合わせてご案内します。",
  },
  {
    question: "なぜ無料で利用できるのですか？",
    answer:
      "AIと独自の自動化システムで調査業務を効率化しているためです。まずは制度の候補確認から始めてもらう形を取っており、受付・初回案内は無料でご利用いただけます。",
  },
  {
    question: "一度申し込んだ後も継続して通知を受けられますか？",
    answer:
      "はい。初回の案内後も、新しい制度や更新情報が出た際に順次ご連絡します。申し込み時の情報を基に、継続的に候補を確認しています。",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="section" id="case-studies">
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">よくある質問</h2>
          <p className="section-subtitle" style={{ margin: "1rem auto 0", textAlign: "center" }}>
            気になる点をまとめました。他にご不明な点があればお気軽にどうぞ。
          </p>
        </div>

        <div className={styles.grid}>
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delayMs={index * 70}>
              <div className={`card ${styles.card}`}>
                <div className={styles.cardTag}>FAQ</div>
                <h4 className={styles.question}>{faq.question}</h4>
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="#contact" className="btn btn--primary">
            まずは無料で申し込む
          </a>
        </div>
      </div>
    </section>
  );
}
