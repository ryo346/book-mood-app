import type { Genre, Question } from "./types";

const novelQuestions: Question[] = [
  {
    text: "今の気分は？",
    choices: [
      { label: "泣きたい気分", tags: { emotional: 3 } },
      { label: "癒されたい", tags: { healing: 3 } },
      { label: "ワクワクしたい", tags: { exciting: 3 } },
      { label: "不思議な世界に浸りたい", tags: { fantasy: 3 } },
    ],
  },
  {
    text: "読みやすさはどのくらい？",
    choices: [
      { label: "サクッと軽い", tags: { light: 3 } },
      { label: "普通", tags: { medium: 2 } },
      { label: "読み応えあり", tags: { heavy: 3 } },
      { label: "超重厚でもOK", tags: { very_heavy: 4 } },
    ],
  },
  {
    text: "どんな世界観を楽しみたい？",
    choices: [
      { label: "現実的な話", tags: { realistic: 3 } },
      { label: "少し非現実", tags: { semi_fantasy: 3 } },
      { label: "完全ファンタジー", tags: { fantasy: 4 } },
      { label: "ミステリー・謎解き", tags: { mystery: 4 } },
    ],
  },
  {
    text: "読み終わったあと、どんな気持ちになりたい？",
    choices: [
      { label: "幸せな気持ち", tags: { happy: 3 } },
      { label: "切ない余韻", tags: { sad: 3 } },
      { label: "希望が持てる", tags: { hopeful: 3 } },
      { label: "衝撃を受けたい", tags: { shocking: 3 } },
    ],
  },
  {
    text: "本の長さは？",
    choices: [
      { label: "短編・さらっと読める", tags: { short: 3 } },
      { label: "普通の長さ", tags: { normal: 2 } },
      { label: "長編", tags: { long: 3 } },
      { label: "超長編でも読む", tags: { very_long: 4 } },
    ],
  },
];

const businessQuestions: Question[] = [
  {
    text: "今あなたが抱えている課題は？",
    choices: [
      { label: "モチベが上がらない", tags: { motivation: 3 } },
      { label: "思考力を鍛えたい", tags: { thinking: 3 } },
      { label: "キャリアを変えたい", tags: { career: 3 } },
      { label: "お金の知識をつけたい", tags: { money: 3 } },
    ],
  },
  {
    text: "読書の重さはどのくらい？",
    choices: [
      { label: "軽め・読みやすい", tags: { light: 3 } },
      { label: "普通", tags: { medium: 2 } },
      { label: "読み応えある", tags: { heavy: 3 } },
      { label: "超本格的でもOK", tags: { very_heavy: 4 } },
    ],
  },
  {
    text: "学びたい分野は？",
    choices: [
      { label: "起業・スタートアップ", tags: { startup: 3 } },
      { label: "マーケティング", tags: { marketing: 3 } },
      { label: "戦略・経営", tags: { strategy: 3 } },
      { label: "生産性・仕事術", tags: { productivity: 3 } },
    ],
  },
  {
    text: "読後にどんな感覚を得たい？",
    choices: [
      { label: "すぐ行動したくなる", tags: { action: 3 } },
      { label: "視野が広がる", tags: { perspective: 3 } },
      { label: "衝撃・常識を覆す", tags: { shocking: 3 } },
      { label: "安心・軸が定まる", tags: { stable: 3 } },
    ],
  },
  {
    text: "ビジネス書の難易度は？",
    choices: [
      { label: "初心者向け", tags: { beginner: 3 } },
      { label: "中級", tags: { intermediate: 3 } },
      { label: "上級", tags: { advanced: 3 } },
      { label: "超上級・学術的でも", tags: { expert: 4 } },
    ],
  },
];

const selfHelpQuestions: Question[] = [
  {
    text: "今一番変えたいことは？",
    choices: [
      { label: "自信をつけたい", tags: { confidence: 3 } },
      { label: "習慣を変えたい", tags: { habit: 3 } },
      { label: "メンタルを強くしたい", tags: { mental: 3 } },
      { label: "人間関係を改善したい", tags: { relationship: 3 } },
    ],
  },
  {
    text: "読書の重さは？",
    choices: [
      { label: "軽くサクッと", tags: { light: 3 } },
      { label: "普通", tags: { medium: 2 } },
      { label: "読み応えあり", tags: { heavy: 3 } },
      { label: "超本格的でも", tags: { very_heavy: 4 } },
    ],
  },
  {
    text: "変えたいこととして近いのは？",
    choices: [
      { label: "行動・習慣", tags: { action: 3 } },
      { label: "考え方・マインドセット", tags: { mindset: 3 } },
      { label: "感情コントロール", tags: { emotion: 3 } },
      { label: "コミュニケーション", tags: { communication: 3 } },
    ],
  },
  {
    text: "読み終わったあとどう感じたい？",
    choices: [
      { label: "やる気に満ちる", tags: { motivated: 3 } },
      { label: "穏やかになる", tags: { calm: 3 } },
      { label: "自信がつく", tags: { confident: 3 } },
      { label: "大切な気づきがある", tags: { insight: 3 } },
    ],
  },
  {
    text: "好みのスタイルは？",
    choices: [
      { label: "実践的なノウハウ", tags: { practical: 3 } },
      { label: "科学的・研究ベース", tags: { scientific: 3 } },
      { label: "体験談・ストーリー", tags: { story: 3 } },
      { label: "哲学的・深く考える", tags: { philosophical: 4 } },
    ],
  },
];

const cultureQuestions: Question[] = [
  {
    text: "興味がある分野は？",
    choices: [
      { label: "歴史・文明", tags: { history: 3 } },
      { label: "科学・テクノロジー", tags: { science: 3 } },
      { label: "哲学・倫理", tags: { philosophy: 3 } },
      { label: "文化・社会", tags: { culture: 3 } },
    ],
  },
  {
    text: "どのくらい深く学びたい？",
    choices: [
      { label: "入門・概要をざっと", tags: { introductory: 3 } },
      { label: "標準的な深さ", tags: { standard: 2 } },
      { label: "しっかり深掘り", tags: { deep: 3 } },
      { label: "学術的でもOK", tags: { academic: 4 } },
    ],
  },
  {
    text: "探求したいテーマは？",
    choices: [
      { label: "人間の本質・存在", tags: { human: 3 } },
      { label: "宇宙・自然の神秘", tags: { nature: 3 } },
      { label: "社会の仕組み・構造", tags: { society: 3 } },
      { label: "未来・テクノロジー", tags: { future: 3 } },
    ],
  },
  {
    text: "読んだ後にどう感じたい？",
    choices: [
      { label: "世界が広がる感覚", tags: { expansive: 3 } },
      { label: "知的好奇心が満たされる", tags: { curious: 3 } },
      { label: "人生観が変わる", tags: { transformative: 3 } },
      { label: "純粋に面白い", tags: { enjoyable: 3 } },
    ],
  },
  {
    text: "好みの文体・形式は？",
    choices: [
      { label: "対話・エッセイ調", tags: { essay: 3 } },
      { label: "講義・解説スタイル", tags: { lecture: 3 } },
      { label: "ドキュメンタリー調", tags: { documentary: 3 } },
      { label: "図解・ビジュアル多め", tags: { visual: 4 } },
    ],
  },
];

export const QUESTIONS: Record<Genre, Question[]> = {
  novel: novelQuestions,
  business: businessQuestions,
  self_help: selfHelpQuestions,
  culture: cultureQuestions,
};
