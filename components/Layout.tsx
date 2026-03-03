'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col items-start sm:items-center min-w-0">
          <span className="font-serif text-xl sm:text-2xl tracking-[0.15em] sm:tracking-[0.2em] text-gold truncate">LUMINOUS</span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase opacity-60 -mt-0.5 sm:-mt-1">Numerology</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                'text-sm tracking-widest uppercase transition-colors hover:text-gold',
                pathname === item.path ? 'text-gold font-medium' : 'text-ink/60'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden text-ink p-3 -mr-3 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-14 sm:top-20 left-0 right-0 w-full bg-white border-b border-gold/10 md:hidden shadow-lg"
          >
            <nav className="flex flex-col px-4 py-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-base tracking-widest uppercase py-4 px-3 rounded-lg active:bg-ivory/50 min-h-[48px] flex items-center',
                    pathname === item.path ? 'text-gold font-medium' : 'text-ink/70'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gold/10 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex flex-col mb-4 sm:mb-6">
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.15em] sm:tracking-[0.2em] text-gold">LUMINOUS</span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase opacity-60 -mt-1">Numerology</span>
          </Link>
          <p className="text-ink/60 max-w-sm leading-relaxed text-sm sm:text-base">
            数秘術を通じて、あなたの魂の設計図を読み解き、運命のパートナーとの出会いをサポートします。
            自分自身を深く知ることが、最良のパートナーシップへの第一歩です。
          </p>
        </div>

        <div>
          <h4 className="font-serif text-base sm:text-lg mb-4 sm:mb-6">Navigation</h4>
          <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm tracking-widest uppercase text-ink/60">
            <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base sm:text-lg mb-4 sm:mb-6">Connect</h4>
          <div className="flex space-x-5 sm:space-x-6">
            <a href="#" className="text-ink/60 hover:text-gold transition-colors p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Instagram"><Instagram size={22} /></a>
            <a href="#" className="text-ink/60 hover:text-gold transition-colors p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Facebook"><Facebook size={22} /></a>
            <a href="#" className="text-ink/60 hover:text-gold transition-colors p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="メール"><Mail size={22} /></a>
          </div>
          <p className="mt-6 sm:mt-8 text-[11px] sm:text-xs text-ink/40 tracking-widest">
            &copy; {new Date().getFullYear()} LUMINOUS NUMEROLOGY.<br />
            All Rights Reserved.
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
      <main className="flex-1 w-full pt-14 sm:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
