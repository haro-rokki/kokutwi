## Kokutwi
twitterで取得した告知ツイートを表示するWEBアプリ

## Getting Started

起動方法

```bash
yarn dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで確認。

## firebase準備

```bash
npm install -g firebase-tools

yarn add firebase
firebase init firestore
```

FirebaseのWEBコンソールのプロジェクトの概要からアプリを追加。
WEBアプリを選択し、firebaseConfigをenvファイルにコピーする。

### Firestore ルールのデプロイ

```bash
firebase deploy --only firestore:rules
```

### Firestore テスト用のエミュレータ準備

エミュレータをインストール
```bash
firebase setup:emulators:firestore
```

firebase.jsonにエミュレータの設定を書く
```
{
  "firestore": {
    "rules": "firestore.rules"
  },
  "emulators": {
    "firestore": {
      "port": "58080"
    }
  }
}
```

エミュレータの起動
```bash
firebase emulators:start --only firestore
```
