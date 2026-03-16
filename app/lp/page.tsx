import Link from 'next/link';

export const metadata = {
  title: '【限定】運命のパートナー鑑定 | LUMINOUS',
  description: '広告からのご案内ページです。',
};

/**
 * 広告用ランディングページ（/lp）
 * メインサイトのナビには表示されません。広告のリンク先としてのみ使用してください。
 */
export default function LpPage() {
  return (
    <div className="min-h-screen bg-ivory flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-xl w-full text-center">
        <p className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-6">Campaign</p>
        <h1 className="text-4xl md:text-5xl font-serif mb-8">
          運命のパートナー鑑定
          <br />
          <span className="text-gold">特別ご案内</span>
        </h1>
        <p className="text-ink/70 leading-relaxed mb-12">
          数秘術であなたの「本当に響き合う相手」を読み解きます。
          まずはお気軽にご相談ください。
        </p>
        <Link
          href="/contact"
          className="inline-block bg-ink text-white px-12 py-5 rounded-full hover:bg-gold transition-all duration-500 tracking-[0.2em] uppercase text-sm font-semibold"
        >
          無料相談はこちら
        </Link>
        <p className="mt-12 text-sm text-ink/40">
          <Link href="/" className="hover:text-gold transition-colors">トップページへ戻る</Link>
        </p>
      </div>
    </div>
  );
}
