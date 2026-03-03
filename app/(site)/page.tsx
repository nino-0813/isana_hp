'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

const NINE_WAVES = [
  { num: 1, label: '発展' },
  { num: 2, label: '協調' },
  { num: 3, label: '創造' },
  { num: 4, label: '安定' },
  { num: 5, label: '変化' },
  { num: 6, label: '愛情' },
  { num: 7, label: '休息' },
  { num: 8, label: '繁栄' },
  { num: 9, label: '完結' },
] as const;

const CORE_ITEMS = [
  {
    title: '9年周期のサイクル',
    desc: '人生は1から始まり9で終わる自然の流れがあります。この波を知ることで、運命は「決まったもの」ではなく、自ら波に乗り、開運していくものだと捉えられます。',
  },
  {
    title: '数字のエネルギー',
    desc: '1つの数字には「意味・役割・特徴」があり、あなたの思考や行動に影響を与えています。数秘術は、そのエネルギーを読み解くための言語です。',
  },
  {
    title: '自分軸の発見',
    desc: '「本質（現在）」「個性（過去）」「課題（未来）」の3つの数字から、本来の自分を知ることができます。人生のバイオリズム（季節）を味方に、進むべき道が見えてきます。',
  },
] as const;

export default function Home() {
  return (
    <div className="pb-24 sm:pb-28 md:pb-32">
      {/* 1. ヒーロー（画像） */}
      <section className="relative min-h-[55vh] sm:min-h-[70vh] md:min-h-[85vh] w-full overflow-hidden">
        <img
          src="/images/hero-presentation.webp"
          alt="あなたの誕生日に隠された「魂の設計図」をひも解く。9年周期のバイオリズムを知ることは、人生で最も簡単な開運方法です。"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
      </section>

      {/* 2. 導入メッセージ */}
      <section className="py-14 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-ink/80 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
            「なぜか最近うまくいかない」「新しいことを始めるタイミングに迷う」
          </p>
          <p className="text-ink/70 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
            それは、あなたの能力のせいではなく、単に
            <strong className="text-ink font-medium">「人生の季節」</strong>
            に合わせた行動ができていないだけかもしれません。
          </p>
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <p className="text-ink text-base sm:text-lg md:text-xl leading-relaxed">
              数秘術は、あなたが今どの季節にいて、
              <br className="hidden sm:block" />
              次にどんな準備をすべきかを教える
              <span className="text-gold font-medium">「地図」</span>
              となります。
            </p>
          </div>
          <Link
            href="/services"
            className="mt-8 sm:mt-12 inline-flex items-center justify-center w-full max-w-[320px] mx-auto min-h-[48px] py-4 px-6 rounded-full bg-ink text-white hover:bg-gold active:bg-gold/90 transition-all duration-300 font-medium text-sm tracking-wide touch-manipulation"
            aria-label="運命を読み解く方法"
          >
            運命を読み解く方法
          </Link>
        </div>
      </section>

      {/* 数秘の起源・世界各地の伝統（画像＋説明） */}
      <section className="py-14 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-ivory">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full aspect-[4/3] md:aspect-[3/2] max-h-[38vh] sm:max-h-[45vh] md:max-h-[50vh] rounded-xl sm:rounded-2xl overflow-hidden mb-12 sm:mb-16 md:mb-20 luxury-border shadow-xl">
            <img
              src="/images/h_01.svg"
              alt="数秘術と世界の伝統"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-16">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 sm:p-6 md:p-8 border border-gold/10 rounded-xl sm:rounded-2xl bg-white/70"
            >
              <h3 className="text-lg sm:text-xl font-serif text-ink mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gold/20">数秘の起源と歴史</h3>
              <p className="text-ink/70 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                数秘術のルーツは、古代ギリシャのピタゴラスに遡るとされています。ピタゴラスは「万物は数である」と説き、数字に宇宙の秩序や人間の性質が表れると考えました。
              </p>
              <p className="text-ink/70 text-sm sm:text-base leading-relaxed">
                その後、ユダヤ教のカバラや西洋の神秘思想と結びつき、誕生日や名前から運命を読み解く現代の数秘術へと発展してきました。日本では、姓名判断や九星気学などと親和性が高く、多くの方が「自分の数字」に触れる機会を求めています。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-5 sm:p-6 md:p-8 border border-gold/10 rounded-xl sm:rounded-2xl bg-white/70"
            >
              <h3 className="text-lg sm:text-xl font-serif text-ink mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gold/20">世界各地の数秘の伝統と文化</h3>
              <p className="text-ink/70 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                数字に意味を見る考え方は、国や地域を超えて存在します。中国の易経や風水、インドのヴェーダの思想、アラビアの数秘術など、それぞれの文化が独自の「数の解釈」を育んできました。
              </p>
              <p className="text-ink/70 text-sm sm:text-base leading-relaxed">
                現代の数秘術は、こうした東西の知恵が融合したものです。9年周期のバイオリズムやライフパスナンバーといった概念は、文化の違いを超えて、私たちに「自分らしさ」と「人生のリズム」を教えてくれます。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. 数秘術の核心（About の3つの価値と同じカードスタイル） */}
      <section className="py-14 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-ivory">
        <div className="max-w-5xl mx-auto mb-10 sm:mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[4/3] md:aspect-[3/2] max-h-[38vh] sm:max-h-[45vh] md:max-h-[50vh] rounded-xl sm:rounded-2xl overflow-hidden luxury-border shadow-xl"
          >
            <img
              src="/images/core-presentation.svg"
              alt="数秘術の核心"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
        <div className="max-w-4xl mx-auto mb-10 sm:mb-14 md:mb-16 text-center">
          <span className="text-gold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4 block">Core</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-3 sm:mb-4">数秘術の核心</h2>
          <div className="w-16 sm:w-20 h-px bg-gold mx-auto" />
        </div>
        <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6 md:space-y-8">
          {CORE_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-5 sm:p-6 md:p-8 lg:p-10 border border-gold/10 rounded-xl sm:rounded-2xl bg-white/60 hover:border-gold/25 transition-colors"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
                <span className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-champagne flex items-center justify-center text-gold font-serif text-lg sm:text-xl font-bold">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-serif text-ink mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-ink/60 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. バイオリズムの9つの波 */}
      <section className="py-14 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto mb-10 sm:mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[4/3] md:aspect-[3/2] max-h-[38vh] sm:max-h-[45vh] md:max-h-[50vh] rounded-xl sm:rounded-2xl overflow-hidden luxury-border shadow-xl"
          >
            <img
              src="/images/h_02.svg"
              alt="バイオリズムの9つの波"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 md:mb-14">
          <span className="text-gold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4 block">Biorhythm</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-3 sm:mb-4">バイオリズムの9つの波</h2>
          <div className="w-16 sm:w-20 h-px bg-gold mx-auto mb-4 sm:mb-6" />
          <p className="text-ink/60 text-xs sm:text-sm md:text-base max-w-xl mx-auto px-1">
            人生のサイクルを表す、1から9までの数字が持つキーワード
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
          {NINE_WAVES.map(({ num, label }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl border border-gold/10 bg-ivory/50 text-center hover:border-gold/20 transition-colors"
            >
              <span className="block text-lg sm:text-xl md:text-2xl font-serif font-bold text-gold mb-0.5 sm:mb-1">{num}</span>
              <span className="text-ink font-medium text-[11px] sm:text-xs md:text-sm">{label}</span>
            </motion.div>
          ))}
        </div>
        <p className="text-ink/50 text-xs sm:text-sm text-center mt-6 sm:mt-8 md:mt-10 max-w-lg mx-auto px-2">
          今、あなたはどの「波」の季節にいるでしょうか。誕生日から読み解く数秘術で、その答えに近づけます。
        </p>
      </section>

      {/* 数秘の基礎（画像＋3つの基礎） */}
      <section className="py-14 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-ivory">
        <div className="max-w-5xl mx-auto mb-10 sm:mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[4/3] md:aspect-[3/2] max-h-[38vh] sm:max-h-[45vh] md:max-h-[50vh] rounded-xl sm:rounded-2xl overflow-hidden luxury-border shadow-xl"
          >
            <img
              src="/images/h_03.svg"
              alt="数秘の基礎"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-14 text-center">
          <span className="text-gold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4 block">Basics</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-3 sm:mb-4">数秘の基礎</h2>
          <div className="w-16 sm:w-20 h-px bg-gold mx-auto" />
        </div>
        <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6 md:space-y-8">
          {[
            {
              title: '誕生日から導く「ライフパスナンバー」',
              desc: '生年月日を1桁になるまで足し合わせて得られる数字が、あなたの人生のテーマや使命を表します。数秘術の入口となる、もっとも基本となる数字です。',
            },
            {
              title: '本質・個性・課題の3つの数字',
              desc: '「本質」は今のあなたの核、「個性」は過去の経験が形づくった性質、「課題」はこれから向き合うテーマ。3つを合わせて読むことで、自分軸が明確になります。',
            },
            {
              title: '9年周期と運気の波',
              desc: '人生は9年で1サイクルの波があります。今が何年目かで「発展」「休息」「完結」などのテーマが変わり、行動のタイミングや心がけのヒントが得られます。',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-5 sm:p-6 md:p-8 lg:p-10 border border-gold/10 rounded-xl sm:rounded-2xl bg-white/60 hover:border-gold/25 transition-colors"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
                <span className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-champagne flex items-center justify-center text-gold font-serif text-lg sm:text-xl font-bold">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-serif text-ink mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-ink/60 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* お客様の声 */}
      <section className="py-14 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[4/3] md:aspect-[3/2] max-h-[30vh] sm:max-h-[36vh] rounded-xl sm:rounded-2xl overflow-hidden luxury-border shadow-xl"
          >
            <img
              src="/images/testimonials-header.png"
              alt="お客様の声"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
        <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6 md:space-y-8">
          {[
            { voice: '自分の数字を知ってから、なぜ今の時期に迷いが出ていたのかが腑に落ちました。これから何を大切にすればいいか、道筋が見えた気がします。', label: '30代女性' },
            { voice: 'パートナー鑑定を受けて、理想の相手像が言語化されました。漠然としていた「こういう人がいい」が明確になり、出会いへの意識が変わりました。', label: '20代女性' },
            { voice: '数秘術は初めてでしたが、話がとてもわかりやすく、自分を客観的に見つめ直すきっかけになりました。また機会があれば受けたいです。', label: '40代女性' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 sm:p-6 md:p-8 lg:p-10 border border-gold/10 rounded-xl sm:rounded-2xl bg-ivory/50 hover:border-gold/25 transition-colors"
            >
              <p className="text-ink/80 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">&ldquo;{item.voice}&rdquo;</p>
              <span className="text-ink/50 text-xs sm:text-sm">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 鑑定の流れ（画像のみ） */}
      <section className="py-14 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-ivory">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[4/3] md:aspect-[3/2] max-h-[38vh] sm:max-h-[45vh] md:max-h-[50vh] rounded-xl sm:rounded-2xl overflow-hidden luxury-border shadow-xl"
          >
            <img
              src="/images/h_04.svg"
              alt="鑑定の流れ"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
      </section>

      {/* 5. Profile（他ページとトーンを合わせる） */}
      <section className="py-14 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 bg-ivory">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start flex-shrink-0"
          >
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-gold tracking-tight">131</span>
            <span className="text-ink/50 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] mt-1 sm:mt-2">isana</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md w-full min-w-0"
          >
            <span className="text-gold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4 block">Profile</span>
            <div className="space-y-3 sm:space-y-4 text-ink/70 text-sm sm:text-base leading-relaxed">
              <p>初めまして。数秘術と出会い、自分の数字が教えてくれる「地図」に救われた経験から、同じように道に迷いを感じている方の力になりたいと思い、この場を設けました。</p>
              <p>セッションでは、占いの奥深さと、数字から読み解ける人生のヒントを、少しでも多くの方に届けられたらという想いでお話ししています。</p>
              <p className="text-ink/90 font-medium">あなたの「数字」が教えてくれる答えを、一緒にひも解きませんか。一歩目だけ、踏み出してみてください。</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. CTA（Contact 前の締め） */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-champagne/80 via-ivory to-champagne/90">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,_rgba(212,175,55,0.08)_0%,_transparent_55%)]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6 text-ink leading-tight px-1">
            あなたの運命を、
            <br />
            数字から紐解きませんか？
          </h2>
          <p className="text-ink/60 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 px-2">
            一歩踏み出す勇気が、未来の景色を変えます。
            まずはあなたの数字を知ることから始めましょう。
          </p>
          <Link
            href="/contact"
            className="inline-block border border-gold text-gold min-h-[48px] py-4 px-8 sm:px-12 rounded-full hover:bg-gold hover:text-ink active:bg-gold/90 transition-all duration-300 tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm font-semibold touch-manipulation"
          >
            無料相談・お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  );
}
