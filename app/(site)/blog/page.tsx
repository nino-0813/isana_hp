'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const posts = [
  {
    id: 1,
    title: 'なぜ「いい人」止まり？数秘から見る恋愛のブロック',
    excerpt:
      'いつもいい人と言われるけれど、恋愛に発展しない。その原因はあなたの誕生日に隠されているかもしれません。',
    category: '人間関係',
    date: '2024.03.01',
    image: 'https://images.unsplash.com/photo-1516589174184-c6852661448c?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    title: '運命のパートナーと出会うための「心の整え方」',
    excerpt: '出会いがないと嘆く前に、まずは自分のエネルギーを整えることが大切です。数秘術的なアプローチをご紹介します。',
    category: 'マインドセット',
    date: '2024.02.25',
    image: 'https://images.unsplash.com/photo-1499209974431-9dac3adaf471?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'ライフパスナンバー別：あなたにぴったりの出会いの場所',
    excerpt: 'パーティーが向いている人、静かな場所が向いている人。数字によって最適な出会いのシチュエーションは異なります。',
    category: '数秘術',
    date: '2024.02.18',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 4,
    title: '執着を手放すと、最高のパートナーが現れる理由',
    excerpt: '「結婚しなきゃ」という焦りが、実は出会いを遠ざけていることも。数秘のサイクルから見る手放しのタイミング。',
    category: 'スピリチュアル',
    date: '2024.02.10',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop',
  },
];

export default function Blog() {
  return (
    <div className="pb-0">
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-warm-500 tracking-[0.25em] uppercase text-[10px] sm:text-xs mb-4 block">Blog</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-warm-800 mb-6 sm:mb-8">ブログ</h1>
          <p className="text-warm-600 text-sm sm:text-base md:text-lg leading-relaxed">
            数秘術の知恵を日常に活かすためのコラム。
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-5 bg-warm-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] tracking-wide text-warm-700">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-warm-500 mb-3">
                <Calendar size={12} />
                <span>{post.date}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif text-warm-800 mb-3 group-hover:text-warm-600 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-warm-600 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center gap-2 text-sm text-warm-700 hover:text-warm-900 transition-colors group/link"
              >
                <span>続きを読む</span>
                <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
