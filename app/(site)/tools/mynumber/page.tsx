'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export default function ToolMynumber() {
  return (
    <div className="pb-0">
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-warm-500 tracking-[0.25em] uppercase text-[10px] sm:text-xs mb-4 block">Tool</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-warm-800 mb-6 sm:mb-8">
            誕生日で自己理解
          </h1>
          <p className="text-warm-600 text-sm sm:text-base md:text-lg leading-relaxed">
            生年月日から導かれる「3つのナンバー」であなたの設計図をひも解きます。
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif text-warm-800 mb-4">マイナンバーって何？</h2>
          <p className="text-warm-600 text-sm sm:text-base leading-relaxed">
            数秘術では、生年月日を「数字」に変換し、才能数・本質数・探究数の3つを導き出します。
            これらを総称して「マイナンバー」と呼び、あなたの持ち味や人生のテーマを読み解くための土台になります。
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto space-y-10 md:space-y-14">
          {[
            {
              title: '才能数',
              sub: '生まれた「日」から',
              desc: '生まれた日（1日〜31日）の数字を一桁になるまで足し、11・22・33の場合はそのままにした数字です。あなたが自然に発揮しやすい「才能」や「表現のクセ」を表します。仕事や人間関係での強み、無意識にやっている行動パターンと結びつきやすいです。',
            },
            {
              title: '本質数',
              sub: '生年月日すべてから',
              desc: '生まれた年・月・日をすべて足し、一桁（または11・22・33）にした数字です。あなたの「本質」や「人生の目的」に近いテーマを示します。才能数が「どう表に出すか」なら、本質数は「何を大切にしているか」「どこに向かいたいか」の核になります。',
            },
            {
              title: '探究数',
              sub: '「月」と「日」から',
              desc: '生まれた月と日を足して一桁（または11・22・33）にした数字です。あなたが「探究したいテーマ」「学びや成長の方向性」を表します。才能数・本質数と合わせて見ることで、「どんなことを深めると自分らしさが活きるか」のヒントになります。',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="p-6 sm:p-8 rounded-2xl bg-warm-50 border border-warm-200/60"
            >
              <h3 className="text-xl sm:text-2xl font-serif text-warm-800 mb-1">{item.title}</h3>
              <p className="text-warm-500 text-xs sm:text-sm mb-4">{item.sub}</p>
              <p className="text-warm-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-serif text-warm-800 mb-4">まずは自分の数字を知ることから</h2>
          <p className="text-warm-600 text-sm sm:text-base leading-relaxed mb-8">
            トップページの「数秘術計算」で才能数・本質数・探究数を無料で計算できます。数字がわかったら、それぞれの意味を深く知りたい方は書籍や個人鑑定書、無料のワークショップもご活用ください。
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-warm-700 hover:text-warm-900 transition-colors text-sm font-medium"
          >
            数秘術計算で自分の数字を出す
            <ArrowRight size={16} />
          </Link>
          <span className="mx-3 text-warm-400">|</span>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-warm-700 hover:text-warm-900 transition-colors text-sm font-medium"
          >
            商品・サービスを見る
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
