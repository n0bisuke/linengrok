
## linengrok

LINE BOTをngrokで起動させたあとに、Webhook　URLを変更するの面倒ですよね？
一気にやってくれます。

## インストールの仕方

```
$ npm i -g linengrok
```

## 使い方

```
$ linengrok http -t <アクセストークン> -h <ポート> -p <パス>
```

以下のようになります。

```
$ linengrok http -t xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -h 5000 -p /webhook
```

これでngrokでサーバーを起動させると、そのURLにLINE BOTのエンドポイントが変わります。