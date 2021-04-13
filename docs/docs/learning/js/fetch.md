---
id: fetch
title: fetch api
---

:::note http通信
fetch apiはhttp通信を実現するAPIです。  
httpについてある程度理解しておいたほうがよいでしょう。
下記リンクなどを参考にしてみてください。

https://qiita.com/belion_freee/items/5ad1c9c0eefebea0957d
https://wa3.i-3-i.info/word167.html

:::

**下記リンクを参考に**
https://jsprimer.net/use-case/ajaxapp/http/
https://developer.mozilla.org/ja/docs/Web/API/Fetch_API


### fetch apiについて
サーバーと通信する際に有用なAPIとして、fetch APIが用意されています。  
かつてはXMLHttpRequestというAPIがよく利用されていましたが、現在ではこちらが主流です。  

:::note
Fetch APIはブラウザ版のJavaScriptのみ対応しており、Node.jsは**対応していない!**  
Node.jsにおいてfetch apiを利用したい場合、外部ライブラリのNode-Fetchを利用したり、その他web clientライブラリ(axiosやisomorphic-unfetchなど)が必要になるので注意
:::

### check point
- headerの設定
- request bodyの設定
- 非同期処理としての処理
- responseからjson,textの取得