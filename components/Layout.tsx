'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { name: 'ホーム', path: '/' },
  { name: '137について', path: '/about' },
  { name: 'メニュー', path: '/services' },
  { name: 'ブログ', path: '/blog' },
  { name: 'お問い合わせ', path: '/contact' },
] as const;

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-warm-200/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 min-w-0">
          <span className="font-serif text-lg sm:text-xl tracking-wider text-warm-800">isana</span>
          <span className="text-[9px] sm:text-[10px] tracking-widest text-warm-500 hidden sm:inline">数秘術</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                'text-[13px] tracking-wide transition-colors hover:text-warm-800',
                pathname === item.path ? 'text-warm-800 font-medium' : 'text-warm-500'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden text-warm-700 p-3 -mr-3 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-14 bg-black/10 md:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-14 left-0 right-0 w-full bg-white border-b border-warm-200/40 md:hidden z-50 shadow-sm"
            >
              <nav className="flex flex-col px-4 py-4 space-y-0.5">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-sm tracking-wide py-3.5 px-3 rounded-lg min-h-[44px] flex items-center transition-colors',
                      pathname === item.path
                        ? 'text-warm-800 font-medium bg-warm-50'
                        : 'text-warm-600 active:bg-warm-50'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-warm-200 py-12 sm:py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-10 md:mb-14">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-baseline gap-2 mb-5">
              <span className="font-serif text-2xl tracking-wider text-warm-800">isana</span>
              <span className="text-[10px] tracking-widest text-warm-600">数秘術</span>
            </Link>
            <p className="text-warm-700 text-sm leading-relaxed max-w-md">
              数秘術を通じて、あなたの誕生日に隠された「魂の設計図」をひも解き、
              しなやかで心地いい暮らしのヒントをお届けします。
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="text-warm-600 hover:text-warm-800 transition-colors p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-warm-600 hover:text-warm-800 transition-colors p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="メール"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-sm text-warm-800 mb-4 tracking-wide">ナビゲーション</h4>
            <ul className="space-y-3 text-sm text-warm-600">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="hover:text-warm-800 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-300/50 pt-6">
          <p className="text-[11px] text-warm-500 tracking-wide text-center">
            &copy; {new Date().getFullYear()} isana 数秘術. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="flex-1 w-full pt-14 sm:pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};
