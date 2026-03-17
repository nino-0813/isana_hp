# お問い合わせをGoogleスプレッドシートに保存する設定

お問い合わせフォームの送信内容を、Googleスプレッドシートに自動で1行ずつ追加する設定手順です。

## 1. Googleスプレッドシートを用意する

1. [Google スプレッドシート](https://sheets.google.com) で新しいスプレッドシートを作成する
2. 1行目に次の見出しを入力する（A1〜E1）:
   - **A1**: `日時`
   - **B1**: `お名前`
   - **C1**: `メールアドレス`
   - **D1**: `お問い合わせ内容`
   - **E1**: `メッセージ`

## 2. Google Apps Script を追加する

1. スプレッドシートのメニューで **拡張機能** → **Apps Script** を開く
2. 表示されたエディタの `Code.gs` を、次のコードに **すべて置き換える**:

```javascript
// ブラウザでURLを開いたとき（GET）の応答（エラーを出さないため）
function doGet() {
  return ContentService.createTextOutput(JSON.stringify({ message: 'POST only. Use the contact form.' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// お問い合わせフォームから送信されたとき（POST）
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const body = e.postData ? JSON.parse(e.postData.contents) : {};
    const row = [
      body.timestamp || new Date().toISOString(),
      body.name || '',
      body.email || '',
      body.subject || '',
      body.message || ''
    ];
    sheet.appendRow(row);
    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. **保存**（Ctrl+S / Cmd+S）する
4. プロジェクト名（例: `isana-contact`）を付けて保存

## 3. Web アプリとしてデプロイする

1. エディタ右上の **デプロイ** → **新しいデプロイ** をクリック
2. 種類の横の歯車アイコン → **ウェブアプリ** を選択
3. 次のように設定する:
   - **説明**: 任意（例: お問い合わせ受信）
   - **次のユーザーとして実行**: 自分
   - **アクセスできるユーザー**: **全員**（重要）
4. **デプロイ** をクリック
5. 表示された **ウェブアプリのURL** をコピーする  
   （`https://script.google.com/macros/s/xxxx.../exec` の形式）

## 4. 環境変数を設定する

1. プロジェクトの `.env.local` を開く（なければ `.env.example` をコピーして作成）
2. 次の1行を追加し、`xxxx...` の部分をコピーしたURLに置き換える:

```
GOOGLE_SCRIPT_URL="https://script.google.com/macros/s/ここにURLを貼り付け/exec"
```

3. 開発サーバーを再起動する（`npm run dev` を一度止めて再度実行）

## 5. 動作確認

1. サイトのお問い合わせページで、テスト用にお名前・メール・メッセージを入力して送信する
2. Googleスプレッドシートを開き、2行目に日時・お名前・メールアドレス・お問い合わせ内容・メッセージが1行で追加されていれば成功です

---

**注意**

- 本番（Vercel など）にデプロイする場合は、その環境の「環境変数」に `GOOGLE_SCRIPT_URL` を同じ内容で設定してください。
- スプレッドシートのURLは他人に共有しないでください。ウェブアプリのURLは `.env.local` や環境変数にのみ保存し、リポジトリにコミットしないでください。
