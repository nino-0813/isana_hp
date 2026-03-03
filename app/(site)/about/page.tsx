'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pb-32">
      <section className="py-32 px-6 bg-ivory text-center">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-6 block">About Us</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-10">なぜ数秘術なのか</h1>
          <p className="text-ink/60 text-lg leading-relaxed">
            私たちは、単なる「占い」を提供しているのではありません。<br />
            あなたが自分自身の輝きに気づき、最良のパートナーと共に歩むための<br />
            「人生のコンパス」をお渡ししています。
          </p>
        </motion.div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-serif mb-8">私たちの想い</h2>
            <div className="space-y-6 text-ink/70 leading-loose">
              <p>
                現代社会において、パートナー探しはかつてないほど多様化し、同時に複雑になっています。
                マッチングアプリやSNSで数多くの出会いがある一方で、「本当に自分に合う人は誰なのか」という問いに、多くの人が迷いを感じています。
              </p>
              <p>
                私自身もかつて、人間関係やパートナーシップで深く悩み、自分を見失っていた時期がありました。
                そんな時に出会ったのが「数秘術」でした。
              </p>
              <p>
                自分の誕生日に秘められた数字を読み解いたとき、それまでの人生のすべての出来事が一本の線でつながり、
                自分がどのような愛を求め、どのような相手と響き合うのかが明確になったのです。
              </p>
              <p>
                この感動と確信を、一人でも多くの人に届けたい。
                数字という客観的な指標を通じて、主観的な迷いから解放され、
                心から満たされる関係性を築いてほしい。それが、LUMINOUS NUMEROLOGYの原点です。
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl luxury-border">
              <Image
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
                alt="Meditation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-serif mb-6">大切にしている3つの価値</h2>
          <div className="w-20 h-px bg-gold mx-auto" />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Authenticity', subtitle: '真実性', desc: '表面的なテクニックではなく、あなたの魂の真実にアプローチします。' },
            { title: 'Empowerment', subtitle: '自己実現', desc: '占いに依存するのではなく、自らの力で運命を切り拓くサポートをします。' },
            { title: 'Connection', subtitle: '深い繋がり', desc: '孤独を埋めるための出会いではなく、魂が成長し合える繋がりを目指します。' },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 border border-gold/10 rounded-2xl hover:border-gold/30 transition-colors text-center"
            >
              <span className="text-gold tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">{value.title}</span>
              <h3 className="text-2xl font-serif mb-6">{value.subtitle}</h3>
              <p className="text-ink/60 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
