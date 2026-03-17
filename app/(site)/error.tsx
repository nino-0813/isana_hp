'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Site error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-xl font-serif text-warm-800 mb-2">表示中にエラーが発生しました</h1>
      <p className="text-warm-600 text-sm mb-6 max-w-md">{error.message}</p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="py-2.5 px-5 rounded-full bg-warm-800 text-white text-sm hover:bg-warm-700"
        >
          再試行
        </button>
        <Link
          href="/"
          className="py-2.5 px-5 rounded-full border border-warm-300 text-warm-700 text-sm hover:bg-warm-50"
        >
          ホームへ
        </Link>
      </div>
    </div>
  );
}
