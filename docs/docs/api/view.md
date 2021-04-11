---
title: view
id: "view"
sidebar-title: "view"
---

___

### **view timeline**
GET : /api/view/timeline

アプリ全体で新しい投稿10件をリストで取得


### **view posts**
GET : /api/view/posts/{userId : string}

特定のユーザーの投稿をリストで取得。

query : page

```
response body:{
  object:POST[]
}
```

___
### **view post**
GET : /api/view/post/{postId}

特定の投稿を取得。

```
response body:{
  object:POST
}
```