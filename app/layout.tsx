import type { Metadata } from 'next';
import { Shippori_Mincho } from 'next/font/google';
import './globals.css';

const shipporiMincho = Shippori_Mincho({
  subsets: ['latin'],
  variable: '--font-shippori',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: '137数秘 - 自分らしさを求めて',
  description:
    '数秘術を通じて、あなたの誕生日に隠された「魂の設計図」をひも解き、しなやかで心地いい暮らしのヒントをお届けします。',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={shipporiMincho.variable} suppressHydrationWarning>
      <body className="min-h-screen w-full m-0 text-ink font-serif antialiased" suppressHydrationWarning>
        <div className="min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
