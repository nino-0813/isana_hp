'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Heart, Compass } from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative h-[90vh] flex items-center justify-center bg-ivory">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-champagne/30 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-gold tracking-[0.5em] uppercase text-xs mb-6 font-medium">
              Destiny & Numbers
            </span>
            <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] mb-8">
              数秘が導く、<br />
              <span className="italic">運命の出会い。</span>
            </h1>
            <p className="text-ink/60 max-w-xl mx-auto text-lg leading-relaxed mb-12">
              誕生日に秘められた数字の暗号を解き明かし、<br className="hidden md:block" />
              あなたの魂が求める真実のパートナーシップへと導きます。
            </p>
            <Link
              href="/services"
              className="inline-flex items-center space-x-4 bg-ink text-white px-10 py-5 rounded-full hover:bg-gold transition-all duration-500 group"
            >
              <span className="tracking-widest uppercase text-sm font-medium">鑑定メニューを見る</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30">
          <span className="text-[10px] tracking-[0.3em] uppercase mb-4 vertical-text">Scroll</span>
          <div className="w-px h-12 bg-ink" />
        </div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl luxury-border"
          >
            <Image
              src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <div>
            <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-6 block">The Charm of Numerology</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              なぜ「数」が<br />人生を変えるのか
            </h2>
            <p className="text-ink/70 leading-loose mb-10">
              数秘術は、古代ギリシャの哲学者ピタゴラスによって体系化された、世界で最も古い占術の一つです。
              あなたの誕生日は、偶然ではありません。そこには、今世での使命、才能、そしてどのような相手と響き合うのかという「魂の設計図」が刻まれています。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-champagne flex items-center justify-center shrink-0">
                  <Sparkles size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-2">自己理解の深化</h4>
                  <p className="text-sm text-ink/60">自分の本質を知ることで、迷いのない選択が可能になります。</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-champagne flex items-center justify-center shrink-0">
                  <Heart size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-2">相性の真実</h4>
                  <p className="text-sm text-ink/60">表面的な好みではなく、魂レベルでの共鳴を読み解きます。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#D4AF37_0%,_transparent_70%)]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Compass size={48} className="text-gold mx-auto mb-10" />
          <h2 className="text-4xl md:text-6xl font-serif mb-10">
            あなたの運命を、<br />数字から紐解きませんか？
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
            一歩踏み出す勇気が、未来の景色を変えます。
            まずはあなたの数字を知ることから始めましょう。
          </p>
          <Link
            href="/contact"
            className="inline-block border border-gold text-gold px-12 py-5 rounded-full hover:bg-gold hover:text-ink transition-all duration-500 tracking-[0.2em] uppercase text-sm font-semibold"
          >
            無料相談・お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  );
}
