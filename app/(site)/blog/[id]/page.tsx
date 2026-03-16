import Link from 'next/link';

type Props = { params: Promise<{ id: string }> };

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="py-32 px-6 max-w-3xl mx-auto">
      <p className="text-ink/60 mb-8">記事 ID: {id}</p>
      <p className="text-ink/70 mb-12">この記事の詳細ページは準備中です。</p>
      <Link href="/blog" className="text-gold tracking-widest uppercase text-sm font-semibold hover:underline">
        ← ブログ一覧に戻る
      </Link>
    </div>
  );
}
