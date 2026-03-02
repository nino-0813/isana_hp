'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'なぜ「いい人」止まり？数秘から見る恋愛のブロック',
    excerpt:
      'いつもいい人と言われるけれど、恋愛に発展しない。その原因はあなたの誕生日に隠されているかもしれません。',
    category: 'Relationship',
    date: '2024.03.01',
    image: 'https://images.unsplash.com/photo-1516589174184-c6852661448c?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    title: '運命のパートナーと出会うための「心の整え方」',
    excerpt: '出会いがないと嘆く前に、まずは自分のエネルギーを整えることが大切です。数秘術的なアプローチをご紹介します。',
    category: 'Mindset',
    date: '2024.02.25',
    image: 'https://images.unsplash.com/photo-1499209974431-9dac3adaf471?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'ライフパスナンバー別：あなたにぴったりの出会いの場所',
    excerpt: 'パーティーが向いている人、静かな場所が向いている人。数字によって最適な出会いのシチュエーションは異なります。',
    category: 'Numerology',
    date: '2024.02.18',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 4,
    title: '執着を手放すと、最高のパートナーが現れる理由',
    excerpt: '「結婚しなきゃ」という焦りが、実は出会いを遠ざけていることも。数秘のサイクルから見る手放しのタイミング。',
    category: 'Spiritual',
    date: '2024.02.10',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop',
  },
];

export default function Blog() {
  return (
    <div className="pb-32">
      <section className="py-32 px-6 bg-ivory text-center">
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto">
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-6 block">Journal</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-10">パートナー探しのヒント</h1>
          <p className="text-ink/60 text-lg leading-relaxed">
            数秘術の知恵を日常に活かし、<br />
            理想のパートナーシップを引き寄せるためのコラム。
          </p>
        </motion.div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[10px] tracking-widest uppercase font-bold text-gold">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-xs text-ink/40 mb-4 tracking-widest uppercase">
                <div className="flex items-center space-x-2">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User size={14} />
                  <span>Editor</span>
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-gold transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-ink/60 leading-relaxed mb-8 line-clamp-2">{post.excerpt}</p>
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center space-x-3 text-gold text-sm tracking-widest uppercase font-bold group-hover:space-x-5 transition-all"
              >
                <span>Read More</span>
                <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 flex justify-center space-x-4">
          <button className="w-12 h-12 rounded-full border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-white transition-all">
            1
          </button>
          <button className="w-12 h-12 rounded-full border border-gold/20 text-ink/40 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
            2
          </button>
          <button className="w-12 h-12 rounded-full border border-gold/20 text-ink/40 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
            3
          </button>
        </div>
      </section>
    </div>
  );
}
