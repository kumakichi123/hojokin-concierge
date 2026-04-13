import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "補助金コンシェル | 補助金・助成金・給付金の受付",
  description:
    "会社サイトURLと最小限の情報を受け付け、補助金・助成金・給付金の候補確認につなげる受付サイトです。",
  keywords: "補助金, 助成金, 給付金, 受付フォーム, 会社URL",
  openGraph: {
    title: "補助金コンシェル | 補助金・助成金・給付金の受付",
    description:
      "会社サイトURLと最小限の情報を受け付け、補助金・助成金・給付金の候補確認につなげる受付サイトです。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
