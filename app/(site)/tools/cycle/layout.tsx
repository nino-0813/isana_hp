import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '9年サイクル｜人生の方向性・パーソナルイヤー | isana 数秘術',
  description:
    '数秘術の「9年サイクル」とパーソナルイヤーとは。今の年がどんなテーマの年か知り、自然体で過ごすヒントをわかりやすく解説します。',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
