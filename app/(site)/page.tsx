'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function sumDigits(n: number): number {
  return String(n).split('').reduce((s, d) => s + parseInt(d, 10), 0);
}

function reduceToSingle(n: number): number {
  let v = n;
  while (v > 9 && v !== 11 && v !== 22 && v !== 33) {
    v = sumDigits(v);
  }
  return v;
}

function calcTalentNumber(day: number): number {
  // 日が11・22・33（マスターナンバー）のときはそのまま
  if (day === 11 || day === 22 || day === 33) return day;
  return reduceToSingle(sumDigits(day));
}

function calcEssenceNumber(year: number, month: number, day: number): number {
  return reduceToSingle(sumDigits(year) + sumDigits(month) + sumDigits(day));
}

function calcExplorationNumber(month: number, day: number): number {
  return reduceToSingle(sumDigits(month) + sumDigits(day));
}

function calcPersonalYear(birthMonth: number, birthDay: number, targetYear: number): number {
  return reduceToSingle(sumDigits(birthMonth) + sumDigits(birthDay) + sumDigits(targetYear));
}

type CalcResult = {
  talent: number;
  essence: number;
  exploration: number;
};

function NumerologyCalculator() {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = React.useState('');
  const [month, setMonth] = React.useState('');
  const [day, setDay] = React.useState('');
  const [result, setResult] = React.useState<CalcResult | null>(null);
  const [cycleOffset, setCycleOffset] = React.useState(0);

  const handleCalc = () => {
    const y = parseInt(year, 10);
    const m = parseInt(month, 10);
    const d = parseInt(day, 10);
    if (!y || !m || !d) return;
    setResult({
      talent: calcTalentNumber(d),
      essence: calcEssenceNumber(y, m, d),
      exploration: calcExplorationNumber(m, d),
    });
    setCycleOffset(0);
  };

  const cycleBaseYear = currentYear + cycleOffset;
  const bm = parseInt(month, 10);
  const bd = parseInt(day, 10);

  const years = [];
  for (let y = 1940; y <= currentYear; y++) years.push(y);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50">
      <motion.div {...fadeUp} className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-warm-800 text-center mb-3">
          数秘術計算
        </h2>
        <p className="text-warm-500 text-sm text-center mb-10">
          生年月日を入力してください（無料）
        </p>

        {/* 入力フォーム */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
          <div>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full bg-white border border-warm-200 rounded-lg py-3 px-3 text-sm text-warm-700 focus:border-warm-400 outline-none transition-colors appearance-none"
            >
              <option value="">年</option>
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-full bg-white border border-warm-200 rounded-lg py-3 px-3 text-sm text-warm-700 focus:border-warm-400 outline-none transition-colors appearance-none"
            >
              <option value="">月</option>
              {months.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="w-full bg-white border border-warm-200 rounded-lg py-3 px-3 text-sm text-warm-700 focus:border-warm-400 outline-none transition-colors appearance-none"
            >
              <option value="">日</option>
              {days.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        <motion.button
          onClick={handleCalc}
          disabled={!year || !month || !day}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="relative w-full max-w-sm mx-auto block py-4 rounded-full text-sm tracking-[0.15em] transition-all duration-300 touch-manipulation overflow-hidden disabled:opacity-30 disabled:cursor-not-allowed bg-gradient-to-r from-warm-400 via-warm-300 to-warm-400 text-warm-800 shadow-[0_4px_20px_-4px_rgba(197,185,168,0.5)] hover:shadow-[0_6px_28px_-4px_rgba(197,185,168,0.7)]"
        >
          計算する
        </motion.button>

        {/* 結果 */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <h3 className="text-xl sm:text-2xl font-serif text-warm-700 text-center mb-8">計算結果</h3>

              {/* 3つの数字 */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-12">
                {[
                  { label: '才能数', value: result.talent },
                  { label: '本質数', value: result.essence },
                  { label: '探究数', value: result.exploration },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.15, duration: 0.4 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-warm-300 flex items-center justify-center mb-3">
                      <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-warm-800">
                        {item.value}
                      </span>
                    </div>
                    <span className="text-warm-600 text-xs sm:text-sm">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* 人生の9年周期 */}
              <div className="border-t border-warm-200 pt-10">
                <h3 className="text-xl sm:text-2xl font-serif text-warm-700 text-center mb-8">人生の9年周期</h3>

                <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3">
                  <div className="flex gap-1">
                    <button
                      onClick={() => setCycleOffset((o) => o - 5)}
                      className="w-8 h-8 rounded border border-warm-300 flex items-center justify-center text-warm-500 hover:bg-warm-100 transition-colors"
                      aria-label="5年前へ"
                    >
                      <ChevronsLeft size={14} />
                    </button>
                    <button
                      onClick={() => setCycleOffset((o) => o - 1)}
                      className="w-8 h-8 rounded border border-warm-300 flex items-center justify-center text-warm-500 hover:bg-warm-100 transition-colors"
                      aria-label="1年前へ"
                    >
                      <ChevronLeft size={14} />
                    </button>
                  </div>

                  <div className="flex items-end gap-1 sm:gap-3 md:gap-4">
                    {[-2, -1, 0, 1, 2].map((offset) => {
                      const targetYear = cycleBaseYear + offset;
                      const pYear = calcPersonalYear(bm, bd, targetYear);
                      const isCurrent = offset === 0;
                      return (
                        <div key={offset} className="flex flex-col items-center">
                          {isCurrent && offset === 0 && (
                            <span className="text-[10px] text-warm-400 mb-1 hidden sm:block">&nbsp;</span>
                          )}
                          <span
                            className={`font-serif leading-none ${
                              isCurrent
                                ? 'text-3xl sm:text-4xl md:text-5xl text-warm-800 font-bold'
                                : 'text-lg sm:text-xl md:text-2xl text-warm-500'
                            }`}
                          >
                            {pYear}
                          </span>
                          <span
                            className={`mt-1 ${
                              isCurrent
                                ? 'text-sm sm:text-base text-warm-800 font-medium'
                                : 'text-xs sm:text-sm text-warm-400'
                            }`}
                          >
                            {targetYear}
                          </span>
                          {!isCurrent && (
                            <span className="text-warm-300 text-xs mt-0.5 hidden sm:block">&nbsp;</span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex gap-1">
                    <button
                      onClick={() => setCycleOffset((o) => o + 1)}
                      className="w-8 h-8 rounded border border-warm-300 flex items-center justify-center text-warm-500 hover:bg-warm-100 transition-colors"
                      aria-label="1年後へ"
                    >
                      <ChevronRight size={14} />
                    </button>
                    <button
                      onClick={() => setCycleOffset((o) => o + 5)}
                      className="w-8 h-8 rounded border border-warm-300 flex items-center justify-center text-warm-500 hover:bg-warm-100 transition-colors"
                      aria-label="5年後へ"
                    >
                      <ChevronsRight size={14} />
                    </button>
                  </div>
                </div>

                {/* 矢印 */}
                <div className="flex justify-center mt-3">
                  <div className="flex items-center gap-4 sm:gap-7 text-warm-300 text-xs">
                    <span>&gt;</span>
                    <span>&gt;</span>
                    <span className="text-warm-400 font-medium">●</span>
                    <span>&gt;</span>
                    <span>&gt;</span>
                  </div>
                </div>
              </div>

              {/* 補足リンク */}
              <div className="mt-10 text-center space-y-2">
                <p className="text-amber-600 text-sm">
                  ☆マイナンバー（3つの数字）
                </p>
                <p className="text-amber-600 text-sm">
                  ☆人生の9サイクル
                </p>
              </div>

              <p className="text-warm-500 text-xs mt-6 text-center leading-relaxed max-w-lg mx-auto">
                ※数秘術における人生の9年サイクルは誕生日が起点となります。
                自動計算では、その年（西暦）の誕生日からのサイクルが表示されますので、
                その年にまだ誕生日を迎えていない方は、前年度のサイクルをご覧ください。
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

const NINE_WAVES = [
  { num: 1, label: '発展', color: 'bg-red-50 text-red-400' },
  { num: 2, label: '協調', color: 'bg-orange-50 text-orange-400' },
  { num: 3, label: '創造', color: 'bg-yellow-50 text-yellow-500' },
  { num: 4, label: '安定', color: 'bg-green-50 text-green-500' },
  { num: 5, label: '変化', color: 'bg-teal-50 text-teal-500' },
  { num: 6, label: '愛情', color: 'bg-pink-50 text-pink-400' },
  { num: 7, label: '休息', color: 'bg-blue-50 text-blue-400' },
  { num: 8, label: '繁栄', color: 'bg-purple-50 text-purple-400' },
  { num: 9, label: '完結', color: 'bg-warm-100 text-warm-600' },
] as const;

const PRODUCTS = [
  {
    title: '書籍',
    subtitle: '製作中',
    desc: '数字の意味や、誕生日から導き出されるあなただけのナンバーについて分かりやすくまとめた一冊を製作中です。完成しましたら、Kindleでご購入いただけるよう準備を進めております。しなやかに生きるヒントを、ぜひ手に取って感じてください。',
    image: '/images/ebook-cover.svg',
    link: '/services',
    linkLabel: '詳細を見る',
  },
  {
    title: '個人鑑定書',
    subtitle: '¥5,500〜',
    desc: '数字に込められた意味を知り、自分らしく日々を過ごすための取扱説明書。ご自身や大切な方のライフプランニングにお役立てください。',
    image: '/images/assessment-doc-a4.svg',
    link: '/services',
    linkLabel: '鑑定書を購入する',
  },
  {
    title: '講座・ワークショップ',
    subtitle: '無料体験',
    desc: 'グループで数秘術を体感できるワークショップ。無料でご参加いただけます。実際に自分の数字を計算しながら、数秘の世界に触れてみましょう。',
    image: '/images/workshop-line.svg',
    link: '/workshop',
    linkLabel: '無料体験に申し込む',
  },
] as const;

const TOOL_CARDS = [
  {
    title: '誕生日で自己理解',
    desc: '生年月日から数の神秘をひも解いて、智慧を生活に活かすことを数秘術と呼びます。まずはご自身のナンバーを知ることからはじめませんか？',
    image: '/images/logo-sns.png',
    link: '/tools/mynumber',
    linkLabel: 'マイナンバーを知る',
  },
  {
    title: '自己理解の次に他者理解',
    desc: '自分の持って生まれた才能、本質を知り受け容れていく。そして他者を認め信じることで、仕事も家庭も豊かになっていきます。',
    image: '/images/logo-sns.png',
    link: '/tools/compatibility',
    linkLabel: '相性を読み解く',
  },
  {
    title: '人生の方向性を知る',
    desc: '人生の方向性を知ることができるなら、知ってみたいと思いませんか？これから巡ってくる年を知ることで、心の迷いが消え自然体で人生を楽しむことができます。',
    image: '/images/logo-sns.png',
    link: '/tools/cycle',
    linkLabel: '9年サイクルについて',
  },
] as const;

export default function Home() {
  return (
    <div className="pb-0">
      {/* ヒーロー */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <img
            src={`/images/${encodeURIComponent('137数秘 自分らしさを求めて.svg')}`}
            alt="137数秘 自分らしさを求めて"
            className="w-full h-auto"
            fetchPriority="high"
          />
        </div>
      </section>

      {/* 導入メッセージ */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
          <p className="text-warm-700 text-sm sm:text-base md:text-lg leading-loose mb-6">
            「なぜか最近うまくいかない」「新しいことを始めるタイミングに迷う」
          </p>
          <p className="text-warm-600 text-sm sm:text-base leading-loose mb-8">
            それは、あなたの能力のせいではなく、単に
            <strong className="text-warm-800 font-medium">「人生の季節」</strong>
            に合わせた行動ができていないだけかもしれません。
          </p>
          <p className="text-warm-800 text-sm sm:text-base md:text-lg leading-loose">
            数秘術は、あなたが今どの季節にいて、
            <br className="hidden sm:block" />
            次にどんな準備をすべきかを教えてくれる
            <span className="text-accent-rose font-medium">「地図」</span>
            です。
          </p>
        </motion.div>
      </section>

      {/* 数秘術計算 */}
      <NumerologyCalculator />

      {/* 商品・サービス */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto mb-12 sm:mb-16 text-center">
          <span className="text-warm-500 tracking-[0.25em] uppercase text-[10px] sm:text-xs mb-3 block">Products</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-warm-800 mb-3">商品・サービス</h2>
          <div className="w-12 h-px bg-warm-300 mx-auto" />
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20 md:space-y-28">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-contain object-center"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-serif text-warm-800 mb-2">{product.title}</h3>
                <span className="text-warm-500 text-sm mb-4">{product.subtitle}</span>
                <p className="text-warm-600 text-sm sm:text-base leading-relaxed mb-6">
                  {product.desc}
                </p>
                <Link
                  href={product.link}
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-warm-800 text-white text-sm hover:bg-warm-700 transition-colors w-fit touch-manipulation"
                >
                  {product.linkLabel}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* バイオリズムの9つの波 */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-warm-500 tracking-[0.25em] uppercase text-[10px] sm:text-xs mb-3 block">Biorhythm</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-warm-800 mb-3">バイオリズムの9つの波</h2>
          <div className="w-12 h-px bg-warm-300 mx-auto mb-5" />
          <p className="text-warm-500 text-xs sm:text-sm max-w-md mx-auto">
            人生のサイクルを表す、1から9までの数字が持つキーワード
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {NINE_WAVES.map(({ num, label, color }, i) => (
            <motion.div
              key={num}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className={`p-4 sm:p-5 md:p-6 rounded-2xl text-center ${color.split(' ')[0]} border border-warm-100`}
            >
              <span className={`block text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-1 ${color.split(' ')[1]}`}>
                {num}
              </span>
              <span className="text-warm-700 font-medium text-[11px] sm:text-xs">{label}</span>
            </motion.div>
          ))}
        </div>

        <motion.p {...fadeUp} className="text-warm-500 text-xs sm:text-sm text-center mt-8 sm:mt-10 max-w-md mx-auto">
          今、あなたはどの「波」の季節にいるでしょうか。
          <br />
          誕生日から読み解く数秘術で、その答えに近づけます。
        </motion.p>
      </section>

      {/* 数秘を活かすツール */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-warm-500 tracking-[0.25em] uppercase text-[10px] sm:text-xs mb-3 block">Tools</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-warm-800 mb-3">数秘を活かすツール</h2>
          <div className="w-12 h-px bg-warm-300 mx-auto" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-3 sm:gap-6 md:gap-8">
          {TOOL_CARDS.map((card, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="card-natural overflow-hidden flex flex-col"
            >
              <div className={`relative w-full bg-warm-100 ${card.image === '/images/logo-sns.png' ? 'aspect-square' : 'aspect-[4/3]'}`}>
                <img
                  src={card.image}
                  alt={card.title}
                  className={`absolute inset-0 w-full h-full object-center ${card.image === '/images/logo-sns.png' ? 'object-contain' : 'object-cover'}`}
                  loading="lazy"
                />
              </div>
              <div className="p-3 sm:p-5 md:p-6 flex flex-col flex-1">
                <h3 className="text-xs sm:text-base md:text-lg font-serif text-warm-800 mb-1 sm:mb-3 leading-tight">{card.title}</h3>
                <p className="text-warm-600 text-[10px] sm:text-sm leading-relaxed mb-2 sm:mb-5 flex-1 line-clamp-3 sm:line-clamp-none">{card.desc}</p>
                <Link
                  href={card.link}
                  className="inline-flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm text-warm-700 hover:text-warm-900 transition-colors group"
                >
                  <span className="truncate">{card.linkLabel}</span>
                  <ArrowRight size={12} className="shrink-0 sm:w-[14px] sm:h-[14px]" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* お客様の声 */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-warm-500 tracking-[0.25em] uppercase text-[10px] sm:text-xs mb-3 block">Voice</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-warm-800 mb-3">お客様の声</h2>
          <div className="w-12 h-px bg-warm-300 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { voice: '自分の数字を知ってから、なぜ今の時期に迷いが出ていたのかが腑に落ちました。これから何を大切にすればいいか、道筋が見えた気がします。', label: '30代女性' },
            { voice: 'パートナー鑑定を受けて、理想の相手像が言語化されました。漠然としていた「こういう人がいい」が明確になり、出会いへの意識が変わりました。', label: '20代女性' },
            { voice: '数秘術は初めてでしたが、話がとてもわかりやすく、自分を客観的に見つめ直すきっかけになりました。また機会があれば受けたいです。', label: '40代女性' },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-warm-50 border border-warm-100"
            >
              <p className="text-warm-700 text-sm leading-relaxed mb-5">&ldquo;{item.voice}&rdquo;</p>
              <span className="text-warm-500 text-xs">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* プロフィール */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div
            {...fadeUp}
            className="flex flex-col items-center md:items-start flex-shrink-0"
          >
            <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-warm-400 tracking-tight">137</span>
            <span className="text-warm-500 text-xs tracking-[0.25em] mt-1">isana</span>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="max-w-lg w-full"
          >
            <span className="text-warm-500 tracking-[0.25em] uppercase text-[10px] sm:text-xs mb-4 block">Profile</span>
            <div className="space-y-4 text-warm-600 text-sm sm:text-base leading-relaxed">
              <p>
                初めまして。数秘術と出会い、自分の数字が教えてくれる「地図」に救われた経験から、
                同じように道に迷いを感じている方の力になりたいと思い、この場を設けました。
              </p>
              <p>
                セッションでは、占いの奥深さと、数字から読み解ける人生のヒントを、
                少しでも多くの方に届けられたらという想いでお話ししています。
              </p>
              <p className="text-warm-800 font-medium">
                あなたの「数字」が教えてくれる答えを、一緒にひも解きませんか。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-warm-800 mb-5 leading-relaxed">
            あなたの運命を、
            <br />
            数字からひも解きませんか？
          </h2>
          <p className="text-warm-500 text-sm sm:text-base mb-10">
            一歩踏み出す勇気が、未来の景色を変えます。
            <br className="hidden sm:block" />
            まずはあなたの数字を知ることから始めましょう。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center min-h-[48px] py-3.5 px-10 sm:px-14 rounded-full bg-warm-800 text-white hover:bg-warm-700 active:bg-warm-900 transition-colors text-sm tracking-wider touch-manipulation"
          >
            無料相談・お問い合わせ
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
