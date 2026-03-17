'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { getAllPosts } from '@/lib/blog-posts';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

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
          {getAllPosts().map((post, i) => (
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
