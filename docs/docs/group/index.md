---
id: index
title: チーム開発の進めかた
---


ここでは、フロントエンドのチーム開発の進め方を検討する。  
Google Newsのビューワーを作ることを題材とする。
サーバーサイドのアプリケーションは[こちら](https://github.com/KMDMNAK/Google-News-API)  

### 要件
**要件**(満たすべきアプリの条件)については以下とする。

1.ユーザーの操作によって表示するニュースが変わる
2.表示するニュースの件数をユーザーが設定可能
3.表示するニュースの順番をユーザーが設定可能



### 1.機能の把握
まず、サーバーが提供する機能を把握する。  
上記アプリでは、google newsを指定のクエリーを使って特定の条件に合わせて（トピックやクエリー、地理情報）ニュース記事のリストを返却するAPIを提供している。
[参考記事](https://qiita.com/KMD/items/872d8f4eed5d6ebf5df1)
どのクエリーを利用しても返却されるニュースの形式は同じである。

### 2.機能を決める

機能は、UI(ユーザーの操作における機能)についてや
例として以下のような機能を挙げる。

- inputボックスがあり、入力した文字と関連するニュースを表示する。(要件1)
- トピックのボタン(世界、ビジネス)があり、押すと表示されるニュースが切り替わる。(要件1)
- 一覧のニュースを更新日について昇順降順を切り替えられる。(要件3)
- itemをドラッグして入れ替えられる。


### 3.デザインを決める(同時にやってもよいだろう)

https://www.figma.com/
上記のサイト等利用してワイヤーフレームを作成してみる。
CSSにexportできるならしてみる。


### 4.レポジトリを作成する

1. リーダーがGitレポジトリを作成
2. メンバーがそれぞれレポジトリをclone
3. タスクに合わせてブランチを作り、作業が終わったらmainブランチにpull requestを出す。リーダーがマージする。
