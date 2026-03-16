'use client';

import React from 'react';
import { motion } from 'motion/react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function About() {
  return (
    <div className="pb-0">
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-warm-500 tracking-[0.25em] uppercase text-[10px] sm:text-xs mb-4 block">About</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-warm-800 mb-6 sm:mb-8">なぜ数秘術なのか</h1>
          <p className="text-warm-600 text-sm sm:text-base md:text-lg leading-relaxed">
            私たちは、単なる「占い」を提供しているのではありません。
            <br className="hidden sm:block" />
            あなたが自分自身の輝きに気づき、しなやかに歩むための
            <br className="hidden sm:block" />
            「人生のコンパス」をお渡ししています。
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col gap-12 sm:gap-16 md:gap-20">
          <motion.div {...fadeUp} className="w-full max-w-3xl mx-auto flex justify-center">
            <img
              src="/images/h_1.svg"
              alt="私たちの想い"
              className="w-full h-auto max-h-[60vh] object-contain object-center rounded-2xl"
            />
          </motion.div>
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-serif text-warm-800 mb-6 sm:mb-8">私たちの想い</h2>
            <div className="space-y-4 sm:space-y-6 text-warm-600 text-sm sm:text-base leading-loose">
              <p>
                現代社会において、人生の選択はかつてないほど多様化し、同時に複雑になっています。
                「自分に本当に合った道はどれなのか」という問いに、多くの人が迷いを感じています。
              </p>
              <p>
                私自身もかつて、人間関係や人生の方向性で深く悩み、自分を見失っていた時期がありました。
                そんな時に出会ったのが「数秘術」でした。
              </p>
              <p>
                自分の誕生日に秘められた数字を読み解いたとき、それまでの人生のすべての出来事が一本の線でつながり、
                自分がどのような人生を求め、どのように歩むべきかが明確になったのです。
              </p>
              <p className="text-warm-800 font-medium">
                この感動と確信を、一人でも多くの人に届けたい。
                それが、isana の原点です。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-warm-800 mb-3">大切にしている3つの価値</h2>
          <div className="w-12 h-px bg-warm-300 mx-auto" />
        </motion.div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: 'Authenticity', subtitle: '真実性', desc: '表面的なテクニックではなく、あなたの魂の真実にアプローチします。' },
            { title: 'Empowerment', subtitle: '自己実現', desc: '占いに依存するのではなく、自らの力で運命を切り拓くサポートをします。' },
            { title: 'Connection', subtitle: '深い繋がり', desc: '孤独を埋めるための出会いではなく、魂が成長し合える繋がりを目指します。' },
          ].map((value, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-warm-200/60 text-center"
            >
              <span className="text-warm-500 tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-3 block">{value.title}</span>
              <h3 className="text-xl sm:text-2xl font-serif text-warm-800 mb-4">{value.subtitle}</h3>
              <p className="text-warm-600 text-sm sm:text-base leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
