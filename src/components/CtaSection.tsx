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

const STEPS = [
  { label: "会社情報", num: 1 },
  { label: "業種・使い道", num: 2 },
  { label: "確認・送信", num: 3 },
];

function RequiredLabel({ children, optional = false }: { children: string; optional?: boolean }) {
  return (
    <span className={styles.labelRow}>
      <span className={styles.label}>{children}</span>
      {!optional && <span className={styles.requiredMark}>必須</span>}
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
      className={styles.submitBtn}
      disabled={pending}
    >
      {pending ? (
        <span className={styles.submitBtnInner}>
          <span className={styles.spinner} aria-hidden="true" />
          送信中...
        </span>
      ) : (
        <span className={styles.submitBtnInner}>
          候補の確認を無料で申し込む
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10H16M11 5L16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      )}
    </button>
  );
}

export default function CtaSection() {
  const prefectures = useMemo(() => Object.keys(areaOptions), []);
  const [prefecture, setPrefecture] = useState("");
  const [formKey, setFormKey] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [state, formAction] = useActionState(submitContactForm, initialState);

  // Step 1 values
  const [companyUrl, setCompanyUrl] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  // Step 2 values
  const [industry, setIndustry] = useState("");
  const [useCase, setUseCase] = useState("");

  useEffect(() => {
    if (state.status === "success") {
      setPrefecture("");
      setCompanyUrl("");
      setEmail("");
      setCity("");
      setIndustry("");
      setUseCase("");
      setCurrentStep(1);
      setFormKey((current) => current + 1);
      setShowSuccessModal(true);
    }
  }, [state.status]);

  const canProceedStep1 = companyUrl.trim() !== "" && email.trim() !== "" && prefecture !== "" && city.trim() !== "";
  const canProceedStep2 = industry !== "" && useCase !== "";

  return (
    <section className={styles.cta} id="contact">
      <div className={styles.bgDeco1} aria-hidden="true" />
      <div className={styles.bgDeco2} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />

      <div className="container">
        <div className={styles.inner}>
          <div className={styles.heading}>
            <span className={styles.headingEyebrow}>無料・24時間以内に回答</span>
            <h2 className={styles.headingTitle}>
              まず、会社情報を教えてください。
              <br />
              <span className={styles.headingAccent}>24時間以内に候補をお届けします。</span>
            </h2>
            <p className={styles.headingDesc}>
              会社サイトURLと地域・業種・使い道を入力するだけ。担当者が確認した上で、あなたの会社に合った補助金・助成金の候補をメールでご案内します。
            </p>
          </div>

          {/* Stepper */}
          <div className={styles.stepper} aria-label="申し込みステップ">
            {STEPS.map((step, idx) => (
              <div key={step.num} className={styles.stepperItem}>
                <div
                  className={`${styles.stepperDot} ${currentStep === step.num ? styles.stepperDotActive : ""} ${currentStep > step.num ? styles.stepperDotDone : ""}`}
                >
                  {currentStep > step.num ? (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    step.num
                  )}
                </div>
                <span className={`${styles.stepperLabel} ${currentStep === step.num ? styles.stepperLabelActive : ""}`}>
                  {step.label}
                </span>
                {idx < STEPS.length - 1 && (
                  <div className={`${styles.stepperLine} ${currentStep > step.num ? styles.stepperLineDone : ""}`} aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          <form key={formKey} action={formAction} className={styles.formCard}>

            {/* Step 1: 会社基本情報 */}
            {currentStep === 1 && (
              <div className={styles.stepPanel}>
                <p className={styles.stepHint}>会社のURLとご連絡先、所在地を教えてください。</p>
                <div className={styles.formGrid}>
                  <label className={`${styles.field} ${styles.fieldFull}`}>
                    <RequiredLabel>会社URL</RequiredLabel>
                    <input
                      className={styles.input}
                      name="companyUrl"
                      type="url"
                      placeholder="https://example.co.jp"
                      value={companyUrl}
                      onChange={(e) => setCompanyUrl(e.target.value)}
                      required
                    />
                    {state.fieldErrors?.companyUrl ? (
                      <span className={styles.fieldError}>{state.fieldErrors.companyUrl}</span>
                    ) : null}
                  </label>

                  <label className={`${styles.field} ${styles.fieldFull}`}>
                    <RequiredLabel>メールアドレス</RequiredLabel>
                    <input
                      className={styles.input}
                      name="email"
                      type="email"
                      placeholder="info@example.co.jp"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    {state.fieldErrors?.email ? (
                      <span className={styles.fieldError}>{state.fieldErrors.email}</span>
                    ) : null}
                  </label>

                  <label className={styles.field}>
                    <RequiredLabel>都道府県</RequiredLabel>
                    <div className={styles.selectWrapper}>
                      <select
                        className={styles.input}
                        name="prefecture"
                        value={prefecture}
                        onChange={(event) => setPrefecture(event.target.value)}
                        required
                      >
                        <option value="" disabled>選択してください</option>
                        {prefectures.map((item) => (
                          <option key={item} value={item}>{item}</option>
                        ))}
                      </select>
                      <span className={styles.selectIcon} aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
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
                      placeholder={prefecture ? `${prefecture}内の市区町村` : "市区町村を入力"}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                    {state.fieldErrors?.city ? (
                      <span className={styles.fieldError}>{state.fieldErrors.city}</span>
                    ) : null}
                  </label>
                </div>

                <button
                  type="button"
                  className={styles.nextBtn}
                  onClick={() => setCurrentStep(2)}
                  disabled={!canProceedStep1}
                >
                  次へ：業種・使い道を入力
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M4 9H14M10 5L14 9L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}

            {/* Step 2: 業種・使い道 */}
            {currentStep === 2 && (
              <div className={styles.stepPanel}>
                <p className={styles.stepHint}>どんな業種で、何に使いたいかを教えてください。</p>
                <div className={styles.formGrid}>
                  <label className={styles.field}>
                    <RequiredLabel>業種</RequiredLabel>
                    <div className={styles.selectWrapper}>
                      <select
                        className={styles.input}
                        name="industry"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        required
                      >
                        <option value="" disabled>選択してください</option>
                        {industries.map((item) => (
                          <option key={item} value={item}>{item}</option>
                        ))}
                      </select>
                      <span className={styles.selectIcon} aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                    {state.fieldErrors?.industry ? (
                      <span className={styles.fieldError}>{state.fieldErrors.industry}</span>
                    ) : null}
                  </label>

                  <label className={styles.field}>
                    <RequiredLabel>使い道</RequiredLabel>
                    <div className={styles.selectWrapper}>
                      <select
                        className={styles.input}
                        name="useCase"
                        value={useCase}
                        onChange={(e) => setUseCase(e.target.value)}
                        required
                      >
                        <option value="" disabled>選択してください</option>
                        {useCases.map((item) => (
                          <option key={item} value={item}>{item}</option>
                        ))}
                      </select>
                      <span className={styles.selectIcon} aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                    {state.fieldErrors?.useCase ? (
                      <span className={styles.fieldError}>{state.fieldErrors.useCase}</span>
                    ) : null}
                  </label>
                </div>

                <div className={styles.stepNav}>
                  <button type="button" className={styles.backBtn} onClick={() => setCurrentStep(1)}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M14 9H4M8 5L4 9L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    戻る
                  </button>
                  <button
                    type="button"
                    className={styles.nextBtn}
                    onClick={() => setCurrentStep(3)}
                    disabled={!canProceedStep2}
                  >
                    次へ：確認・送信
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M4 9H14M10 5L14 9L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: 補足・確認・送信 */}
            {currentStep === 3 && (
              <div className={styles.stepPanel}>
                <p className={styles.stepHint}>補足があれば記入して送信してください（任意）。</p>

                {/* Hidden fields to carry over step 1 & 2 values */}
                <input type="hidden" name="companyUrl" value={companyUrl} />
                <input type="hidden" name="email" value={email} />
                <input type="hidden" name="prefecture" value={prefecture} />
                <input type="hidden" name="city" value={city} />
                <input type="hidden" name="industry" value={industry} />
                <input type="hidden" name="useCase" value={useCase} />

                {/* Summary card */}
                <div className={styles.summaryCard}>
                  <dl className={styles.summaryList}>
                    <div className={styles.summaryRow}>
                      <dt>会社URL</dt>
                      <dd>{companyUrl}</dd>
                    </div>
                    <div className={styles.summaryRow}>
                      <dt>メール</dt>
                      <dd>{email}</dd>
                    </div>
                    <div className={styles.summaryRow}>
                      <dt>所在地</dt>
                      <dd>{prefecture} {city}</dd>
                    </div>
                    <div className={styles.summaryRow}>
                      <dt>業種</dt>
                      <dd>{industry}</dd>
                    </div>
                    <div className={styles.summaryRow}>
                      <dt>使い道</dt>
                      <dd>{useCase}</dd>
                    </div>
                  </dl>
                </div>

                <div className={styles.formGrid}>
                  <label className={`${styles.field} ${styles.fieldFull}`}>
                    <RequiredLabel optional>補足事項（任意）</RequiredLabel>
                    <textarea
                      className={`${styles.input} ${styles.textarea}`}
                      name="notes"
                      placeholder="気になる制度名、特記事項など、何でも記入できます"
                    />
                  </label>
                </div>

                <div className={styles.stepNav}>
                  <button type="button" className={styles.backBtn} onClick={() => setCurrentStep(2)}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M14 9H4M8 5L4 9L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    戻る
                  </button>
                  <SubmitButton />
                </div>

                {state.status === "error" ? (
                  <p className={styles.feedbackError} aria-live="polite">
                    {state.message ?? ""}
                  </p>
                ) : null}

                <p className={styles.privacyNote}>
                  送信することで
                  <a href="/privacy" className={styles.privacyLink}>プライバシーポリシー</a>
                  に同意したものとみなします。
                </p>
              </div>
            )}
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
            <div className={styles.modalIcon} aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="#16a34a" opacity="0.12"/>
                <path d="M9 16.5L13.5 21L23 11" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 id="contact-success-title" className={styles.modalTitle}>
              受け付けました
            </h3>
            <p className={styles.modalText}>
              担当者が内容を確認した上で、<strong>24時間以内</strong>にメールでご連絡します。
            </p>
            <button
              type="button"
              className={styles.modalButton}
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
