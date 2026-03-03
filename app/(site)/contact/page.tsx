'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-32">
      <section className="py-32 px-6 bg-ivory text-center">
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto">
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-6 block">Contact</span>
          <h1 className="text-5xl md:text-6xl font-serif mb-10">お問い合わせ</h1>
          <p className="text-ink/60 text-lg leading-relaxed">
            鑑定のご予約、取材のご依頼、その他ご質問など、<br />
            お気軽にお問い合わせください。
          </p>
        </motion.div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-serif mb-10">Get in Touch</h2>
            <p className="text-ink/60 leading-relaxed mb-12">
              お問い合わせ内容を確認後、通常2〜3営業日以内にご返信いたします。
              お急ぎの場合は、公式LINEからも受け付けております。
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-champagne flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">Email</h4>
                  <p className="text-ink/60">info@luminous-numerology.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-champagne flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">Phone</h4>
                  <p className="text-ink/60">03-xxxx-xxxx (平日 10:00 - 18:00)</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-full bg-champagne flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">Office</h4>
                  <p className="text-ink/60">東京都港区南青山（完全予約制）</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl luxury-border">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Send size={32} className="text-gold" />
                </div>
                <h3 className="text-2xl font-serif mb-4">送信完了いたしました</h3>
                <p className="text-ink/60">
                  お問い合わせありがとうございます。<br />
                  内容を確認次第、担当者よりご連絡させていただきます。
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-gold text-sm tracking-widest uppercase font-bold underline underline-offset-8"
                >
                  フォームに戻る
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-ink/40 ml-1">Name</label>
                    <input
                      required
                      type="text"
                      placeholder="お名前"
                      className="w-full bg-paper border-b border-gold/20 py-4 px-2 focus:border-gold outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-ink/40 ml-1">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="メールアドレス"
                      className="w-full bg-paper border-b border-gold/20 py-4 px-2 focus:border-gold outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase font-bold text-ink/40 ml-1">Subject</label>
                  <select className="w-full bg-paper border-b border-gold/20 py-4 px-2 focus:border-gold outline-none transition-colors appearance-none">
                    <option>鑑定のご予約について</option>
                    <option>サービスに関するお問い合わせ</option>
                    <option>取材・お仕事のご依頼</option>
                    <option>その他</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase font-bold text-ink/40 ml-1">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="メッセージを入力してください"
                    className="w-full bg-paper border-b border-gold/20 py-4 px-2 focus:border-gold outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-ink text-white py-5 rounded-full hover:bg-gold transition-all duration-500 tracking-[0.2em] uppercase text-sm font-semibold shadow-lg"
                >
                  メッセージを送信する
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
