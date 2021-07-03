
## linengrok

LINE BOTをngrokで起動させたあとに、Webhook　URLを変更するの面倒ですよね？
一気にやってくれます。

## インストールの仕方

```
$ npm i -g linengrok
```

## 使い方

```
$ linengrok http <PORT> -t <アクセストークン>
```

以下のようになります。

```
$ linengrok http 3000 -t xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

これでngrokでサーバーを起動させると、そのURLにLINE BOTのエンドポイントが変わります。

`-p`オプションでパス指定ができます。デフォルトだと`/webhook`になります。

- パス指定の例

```
$ linengrok http 3000 -t xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -p /linebot
```

## 類似ツール

[linebotcli](https://www.npmjs.com/package/linebotcli)で同じようなことができます。

```
$ linebotcli ngrok ~~~
```

のコマンドにマージしていきます。