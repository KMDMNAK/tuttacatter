---
id: task-promise
title: 課題：promiseの使い方
---


:::danger 課題
promiseを使って非同期関数内で使えるsleep関数を実装せよ。  
イメージとしては、下記
:::


``` javascript
function sleep(second){
    // TODO 実装  
}

async function main(){  
    console.log("5秒間停止します。")  
    await sleep(5)  
    console.log("5秒立ちました")  
}
```