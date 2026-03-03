'use client';

import React from 'react';

export default function About() {
  return (
    <div className="pb-24 sm:pb-32">
      <section className="py-14 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-ivory text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-gold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs font-semibold mb-4 sm:mb-6 block">About Us</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 sm:mb-10">なぜ数秘術なのか</h1>
          <p className="text-ink/60 text-sm sm:text-base md:text-lg leading-relaxed">
            私たちは、単なる「占い」を提供しているのではありません。<br />
            あなたが自分自身の輝きに気づき、最良のパートナーと共に歩むための<br />
            「人生のコンパス」をお渡ししています。
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
          <div className="w-full max-w-3xl mx-auto flex justify-center">
            <img
              src="/images/h_1.svg"
              alt="私たちの想い"
              className="w-full h-auto max-h-[60vh] object-contain object-center"
            />
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-serif mb-6 sm:mb-8">私たちの想い</h2>
            <div className="space-y-4 sm:space-y-6 text-ink/70 text-sm sm:text-base leading-loose">
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
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6">大切にしている3つの価値</h2>
          <div className="w-16 sm:w-20 h-px bg-gold mx-auto" />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {[
            { title: 'Authenticity', subtitle: '真実性', desc: '表面的なテクニックではなく、あなたの魂の真実にアプローチします。' },
            { title: 'Empowerment', subtitle: '自己実現', desc: '占いに依存するのではなく、自らの力で運命を切り拓くサポートをします。' },
            { title: 'Connection', subtitle: '深い繋がり', desc: '孤独を埋めるための出会いではなく、魂が成長し合える繋がりを目指します。' },
          ].map((value, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 md:p-10 border border-gold/10 rounded-xl sm:rounded-2xl hover:border-gold/30 transition-colors text-center"
            >
              <span className="text-gold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4 block">{value.title}</span>
              <h3 className="text-xl sm:text-2xl font-serif mb-4 sm:mb-6">{value.subtitle}</h3>
              <p className="text-ink/60 text-sm sm:text-base leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
