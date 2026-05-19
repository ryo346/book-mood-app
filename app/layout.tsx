import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "気分診断 本レコメンド",
  description: "今の気分から最適な本を3冊おすすめします",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-[#f8f8fb]">
        <div className="max-w-md mx-auto min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
