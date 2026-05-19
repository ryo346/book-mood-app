# 気分診断 本レコメンドアプリ

今の気分を5問の質問で診断し、最適な本を3冊おすすめするWebアプリです。

## 起動方法

```bash
cd book-mood-app
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開く。

## Vercelデプロイ

```bash
npm install -g vercel
vercel
```

## 技術スタック

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- データストア: data/books.json (DBなし)

## 構成

```
app/
  page.tsx          # トップ画面
  genre/page.tsx    # ジャンル選択
  questions/page.tsx # 質問（5問×4択）
  result/page.tsx   # おすすめ3冊表示
data/
  books.json        # 40冊のデータ（各ジャンル10冊）
lib/
  types.ts          # 型定義
  questions.ts      # 全質問データ
  scoring.ts        # タグスコアリングロジック
components/
  ProgressBar.tsx
  BookCard.tsx
```

## スコアリング

ユーザーの回答タグ × 本のタグ値の積を合計し、同ジャンル内でスコア順に上位3冊を返します。
