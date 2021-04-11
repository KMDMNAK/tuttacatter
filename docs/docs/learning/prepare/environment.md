---
title: 環境構築
id: environment
---

## 要インストール

|ツール名| 説明 |
| --- |--- |
| [Vscode](https://code.visualstudio.com/download)      | Microsoft製テキストエディタ |
| [Nodejs](https://nodejs.org/en/download/)      |    サーバーサイドのJavaScriptランタイム環境    |
| [Docker](https://www.docker.com/products/docker-desktop)   | コンテナ仮想化プラットフォーム |
| [Git](https://git-scm.com/downloads) | 現在最も使われているソースバージョンコントロールシステム |
|[WSL](https://docs.microsoft.com/ja-jp/windows/wsl/install-win10)| windows用linux環境  |

## 確認

1. ```[winキー] + Rキー```から```cmd```と入力してコンソールを開く
2. 下記コマンドを順に実行して正常に動作すればok

``` bash
code -v
node -v
docker -v

// 環境に入ることができればok
wsl 
```

:::note
コマンドを実行したときに、  
```操作可能なプログラムまたはバッチ ファイルとして認識されていません。```  
などが表示される場合、パスが適切に設定されていない可能性がある。  
windowsでは、環境変数の```PATH```に登録されたフォルダーやファイルから実行可能ファイルを検索する。
<br/>

[環境変数設定の参考記事](https://www.atmarkit.co.jp/ait/articles/1805/11/news035.html)
:::