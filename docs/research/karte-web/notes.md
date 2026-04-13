# KARTE Web クローン調査メモ

参考URL: https://karte.io/package/web/
調査日: 2026-04-12
出力先: `funding-agent/karte-web-next/`

---

## 取り込んだ構造

### デザイントークン
| Token | 参考値 |
|---|---|
| Primary Accent | `#2aab9f` (ティール) |
| Accent Dark | `#1e8880` |
| Accent Light | `#e6f7f6` |
| Dark BG | `#001b1b` |
| Text Dark | `#1a1a1a` |
| Text Body | `#444` |
| BG Light | `#f4f7f7` |
| Font | Noto Sans JP (400/500/600/700/900) |

### セクション順（上から）
1. Header (固定スティッキー、ドロップダウン + ハンバーガー)
2. Hero (グラデBG、タイトル + CTA + ダッシュボード画像 + 信頼stats)
3. Problem/Solution (課題3点 → 解決策3カラムカード)
4. Feature Tabs (施策実施 / 効果検証 / PDCA高速化)
5. Feature Grid (10機能カード、タグ色分け)
6. Case Studies (業界タグ + インタビューカード + 施策事例)
7. Support (導入ステップ → サポート3カラム)
8. CTA Section (ダークBG、お問い合わせ / 資料DL)
9. Footer (ブランド + 4ナビカラム + ソーシャル + 法的)

### 主要インタラクション
- スクロール時ヘッダーシャドウ
- ホバー時カードの浮き上がり (`translateY(-4px)`)
- フィーチャーセクションのタブ切り替え (Client Component)
- ハンバーガーメニュー開閉アニメーション
- CTA ボタンのホバーアニメーション
- ヒーローの浮遊バッジ (CSS `animation: float`)

---

## クライアント利用前に差し替えが必要な項目

| 項目 | 現在のプレースホルダー | 差し替え内容 |
|---|---|---|
| 製品名 | `[YOUR PRODUCT]` / `[YOUR PRODUCT NAME]` | クライアント製品名 |
| 企業名 | `[YOUR COMPANY NAME]` | クライアント会社名 |
| 導入事例企業名 | `[クライアント企業名 A/B/C]` | 実際の導入企業名 |
| 事例コメント | ダミー引用文 | 実際の証言 |
| 導入社数 | `1,000社以上` | 実績数 |
| テンプレート数 | `300種類以上` | 実際の数 |
| ロゴ SVG | シンプルな丸アイコン | 本物のロゴ |
| ナビリンク先 | `#` / `#section-id` | 実際のページURL |
| SNSリンク | `#` | 実際のSNS URL |
| 法的ページリンク | `#` | 実際の利用規約等URL |
| ダッシュボード画像 | AI生成モック画像 | 実スクリーンショット |

---

## 業種横断で再利用できるセクション

| セクション | 再利用性 | 備考 |
|---|---|---|
| Hero | ✅ 高 | タイトルとBG色変更で流用可 |
| Problem/Solution | ✅ 高 | 課題・解決策テキスト差し替えのみ |
| Feature Tabs | ✅ 高 | タブラベルと内容をデータ駆動で変更可 |
| Feature Grid | ✅ 高 | `features` 配列を差し替え |
| Case Studies | ✅ 中 | 業界タグとカードデータを差し替え |
| Support / Onboarding | ✅ 高 | ステップ数と内容差し替えのみ |
| CTA Section | ✅ 高 | そのまま流用可、コピー変更のみ |
| Header / Footer | ✅ 中 | ナビ構造は調整が必要 |
