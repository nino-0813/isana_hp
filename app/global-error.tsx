'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('GlobalError:', error);
  }, [error]);

  return (
    <html lang="ja">
      <body style={{ margin: 0, fontFamily: 'sans-serif', background: '#faf8f5', color: '#1a1a1a', padding: 24 }}>
        <div style={{ maxWidth: 600 }}>
          <h1 style={{ fontSize: 20, marginBottom: 16 }}>エラーが発生しました</h1>
          <pre style={{ background: '#fff', padding: 16, borderRadius: 8, overflow: 'auto', fontSize: 12 }}>
            {error.message}
          </pre>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              marginTop: 16,
              padding: '10px 20px',
              background: '#5f5444',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
            }}
          >
            再試行
          </button>
        </div>
      </body>
    </html>
  );
}
