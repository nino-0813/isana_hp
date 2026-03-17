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

export default function ToolCycle() {
  return (
    <div className="pb-0">
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-warm-500 tracking-[0.25em] uppercase text-[10px] sm:text-xs mb-4 block">Tool</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-warm-800 mb-6 sm:mb-8">
            人生の方向性を知る
          </h1>
          <p className="text-warm-600 text-sm sm:text-base md:text-lg leading-relaxed">
            「9年サイクル」で、今の年がどんなテーマの年なのかを読み解きます。
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif text-warm-800 mb-4">9年サイクルとは</h2>
          <p className="text-warm-600 text-sm sm:text-base leading-relaxed">
            数秘術では、誕生日を起点に、人生を「1年ごとのサイクル」でとらえます。毎年、その年ならではの「パーソナルイヤー」（個人年数）という数字が割り当てられ、1〜9までを一巡するので「9年サイクル」と呼ばれます。今の年が「種をまく年」なのか「収穫の年」なのか、「休息の年」なのかがわかると、無理や焦りが減り、自然体で過ごしやすくなります。
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto space-y-6 mb-12">
          <motion.div {...fadeUp} className="p-6 sm:p-8 rounded-2xl bg-warm-50 border border-warm-200/60">
            <h3 className="text-lg sm:text-xl font-serif text-warm-800 mb-3">パーソナルイヤーの出し方</h3>
            <p className="text-warm-600 text-sm sm:text-base leading-relaxed mb-4">
              生まれた「月」と「日」、そして「知りたい年」の西暦をそれぞれ一桁になるまで足し、最後に3つを足して一桁（または11・22・33）にした数字が、その年のパーソナルイヤーです。トップページの「数秘術計算」の「人生の9年周期」で、生年月日を入力すると自動で各年の数字が表示されます。
            </p>
            <p className="text-warm-500 text-xs sm:text-sm">
              ※その年の誕生日を迎えていない場合は、前の年のサイクルがまだ続いていると考えることがあります。
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="p-6 sm:p-8 rounded-2xl bg-warm-50 border border-warm-200/60">
            <h3 className="text-lg sm:text-xl font-serif text-warm-800 mb-3">数字ごとの年のテーマ（例）</h3>
            <p className="text-warm-600 text-sm sm:text-base leading-relaxed">
              1の年は「新しいスタート・自立」、2の年は「協調・パートナーシップ」、3の年は「表現・創造」…といったように、1〜9それぞれにテーマがあります。今の年が何の年かがわかると、「今は無理して動くより、準備や学びの年にしよう」など、自分に合った選択がしやすくなります。詳しい読み解きは書籍や個人鑑定書、ワークショップでお伝えしています。
            </p>
          </motion.div>
        </div>
        <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
          <p className="text-warm-600 text-sm sm:text-base leading-relaxed mb-6">
            まずはトップページの数秘術計算で、あなたの「今年」や「来年」の数字を確認してみてください。
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-full bg-warm-800 text-white hover:bg-warm-700 transition-colors text-sm"
          >
            数秘術計算で9年サイクルを見る
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
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
