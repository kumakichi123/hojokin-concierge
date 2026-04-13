import styles from "./CaseStudiesSection.module.css";

const faqs = [
  {
    question: "どれくらいで案内が届きますか？",
    answer:
      "受付後24時間以内にメールでご案内します。内容によっては追加確認をお願いする場合があります。",
  },
  {
    question: "まだ使える制度があるか分からない段階でも申し込めますか？",
    answer:
      "申し込めます。業種と使い道を選ぶだけで受付できるので、制度名が分からない段階でも問題ありません。",
  },
  {
    question: "法人ではなく個人事業主でも使えますか？",
    answer: "使えます。法人と個人事業主の両方を受付対象にしています。",
  },
  {
    question: "申し込み時に長い説明を書く必要はありますか？",
    answer: "不要です。基本は選択式で、自由記述は補足事項のみです。",
  },
  {
    question: "受付後にすぐ自動診断結果が表示されますか？",
    answer:
      "MVPでは自動診断は行いません。まずは受付内容を保存し、管理者確認後にメールで案内します。",
  },
  {
    question: "会社サイトがまだ簡易的でも申し込めますか？",
    answer: "申し込みは可能です。内容によっては追加確認をお願いする場合があります。",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="section" id="case-studies">
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">よくある質問</h2>
          <p className="section-subtitle" style={{ margin: "1rem auto 0", textAlign: "center" }}>
            事前に気になりやすい点だけまとめています。
          </p>
        </div>

        <div className={styles.grid}>
          {faqs.map((faq) => (
            <div key={faq.question} className={`card ${styles.card}`}>
              <div className={styles.cardTag}>FAQ</div>
              <h4 className={styles.question}>{faq.question}</h4>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="#contact" className="btn btn--primary">
            そのまま受付へ進む
          </a>
        </div>
      </div>
    </section>
  );
}
