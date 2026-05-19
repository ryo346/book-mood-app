import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <div className="mb-8">
        <div className="text-6xl mb-4">📚</div>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          気分で本を診断
        </h1>
        <p className="text-gray-500 mt-3 text-base leading-relaxed">
          今の気分に合った本を<br />AIがあなたに3冊おすすめします
        </p>
      </div>

      <div className="w-full space-y-3 text-sm text-gray-400 mb-10">
        <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
          <span className="text-xl">🎭</span>
          <span>ジャンルを選ぶ</span>
        </div>
        <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
          <span className="text-xl">❓</span>
          <span>5つの質問に答える</span>
        </div>
        <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
          <span className="text-xl">✨</span>
          <span>あなたにぴったりの3冊が見つかる</span>
        </div>
      </div>

      <Link
        href="/genre"
        className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all text-white font-bold text-lg py-4 rounded-2xl shadow-lg"
      >
        診断スタート
      </Link>
    </main>
  );
}
