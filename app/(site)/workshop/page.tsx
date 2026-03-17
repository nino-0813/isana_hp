'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Clock, Video, MapPin, Check, ArrowRight } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export default function Workshop() {
  return (
    <div className="pb-0">
      {/* ヒーロー */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-warm-500 tracking-[0.25em] uppercase text-[10px] sm:text-xs mb-4 block">Workshop</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-warm-800 mb-6 sm:mb-8">
            講座・ワークショップ
          </h1>
          <p className="text-warm-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            グループで数秘術を体感できるワークショップです。
            <br className="hidden sm:block" />
            <strong className="text-warm-800">無料</strong>でご参加いただけます。
          </p>
          <span className="inline-block bg-warm-200/80 text-warm-800 px-4 py-2 rounded-full text-sm font-medium">
            無料体験
          </span>
        </div>
      </section>

      {/* こんな方に */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-warm-800 mb-4">こんな方におすすめです</h2>
          <div className="w-12 h-px bg-warm-300 mx-auto mb-8" />
          <p className="text-warm-600 text-sm sm:text-base leading-relaxed mb-8">
            数秘術に興味はあるけれど、一人で学ぶのは不安。まずは気軽に体験してみたい方にぴったりの場です。
          </p>
        </motion.div>
        <motion.div {...fadeUp} className="max-w-2xl mx-auto">
          <ul className="space-y-4 text-warm-600 text-sm sm:text-base">
            {[
              '数秘術を初めて知る・体験してみたい',
              '自分の「数字」が気になる',
              '才能数・本質数・探究数って何？と感じている',
              '少人数で、丁寧に教えてほしい',
              'オンラインでも参加したい',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check size={18} className="text-accent-sage shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* ワークショップでできること */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-warm-800 mb-3">ワークショップでできること</h2>
          <div className="w-12 h-px bg-warm-300 mx-auto" />
        </motion.div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {[
            {
              title: '自分の数字を計算する',
              desc: '生年月日から才能数・本質数・探究数をその場で計算。電卓やアプリに頼らず、一緒にひも解いていきます。',
            },
            {
              title: '数字の意味を学ぶ',
              desc: '1〜9、そして11・22・33のマスターナンバーが持つ意味を、わかりやすくお伝えします。',
            },
            {
              title: '参加者同士のシェア',
              desc: '少人数制のため、感想や気づきを共有する時間もあります。同じ興味を持つ方との出会いの場にも。',
            },
            {
              title: '質問しやすい雰囲気',
              desc: '「ここがわからない」をその場で解消。初めての方でも安心してご参加いただけます。',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-warm-200/60"
            >
              <h3 className="text-lg sm:text-xl font-serif text-warm-800 mb-3">{item.title}</h3>
              <p className="text-warm-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 開催形式・所要時間 */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-warm-800 mb-8">開催形式</h2>
        </motion.div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <motion.div {...fadeUp} className="flex items-start gap-4 p-5 rounded-2xl bg-warm-50">
            <div className="w-12 h-12 rounded-full bg-warm-200 flex items-center justify-center shrink-0">
              <Video size={22} className="text-warm-700" />
            </div>
            <div>
              <h3 className="font-serif text-warm-800 mb-2">オンライン</h3>
              <p className="text-warm-600 text-sm leading-relaxed">
                ZoomやGoogle Meetを使用。全国どこからでもご参加いただけます。
              </p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="flex items-start gap-4 p-5 rounded-2xl bg-warm-50">
            <div className="w-12 h-12 rounded-full bg-warm-200 flex items-center justify-center shrink-0">
              <MapPin size={22} className="text-warm-700" />
            </div>
            <div>
              <h3 className="font-serif text-warm-800 mb-2">対面</h3>
              <p className="text-warm-600 text-sm leading-relaxed">
                会場は都度お知らせします。少人数で落ち着いた空間です。
              </p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="flex items-start gap-4 p-5 rounded-2xl bg-warm-50 sm:col-span-2">
            <div className="w-12 h-12 rounded-full bg-warm-200 flex items-center justify-center shrink-0">
              <Clock size={22} className="text-warm-700" />
            </div>
            <div>
              <h3 className="font-serif text-warm-800 mb-2">所要時間・人数</h3>
              <p className="text-warm-600 text-sm leading-relaxed">
                約90分〜120分を目安に実施。少人数制（目安：2〜6名程度）で、一人ひとりに寄り添う形で進めます。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 参加の流れ */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-warm-800 mb-4">参加の流れ</h2>
          <div className="w-12 h-px bg-warm-300 mx-auto" />
        </motion.div>
        <div className="max-w-2xl mx-auto space-y-6">
          {[
            { step: 1, text: 'お問い合わせフォームまたはLINEから「無料体験ワークショップ希望」とご連絡ください。' },
            { step: 2, text: '開催日時・形式（オンライン or 対面）のご希望をお聞かせください。' },
            { step: 3, text: '日程が決まり次第、詳細（URL・会場など）をお伝えします。' },
            { step: 4, text: '当日、リラックスしてご参加ください。筆記用具があると便利です。' },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.06 }}
              className="flex gap-4 items-start"
            >
              <span className="w-8 h-8 rounded-full bg-warm-800 text-white text-sm font-serif flex items-center justify-center shrink-0">
                {item.step}
              </span>
              <p className="text-warm-600 text-sm sm:text-base leading-relaxed pt-1">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-serif text-warm-800 mb-4">
            無料体験に申し込む
          </h2>
          <p className="text-warm-600 text-sm sm:text-base mb-10">
            ご質問だけでも大歓迎です。お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] py-3.5 px-10 sm:px-14 rounded-full bg-warm-800 text-white hover:bg-warm-700 active:bg-warm-900 transition-colors text-sm tracking-wider touch-manipulation"
          >
            お問い合わせはこちら
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
