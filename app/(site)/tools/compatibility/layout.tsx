import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '相性を読み解く｜数秘術で他者理解 | isana 数秘術',
  description:
    '数秘術で相性を見る意味と活かし方。自分と相手の数字の違いを認め、人間関係を豊かにするヒントをわかりやすく解説します。',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
