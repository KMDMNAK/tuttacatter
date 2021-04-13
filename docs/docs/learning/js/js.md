---
id: js
title: JavaScriptとは
---

JavaScriptとは、プロトタイプベースのプログラミング言語の一つである。  
当初はウェブページの中に埋め込み、動的なウェブコンテンツの表現を目的として利用され始めた。  
現在はNodejsなどの誕生から、サーバーサイドでの利用も進んでいる。  

現在のウェブコンテンツにおいて、JavaScriptを使わないことはほぼないと思われる。  
現状webページで動的なコンテンツを作成したいとき、JavaScriptは必須になる。  


### クライアントサイド

**JavaScriptはクライアントサイドで実行されるものである**（サーバーから受け取ったJavaScriptコードをブラウザが機械語に翻訳、クライアントのリソースを使って処理が実行されるということ。）  
そのため、クライアントのブラウザのバージョン対応や、OSの違いを想定したコードを書く必要が出てくる場面もある。  

<br/>

例えば、JavaScriptが提供する[Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)というインターフェースを見てみる。  
ブラウザごとの対応状況を見てみると、ChromeやFirefoxでは対応している一方、Internet ExplorerやSafariでは未対応なことがわかる。  

<br />
どこまで想定する必要があるのかはケースバイケースであろうが、クライントの環境によって動作が変わることがあることを考慮する必要があるだろう。  

## 言語としてのJavaScript

まずはプログラミング言語共通のif文やfor文などの使い方を見てみましょう。  
下記ページを簡単に参照して、言語としてのjavascriptの文法を簡単に参照してみてください。  

https://jsprimer.net/


### check points
- for文、if文、while文
- 文字列に対する標準メソッド(ex. split , replace など)
- 配列に対する標準メソッド(ex. **map**,**filter**,reduceなど)
- 型のキャスト(ex. 文字列から数値、数値から論理値、undefined,nullから論理値など)