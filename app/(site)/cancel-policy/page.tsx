'use client';

import React from 'react';
import { motion } from 'motion/react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export default function CancelPolicy() {
  return (
    <div className="pb-0">
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-warm-500 tracking-[0.25em] uppercase text-[10px] sm:text-xs mb-4 block">Policy</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-warm-800 mb-6 sm:mb-8">キャンセルポリシー</h1>
          <p className="text-warm-600 text-sm sm:text-base md:text-lg leading-relaxed">
            サービスをご利用いただくに当たりまして、以下の事由をお読みください。
            <br />
            お申し込みをいただいた時点で、これらの事由に同意いただいたものとします。
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-serif text-warm-800 mb-6 sm:mb-8">お支払い・キャンセルについて</h2>
          <ul className="space-y-4 sm:space-y-5 text-warm-600 text-sm sm:text-base leading-relaxed list-disc pl-5 sm:pl-6">
            <li>お支払いは原則、前入金／銀行振込でお願いしております。</li>
            <li>日程の再調整は１度まで無料で可能です。</li>
            <li>お客様都合におけるキャンセルの場合、一度ご入金いただいた代金のご返金は致しかねます。</li>
            <li>理由の無い当日のキャンセルにつきましては、セッション料金の100％を頂戴いたしますことをあらかじめご了承ください。</li>
            <li>主催者側の都合によりキャンセルが生じた場合、代金の全額をご返金いたします。</li>
            <li>このセッションはクライアント様の変化をお約束するものではございません。主体的な行動をお願いしております。</li>
          </ul>
        </motion.div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-serif text-warm-800 mb-6 sm:mb-8">セッションについて</h2>
          <div className="space-y-6 text-warm-600 text-sm sm:text-base leading-relaxed">
            <p>
              セッションでは占いの枠にとどまることなく、人生の具現化も本格的にサポートさせて頂いております。楽しみに受けていただきたいと考えております。
            </p>
            <p>
              もし、「未来を教えて欲しい」「セッションを受けさえすれば、変わる」と言う、他力のみで人生を変えようとされる方、自分自身に還るつもりが無い方はお申し込みをご遠慮下さいますよう、予めご了承下さい。
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-serif text-warm-800 mb-6 sm:mb-8">プライバシーについて</h2>
          <p className="text-warm-600 text-sm sm:text-base leading-relaxed">
            セッションでの内容、プライバシーなどにおいてはもちろん秘密厳守で、決して口外しないことをお約束致します。プライバシーが気になる方や、人に自分自身の悩みが知られることを心配されている方など、安心してお申し込みください。
          </p>
        </motion.div>
      </section>
    </div>
  );
}
