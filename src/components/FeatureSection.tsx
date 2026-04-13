"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./FeatureSection.module.css";

const tabs = [
  {
    id: "pain",
    label: "見逃す痛み",
    title: "あとで知っても遅い制度がある",
    description:
      "申請期限が短いもの、自治体ごとに条件が違うもの、気づいた会社だけが取るもの。知らなかっただけで数十万から数百万円の差が出ることがあります。",
    points: [
      "知った時には締切後",
      "地域条件を見落とす",
      "新設法人向け制度を逃す",
    ],
    visualAccent: "deadline",
    imageSrc: "/feature-deadline-docs.png",
    imageAlt: "締切が近い制度書類のイメージ",
  },
  {
    id: "effort",
    label: "自力で探す辛さ",
    title: "補助金探しは、想像より面倒",
    description:
      "国、自治体、商工会議所、業界団体。見る場所が分かれていて、同じような制度名も多い。忙しい事業者ほど後回しになって、そのまま流れます。",
    points: [
      "見る先が多すぎる",
      "似た制度名で混乱する",
      "本業が忙しくて続かない",
    ],
    visualAccent: "search",
    imageSrc: "/feature-search-effort.png",
    imageAlt: "複数の情報を調べる事業者のイメージ",
  },
  {
    id: "compare",
    label: "競合との差",
    title: "取る会社は、静かに取っている",
    description:
      "設備投資、採用、販促、IT導入。競合が制度を使ってコストを抑えている間に、何もしない側だけがその差を受けます。比較された時に効いてくるのは、こういう見えにくい差です。",
    points: [
      "投資判断で差がつく",
      "採用余力に差が出る",
      "価格競争で不利になる",
    ],
    visualAccent: "compare",
    imageSrc: "/feature-compare-gap.png",
    imageAlt: "制度活用による企業差のイメージ",
  },
];

export default function FeatureSection() {
  const [activeTab, setActiveTab] = useState("pain");
  const active = tabs.find((tab) => tab.id === activeTab)!;

  return (
    <section className="section" id="features">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>
            探さない会社ほど、
            <br />
            取りこぼしやすい。
          </h2>
        </div>

        <div className={styles.tabs} role="tablist" aria-label="切り替えタブ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`tab-panel-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.panel} id={`tab-panel-${activeTab}`} role="tabpanel">
          <div className={styles.panelCopy}>
            <h3 className={styles.panelTitle}>{active.title}</h3>
            <p className={styles.panelDesc}>{active.description}</p>
            <div className={styles.pointRow}>
              {active.points.map((point) => (
                <div key={point} className={styles.pointCard}>
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.panelVisual}>
            <div className={`${styles.visualSurface} ${styles[`visualSurface${active.visualAccent.charAt(0).toUpperCase()}${active.visualAccent.slice(1)}`]}`}>
              <div className={styles.visualImageWrap}>
                <Image
                  src={active.imageSrc}
                  alt={active.imageAlt}
                  fill
                  className={styles.visualImage}
                  sizes="(max-width: 900px) 100vw, 45vw"
                />
              </div>
              <div className={styles.visualGlow} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
