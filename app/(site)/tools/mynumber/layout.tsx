import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'マイナンバーを知る｜才能数・本質数・探究数 | isana 数秘術',
  description:
    '数秘術の「マイナンバー」とは。才能数・本質数・探究数の3つの数字の意味と、生年月日からの求め方をわかりやすく解説します。',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
