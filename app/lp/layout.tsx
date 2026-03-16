/**
 * 広告用LP専用レイアウト
 * メインサイトのヘッダー・フッターは表示しません。
 * このフォルダ配下のページは /lp でアクセスされ、ナビには出しません。
 */
export default function LpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
