import type { Metadata } from 'next';
import { Noto_Sans_JP, Noto_Serif_JP, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  weight: ['300', '400', '500', '700'],
});

const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
  variable: '--font-noto-serif',
  weight: ['300', '400', '500', '700'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Luminous Numerology - 運命のパートナーと出会う数秘術',
  description:
    '数秘術を通じて、あなただけの運命のパートナーを見つけるための高級感あふれるプラットフォーム。セッション、ブログ、そしてあなたの人生を輝かせるコンテンツを提供します。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontClass = [notoSans.variable, notoSerif.variable, cormorant.variable].join(' ');

  return (
    <html lang="ja" className={fontClass} suppressHydrationWarning>
      <body className={`${fontClass} min-h-screen w-full m-0 bg-paper text-ink font-sans antialiased`} suppressHydrationWarning>
        <div className="min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
