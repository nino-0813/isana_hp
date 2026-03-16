'use client';

import React from 'react';
import { Check, ArrowRight, BookOpen, FileText, Users } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const products = [
  {
    icon: BookOpen,
    title: '書籍',
    price: '¥1,760〜',
    desc: '数字の意味や、誕生日から導き出されるあなただけのナンバーについて分かりやすくまとめた一冊。まずは手軽に数秘術の世界に触れたい方におすすめです。',
    features: [
      '数字1〜9、マスターナンバーの意味を解説',
      '才能数・本質数・探究数の読み解き方',
      '9年周期のバイオリズムの活かし方',
      '書き込み式の実践シート付き',
    ],
    image: '/images/h_01.svg',
    linkLabel: '書籍を購入する',
    linkHref: '#',
  },
  {
    icon: FileText,
    title: '個人鑑定書',
    price: '¥5,500〜',
    desc: 'あなただけのマイナンバーから導き出される才能・本質・探究テーマを詳しく読み解いた、世界にひとつのパーソナルレポートです。',
    features: [
      '才能数・本質数・探究数の詳細解説',
      '人生の9年サイクルチャート付き',
      '強みと課題の分析レポート',
      '大切な方へのギフトにも',
    ],
    image: '/images/core-presentation.svg',
    linkLabel: '鑑定書を購入する',
    linkHref: '#',
    featured: true,
  },
  {
    icon: Users,
    title: '講座・ワークショップ',
    price: '¥3,300〜',
    desc: 'グループで数秘術を体感できるワークショップ。実際に自分の数字を計算しながら、数秘の世界を楽しく学べます。',
    features: [
      '少人数制で一人ひとり丁寧にサポート',
      'オンライン / 対面から選択可',
      '自分の数字をその場で算出・解説',
      '参加者同士の交流タイムあり',
    ],
    image: '/images/h_03.svg',
    linkLabel: '講座に申し込む',
    linkHref: '/contact',
  },
];

export default function Services() {
  return (
    <div className="pb-0">
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-warm-500 tracking-[0.25em] uppercase text-[10px] sm:text-xs mb-4 block">Products & Services</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-warm-800 mb-6 sm:mb-8">商品・サービス</h1>
          <p className="text-warm-600 text-sm sm:text-base md:text-lg leading-relaxed">
            あなたに合った方法で、数秘術の世界に触れてみてください。
          </p>
        </div>
      </section>

      {/* 商品一覧 */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
          {products.map((product, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-stretch`}
            >
              <div className="w-full md:w-5/12">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-warm-100 h-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full md:w-7/12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <product.icon size={20} className="text-warm-500" />
                  <h3 className="text-xl sm:text-2xl font-serif text-warm-800">{product.title}</h3>
                </div>
                <span className="text-lg sm:text-xl font-serif text-warm-700 mb-4">{product.price}</span>
                <p className="text-warm-600 text-sm sm:text-base leading-relaxed mb-6">{product.desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {product.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-warm-600">
                      <Check size={14} className="text-accent-sage mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={product.linkHref}
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-warm-800 text-white text-sm hover:bg-warm-700 transition-colors w-fit touch-manipulation"
                >
                  {product.linkLabel}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-serif text-warm-800">よくあるご質問</h2>
          </motion.div>
          <div className="space-y-4 sm:space-y-6">
            {[
              { q: '書籍はどこで購入できますか？', a: 'Amazonなどのオンライン書店、または全国の書店でお求めいただけます。' },
              { q: '個人鑑定書はどのくらいで届きますか？', a: 'お申し込みから通常1〜2週間でお届けいたします。PDFデータでのお届けも可能です。' },
              { q: 'ワークショップはオンラインでも参加できますか？', a: 'はい、ZoomやGoogle Meetを使用したオンライン開催も行っております。全国どこからでもご参加いただけます。' },
              { q: '数秘術が初めてでも大丈夫ですか？', a: 'はい、もちろんです。初めての方でも楽しんでいただけるよう、基礎から丁寧にご説明いたします。' },
            ].map((faq, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-warm-200/60"
              >
                <h4 className="font-serif text-base sm:text-lg text-warm-800 mb-3 flex items-start gap-3">
                  <span className="text-accent-rose shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-warm-600 text-sm sm:text-base leading-relaxed pl-7">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
