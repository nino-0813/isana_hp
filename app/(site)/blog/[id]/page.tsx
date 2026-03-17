import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostById, getAllPosts } from '@/lib/blog-posts';
import type { Metadata } from 'next';

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = getPostById(Number(id));
  if (!post) return { title: '記事が見つかりません | isana 数秘術' };
  const description = post.metaDescription ?? post.excerpt;
  const title = `${post.title} | isana 数秘術ブログ`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.date,
      images: post.image ? [{ url: post.image, alt: post.title }] : undefined,
    },
  };
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ id: String(post.id) }));
}

function renderPostContent(content: string) {
  if (!content || !content.trim()) return null;
  const sections = content.trim().split(/\n## /).filter(Boolean);
  const intro = sections[0];
  const rest = sections.slice(1);

  return (
    <>
      {intro && (
        <div className="space-y-5 mb-10">
          {intro.split(/\n\n/).map((p, i) => (
            <p key={i} className="text-warm-600 text-sm sm:text-base leading-relaxed">
              {p.trim().replace(/\*\*/g, '')}
            </p>
          ))}
        </div>
      )}
      {rest.map((block, i) => {
        const [headLine, ...bodyLines] = block.split('\n');
        const heading = headLine?.trim() ?? '';
        const body = bodyLines.join('\n').trim();
        const paragraphs = body.split(/\n\n/).filter(Boolean);
        return (
          <section key={i} className="mb-10">
            <h2 className="text-xl sm:text-2xl font-serif text-warm-800 mb-5 mt-10 first:mt-0">{heading.replace(/\*\*/g, '')}</h2>
            <div className="space-y-5">
              {paragraphs.map((para, j) => {
                const trimmed = para.trim();
                if (trimmed.startsWith('- ')) {
                  const items = trimmed.split(/\n- /).filter(Boolean);
                  return (
                    <ul key={j} className="list-disc pl-5 space-y-2 text-warm-600 text-sm sm:text-base leading-relaxed">
                      {items.map((item, k) => (
                        <li key={k}>{item.replace(/^- /, '').replace(/\*\*/g, '').trim()}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={j} className="text-warm-600 text-sm sm:text-base leading-relaxed">
                    {trimmed.replace(/\*\*/g, '')}
                  </p>
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = getPostById(Number(id));
  if (!post) notFound();

  return (
    <div className="pb-0">
      <article className="py-16 sm:py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <span className="bg-warm-100 text-warm-700 px-3 py-1 rounded-full text-xs tracking-wide">
              {post.category}
            </span>
          </div>
          <time dateTime={post.date} className="text-warm-500 text-sm block mb-4">
            {post.date}
          </time>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-warm-800 mb-8 leading-tight">
            {post.title}
          </h1>
          {post.image && (
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-warm-100 mb-10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
                priority
              />
            </div>
          )}
          {post.content ? (
            <div className="prose-custom">{renderPostContent(post.content)}</div>
          ) : (
            <p className="text-warm-600 text-sm sm:text-base leading-relaxed mb-10">
              この記事の詳細は準備中です。
            </p>
          )}
          <footer className="pt-10 border-t border-warm-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-warm-700 hover:text-warm-900 transition-colors"
            >
              ← ブログ一覧に戻る
            </Link>
          </footer>
        </div>
      </article>
    </div>
  );
}
