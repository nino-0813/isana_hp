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

export default function ToolCompatibility() {
  return (
    <div className="pb-0">
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-warm-500 tracking-[0.25em] uppercase text-[10px] sm:text-xs mb-4 block">Tool</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-warm-800 mb-6 sm:mb-8">
            自己理解の次に他者理解
          </h1>
          <p className="text-warm-600 text-sm sm:text-base md:text-lg leading-relaxed">
            自分の数字を知ったら、次は「相手の数字」との関係性を読み解くことで、人間関係がもっと楽になります。
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif text-warm-800 mb-4">数秘術で「相性」を見るとは</h2>
          <p className="text-warm-600 text-sm sm:text-base leading-relaxed">
            相性を「当たる・外れる」ではなく、「お互いの性質の違いや共通点を理解するツール」として使います。パートナー、家族、仕事仲間など、相手の才能数・本質数と自分の数字を照らし合わせることで、「なぜそういう言動になるのか」「どう接すると伝わりやすいか」のヒントが得られます。
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div {...fadeUp} className="p-6 sm:p-8 rounded-2xl bg-warm-50 border border-warm-200/60">
            <h3 className="text-lg sm:text-xl font-serif text-warm-800 mb-3">自分と相手の「違い」を認める</h3>
            <p className="text-warm-600 text-sm sm:text-base leading-relaxed">
              数字が違うと、大切にしていることや表現の仕方が違います。自分と同じ考え方・動き方を相手に求めるのではなく、「この数字の人はこういう傾向がある」と知るだけで、イライラが減り、尊重し合いやすくなります。
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="p-6 sm:p-8 rounded-2xl bg-warm-50 border border-warm-200/60">
            <h3 className="text-lg sm:text-xl font-serif text-warm-800 mb-3">相性の「良い・悪い」ではなく「活かし方」</h3>
            <p className="text-warm-600 text-sm sm:text-base leading-relaxed">
              数秘術では、相性に絶対の良し悪しはありません。あるのは「組み合わせの特徴」です。相性が「難しい」と言われる組み合わせでも、お互いの性質を理解し、役割を分けたり伝え方を変えたりすることで、仕事もプライベートも豊かにしていけます。
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="p-6 sm:p-8 rounded-2xl bg-warm-50 border border-warm-200/60">
            <h3 className="text-lg sm:text-xl font-serif text-warm-800 mb-3">パートナー鑑定・相性鑑定について</h3>
            <p className="text-warm-600 text-sm sm:text-base leading-relaxed">
              ご自身と大切な方の生年月日から、二人の数字の関係性を詳しく読み解く「パートナー鑑定」や相性に特化した鑑定もご用意しています。個人鑑定書やセッションで、より深く他者理解を深めたい方はお気軽にご相談ください。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-full bg-warm-800 text-white hover:bg-warm-700 transition-colors text-sm"
          >
            商品・サービスを見る
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
