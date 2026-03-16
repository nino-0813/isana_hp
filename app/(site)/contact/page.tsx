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
    <div className="pb-0">
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-warm-50 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-warm-500 tracking-[0.25em] uppercase text-[10px] sm:text-xs mb-4 block">Contact</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-warm-800 mb-6 sm:mb-8">お問い合わせ</h1>
          <p className="text-warm-600 text-sm sm:text-base md:text-lg leading-relaxed">
            鑑定のご予約、取材のご依頼、その他ご質問など、
            <br className="hidden sm:block" />
            お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-warm-800 mb-6 sm:mb-8">ご連絡先</h2>
            <p className="text-warm-600 text-sm sm:text-base leading-relaxed mb-10">
              お問い合わせ内容を確認後、通常2〜3営業日以内にご返信いたします。
              お急ぎの場合は、公式LINEからも受け付けております。
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-warm-100 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-warm-600" />
                </div>
                <div>
                  <h4 className="font-serif text-warm-800 mb-1">Email</h4>
                  <p className="text-warm-600 text-sm">info@isana-numerology.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-warm-100 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-warm-600" />
                </div>
                <div>
                  <h4 className="font-serif text-warm-800 mb-1">Phone</h4>
                  <p className="text-warm-600 text-sm">03-xxxx-xxxx (平日 10:00 - 18:00)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-warm-100 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-warm-600" />
                </div>
                <div>
                  <h4 className="font-serif text-warm-800 mb-1">Office</h4>
                  <p className="text-warm-600 text-sm">東京都港区南青山（完全予約制）</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-warm-50 p-6 sm:p-8 md:p-10 rounded-2xl border border-warm-200/60">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 bg-warm-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={28} className="text-warm-600" />
                </div>
                <h3 className="text-xl font-serif text-warm-800 mb-3">送信完了いたしました</h3>
                <p className="text-warm-600 text-sm">
                  お問い合わせありがとうございます。
                  <br />
                  内容を確認次第、担当者よりご連絡させていただきます。
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-warm-700 text-sm underline underline-offset-4 hover:text-warm-900"
                >
                  フォームに戻る
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] tracking-wide text-warm-500 ml-0.5">お名前</label>
                    <input
                      required
                      type="text"
                      placeholder="お名前"
                      className="w-full bg-white border border-warm-200 rounded-lg py-3 px-4 text-sm focus:border-warm-400 outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] tracking-wide text-warm-500 ml-0.5">メールアドレス</label>
                    <input
                      required
                      type="email"
                      placeholder="メールアドレス"
                      className="w-full bg-white border border-warm-200 rounded-lg py-3 px-4 text-sm focus:border-warm-400 outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] tracking-wide text-warm-500 ml-0.5">お問い合わせ内容</label>
                  <select className="w-full bg-white border border-warm-200 rounded-lg py-3 px-4 text-sm focus:border-warm-400 outline-none transition-colors appearance-none">
                    <option>鑑定のご予約について</option>
                    <option>サービスに関するお問い合わせ</option>
                    <option>取材・お仕事のご依頼</option>
                    <option>その他</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] tracking-wide text-warm-500 ml-0.5">メッセージ</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="メッセージを入力してください"
                    className="w-full bg-white border border-warm-200 rounded-lg py-3 px-4 text-sm focus:border-warm-400 outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-warm-800 text-white py-3.5 rounded-full hover:bg-warm-700 transition-colors text-sm tracking-wider touch-manipulation"
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
