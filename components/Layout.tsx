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
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col items-center">
          <span className="font-serif text-2xl tracking-[0.2em] text-gold">LUMINOUS</span>
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-60 -mt-1">Numerology</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-12">
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

        <button className="md:hidden text-ink" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-gold/10 md:hidden"
          >
            <nav className="flex flex-col p-8 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg tracking-widest uppercase',
                    pathname === item.path ? 'text-gold' : 'text-ink/60'
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
    <footer className="bg-white border-t border-gold/10 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex flex-col mb-6">
            <span className="font-serif text-3xl tracking-[0.2em] text-gold">LUMINOUS</span>
            <span className="text-xs tracking-[0.3em] uppercase opacity-60 -mt-1">Numerology</span>
          </Link>
          <p className="text-ink/60 max-w-sm leading-relaxed">
            数秘術を通じて、あなたの魂の設計図を読み解き、運命のパートナーとの出会いをサポートします。
            自分自身を深く知ることが、最良のパートナーシップへの第一歩です。
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Navigation</h4>
          <ul className="space-y-4 text-sm tracking-widest uppercase text-ink/60">
            <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Connect</h4>
          <div className="flex space-x-6">
            <a href="#" className="text-ink/60 hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-ink/60 hover:text-gold transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-ink/60 hover:text-gold transition-colors"><Mail size={20} /></a>
          </div>
          <p className="mt-8 text-xs text-ink/40 tracking-widest">
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
      <main className="flex-1 w-full pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
