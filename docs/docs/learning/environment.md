---
title: 環境構築
id: environment
---

## インストール

| | |
| --- |--- |
| [Vscode](https://code.visualstudio.com/download)      | Microsoft製テキストエディタ |
| [Nodejs](https://nodejs.org/en/download/)      |    サーバーサイドのJavaScriptランタイム環境    |
| [Docker](https://www.docker.com/products/docker-desktop)   | コンテナ仮想化プラットフォーム |
|[WSL](https://docs.microsoft.com/ja-jp/windows/wsl/install-win10)| windows用linux環境  |

## 確認

1. [winキー] + Rキーからcmdと入力してコンソールを開く
2. 下記コマンドを順に実行して正常に動作すればok

``` bash
code -v
node -v
docker -v

// 環境に入ることができればok
wsl 
```