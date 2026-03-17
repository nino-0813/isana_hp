import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '講座・ワークショップ 無料体験 | isana 数秘術',
  description:
    '数秘術をグループで体感できるワークショップを無料で開催。才能数・本質数・探究数を学び、参加者同士でシェアする少人数制。オンライン・対面から選べます。',
};

export default function WorkshopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
