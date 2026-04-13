"use client";

import { useActionState, useEffect, useMemo, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import styles from "./CtaSection.module.css";

const areaOptions: Record<string, string[]> = {
  北海道: ["札幌市", "旭川市", "函館市", "帯広市"],
  青森県: ["青森市", "弘前市", "八戸市", "五所川原市"],
  岩手県: ["盛岡市", "一関市", "北上市", "宮古市"],
  宮城県: ["仙台市", "石巻市", "大崎市", "名取市"],
  秋田県: ["秋田市", "横手市", "大仙市", "能代市"],
  山形県: ["山形市", "鶴岡市", "酒田市", "米沢市"],
  福島県: ["福島市", "郡山市", "いわき市", "会津若松市"],
  茨城県: ["水戸市", "つくば市", "日立市", "ひたちなか市"],
  栃木県: ["宇都宮市", "小山市", "足利市", "那須塩原市"],
  群馬県: ["前橋市", "高崎市", "太田市", "伊勢崎市"],
  埼玉県: ["さいたま市", "川口市", "川越市", "越谷市"],
  千葉県: ["千葉市", "船橋市", "柏市", "松戸市"],
  東京都: ["千代田区", "港区", "新宿区", "渋谷区"],
  神奈川県: ["横浜市", "川崎市", "相模原市", "藤沢市"],
  新潟県: ["新潟市", "長岡市", "上越市", "三条市"],
  富山県: ["富山市", "高岡市", "射水市", "砺波市"],
  石川県: ["金沢市", "白山市", "小松市", "野々市市"],
  福井県: ["福井市", "坂井市", "越前市", "敦賀市"],
  山梨県: ["甲府市", "甲斐市", "南アルプス市", "富士吉田市"],
  長野県: ["長野市", "松本市", "上田市", "飯田市"],
  岐阜県: ["岐阜市", "大垣市", "各務原市", "多治見市"],
  静岡県: ["静岡市", "浜松市", "沼津市", "富士市"],
  愛知県: ["名古屋市", "豊田市", "岡崎市", "一宮市"],
  三重県: ["津市", "四日市市", "鈴鹿市", "伊勢市"],
  滋賀県: ["大津市", "草津市", "彦根市", "守山市"],
  京都府: ["京都市", "宇治市", "福知山市", "舞鶴市"],
  大阪府: ["大阪市", "堺市", "東大阪市", "吹田市"],
  兵庫県: ["神戸市", "姫路市", "西宮市", "尼崎市"],
  奈良県: ["奈良市", "橿原市", "生駒市", "大和郡山市"],
  和歌山県: ["和歌山市", "田辺市", "橋本市", "海南市"],
  鳥取県: ["鳥取市", "米子市", "倉吉市", "境港市"],
  島根県: ["松江市", "出雲市", "浜田市", "益田市"],
  岡山県: ["岡山市", "倉敷市", "津山市", "総社市"],
  広島県: ["広島市", "福山市", "呉市", "東広島市"],
  山口県: ["山口市", "下関市", "宇部市", "周南市"],
  徳島県: ["徳島市", "阿南市", "鳴門市", "吉野川市"],
  香川県: ["高松市", "丸亀市", "坂出市", "三豊市"],
  愛媛県: ["松山市", "今治市", "新居浜市", "西条市"],
  高知県: ["高知市", "南国市", "四万十市", "香南市"],
  福岡県: ["福岡市", "北九州市", "久留米市", "飯塚市"],
  佐賀県: ["佐賀市", "唐津市", "鳥栖市", "伊万里市"],
  長崎県: ["長崎市", "佐世保市", "諫早市", "大村市"],
  熊本県: ["熊本市", "八代市", "天草市", "合志市"],
  大分県: ["大分市", "別府市", "中津市", "日田市"],
  宮崎県: ["宮崎市", "都城市", "延岡市", "日向市"],
  鹿児島県: ["鹿児島市", "霧島市", "鹿屋市", "薩摩川内市"],
  沖縄県: ["那覇市", "沖縄市", "浦添市", "うるま市"],
};

const industries = [
  "製造業",
  "建設業",
  "卸売業",
  "小売業",
  "飲食業",
  "宿泊・観光業",
  "医療・介護",
  "IT・ソフトウェア",
  "物流・運輸",
  "教育・スクール",
  "美容・サロン",
  "士業・コンサル",
  "農業・食品",
  "不動産",
  "その他",
];

const useCases = [
  "設備投資",
  "IT導入・DX",
  "採用・人材育成",
  "広告・販促",
  "店舗改装・出店",
  "研究開発",
  "省エネ・脱炭素",
  "海外展開",
  "創業・新規事業",
  "資金繰り改善",
  "わからないので提案してほしい",
];

function RequiredLabel({ children, optional = false }: { children: string; optional?: boolean }) {
  return (
    <span className={styles.labelRow}>
      <span className={styles.label}>{children}</span>
      {!optional && <span className={styles.requiredMark}>※</span>}
    </span>
  );
}

const initialState: ContactFormState = {
  status: "idle",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`btn btn--primary ${styles.submitBtn}`}
      disabled={pending}
    >
      {pending ? "送信中..." : "無料で受付する"}
    </button>
  );
}

export default function CtaSection() {
  const prefectures = useMemo(() => Object.keys(areaOptions), []);
  const [prefecture, setPrefecture] = useState("");
  const [formKey, setFormKey] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [state, formAction] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state.status === "success") {
      setPrefecture("");
      setFormKey((current) => current + 1);
      setShowSuccessModal(true);
    }
  }, [state.status]);

  return (
    <section className={`section--dark ${styles.cta}`} id="contact">
      <div className={styles.bgDeco1} aria-hidden="true" />
      <div className={styles.bgDeco2} aria-hidden="true" />

      <div className="container">
        <div className={styles.inner}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>受付フォーム</h2>
            <p className={styles.cardDesc}>
              会社サイトURLと地域条件、業種、使い道から候補制度を絞り込みます。補足事項以外は必須です。
            </p>
          </div>

          <form key={formKey} action={formAction} className={styles.formCard}>
            <div className={styles.formGrid}>
              <label className={`${styles.field} ${styles.fieldFull}`}>
                <RequiredLabel>会社URL</RequiredLabel>
                <input
                  className={styles.input}
                  name="companyUrl"
                  type="url"
                  placeholder="https://example.co.jp"
                  required
                />
                {state.fieldErrors?.companyUrl ? (
                  <span className={styles.fieldError}>{state.fieldErrors.companyUrl}</span>
                ) : null}
              </label>

              <label className={styles.field}>
                <RequiredLabel>メールアドレス</RequiredLabel>
                <input
                  className={styles.input}
                  name="email"
                  type="email"
                  placeholder="info@example.co.jp"
                  required
                />
                {state.fieldErrors?.email ? (
                  <span className={styles.fieldError}>{state.fieldErrors.email}</span>
                ) : null}
              </label>

              <label className={styles.field}>
                <RequiredLabel>都道府県</RequiredLabel>
                <select
                  className={styles.input}
                  name="prefecture"
                  value={prefecture}
                  onChange={(event) => setPrefecture(event.target.value)}
                  required
                >
                  <option value="" disabled>
                    選択してください
                  </option>
                  {prefectures.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {state.fieldErrors?.prefecture ? (
                  <span className={styles.fieldError}>{state.fieldErrors.prefecture}</span>
                ) : null}
              </label>

              <label className={styles.field}>
                <RequiredLabel>市区町村</RequiredLabel>
                <input
                  className={styles.input}
                  name="city"
                  type="text"
                  placeholder={prefecture ? `${prefecture}内の市区町村を入力` : "市区町村を入力"}
                  required
                />
                {state.fieldErrors?.city ? (
                  <span className={styles.fieldError}>{state.fieldErrors.city}</span>
                ) : null}
              </label>

              <label className={styles.field}>
                <RequiredLabel>業種</RequiredLabel>
                <select className={styles.input} name="industry" defaultValue="" required>
                  <option value="" disabled>
                    選択してください
                  </option>
                  {industries.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {state.fieldErrors?.industry ? (
                  <span className={styles.fieldError}>{state.fieldErrors.industry}</span>
                ) : null}
              </label>

              <label className={styles.field}>
                <RequiredLabel>使い道</RequiredLabel>
                <select className={styles.input} name="useCase" defaultValue="" required>
                  <option value="" disabled>
                    選択してください
                  </option>
                  {useCases.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {state.fieldErrors?.useCase ? (
                  <span className={styles.fieldError}>{state.fieldErrors.useCase}</span>
                ) : null}
              </label>

              <label className={`${styles.field} ${styles.fieldFull}`}>
                <RequiredLabel optional>補足事項</RequiredLabel>
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  name="notes"
                  placeholder="任意で補足があれば入力してください"
                />
              </label>
            </div>

            <SubmitButton />
            {state.status === "error" ? (
              <p className={styles.feedbackError} aria-live="polite">
                {state.message ?? ""}
              </p>
            ) : null}
          </form>
        </div>
      </div>

      {showSuccessModal ? (
        <div className={styles.modalOverlay} role="presentation" onClick={() => setShowSuccessModal(false)}>
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-success-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 id="contact-success-title" className={styles.modalTitle}>
              送信を受け付けました
            </h3>
            <p className={styles.modalText}>
              内容を確認のうえ、24時間以内にメールでご連絡します。
            </p>
            <button
              type="button"
              className={`btn btn--primary ${styles.modalButton}`}
              onClick={() => setShowSuccessModal(false)}
            >
              閉じる
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
