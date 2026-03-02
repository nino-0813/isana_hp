'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const plans = [
    {
      title: 'Essential Session',
      name: 'エッセンシャル鑑定',
      price: '¥15,000',
      duration: '60 min',
      desc: 'あなたの基本性格、才能、運命のサイクルを読み解くスタンダードなセッションです。',
      features: ['ライフパスナンバーの算出', '今世での使命と才能の特定', '現在の運気サイクルの解説', '鑑定書PDF（簡易版）'],
    },
    {
      title: 'Partnership Reading',
      name: '運命のパートナー鑑定',
      price: '¥28,000',
      duration: '90 min',
      desc: 'パートナーシップに特化した鑑定。理想の相手の像や、出会いの時期を詳細に分析します。',
      features: [
        'エッセンシャル鑑定の全内容',
        '魂が求めるパートナー像の特定',
        '出会いやすい時期と場所の予測',
        '恋愛におけるブロックの解除アドバイス',
        '詳細鑑定書PDF',
      ],
      featured: true,
    },
    {
      title: 'Premium Mentoring',
      name: 'プレミアム・継続メンタリング',
      price: '¥120,000',
      duration: '3 Months',
      desc: '3ヶ月間、数秘術をベースにあなたの人生とパートナーシップを劇的に変える伴走型プログラム。',
      features: [
        '月2回のオンラインセッション',
        'LINEでの随時相談サポート',
        '具体的な出会いの場へのアドバイス',
        '自己肯定感を高めるワーク',
        'フルオーダーメイド鑑定書',
      ],
    },
  ];

  return (
    <div className="pb-32">
      <section className="py-32 px-6 bg-ivory text-center">
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto">
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-6 block">Services</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-10">鑑定メニュー・商品詳細</h1>
          <p className="text-ink/60 text-lg leading-relaxed">
            あなたの現在の状況や目的に合わせて、<br />
            最適なプランをお選びいただけます。
          </p>
        </motion.div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-3xl border ${
                plan.featured ? 'border-gold bg-white shadow-2xl scale-105 z-10' : 'border-gold/10 bg-white/50'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-white px-6 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold">
                  Recommended
                </span>
              )}
              <div className="mb-10">
                <span className="text-gold tracking-[0.2em] uppercase text-[10px] font-bold mb-2 block">{plan.title}</span>
                <h3 className="text-2xl font-serif mb-4">{plan.name}</h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-serif">{plan.price}</span>
                  <span className="text-ink/40 text-sm">/ {plan.duration}</span>
                </div>
              </div>
              <p className="text-ink/60 text-sm leading-relaxed mb-10 pb-10 border-b border-gold/10">{plan.desc}</p>
              <ul className="space-y-4 mb-12">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start space-x-3 text-sm text-ink/70">
                    <Check size={16} className="text-gold mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`w-full py-4 rounded-full flex items-center justify-center space-x-3 transition-all duration-500 ${
                  plan.featured ? 'bg-gold text-white hover:bg-ink' : 'border border-ink text-ink hover:bg-ink hover:text-white'
                }`}
              >
                <span className="text-sm tracking-widest uppercase font-semibold">申し込む</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-16">よくあるご質問</h2>
          <div className="space-y-8">
            {[
              { q: '数秘術が初めてでも大丈夫ですか？', a: 'はい、もちろんです。専門用語を使わず、どなたでも理解しやすいよう丁寧にご説明いたします。' },
              { q: 'オンラインでの鑑定は可能ですか？', a: 'はい、Zoomを使用したオンライン鑑定をメインに行っております。全国どこからでも受講可能です。' },
              { q: '特定の相手との相性も分かりますか？', a: 'はい、お相手の生年月日が分かれば、より深い相性診断が可能です。' },
            ].map((faq, i) => (
              <div key={i} className="p-8 border border-gold/10 rounded-2xl">
                <h4 className="font-serif text-lg mb-4 flex items-center space-x-4">
                  <span className="text-gold">Q.</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-ink/60 leading-relaxed pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
