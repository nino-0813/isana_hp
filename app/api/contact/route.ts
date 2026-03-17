import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export async function POST(request: Request) {
  if (!GOOGLE_SCRIPT_URL) {
    console.error('GOOGLE_SCRIPT_URL is not set');
    return NextResponse.json(
      { error: 'お問い合わせの送信先が設定されていません。' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, subject, message } = body as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'お名前・メールアドレス・メッセージは必須です。' },
        { status: 400 }
      );
    }

    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: String(name).trim(),
        email: String(email).trim(),
        subject: subject ? String(subject).trim() : '',
        message: String(message).trim(),
        timestamp: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Google Apps Script error:', res.status, text);
      return NextResponse.json(
        { error: '送信に失敗しました。しばらく経ってからお試しください。' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: '送信に失敗しました。しばらく経ってからお試しください。' },
      { status: 500 }
    );
  }
}
