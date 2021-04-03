# tuttacatter
つったかたー


# github pages
https://github.io/kmdmnak/tuttacatter

## API reference

___

### **register user**
POST : /api/auth/register

```
request body : {
  email : string,
  username : string,
  password : string
}
```

```
response body:{
  token : string
}
```

___

### **login user**
POST : /api/auth/login

```
request body :{
  username : string,
  password : string
}
```
```
response body:{
  token : string
}
```

___
### **logout user**

POST : /api/auth/logout

**要認証**

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

## user以下は認証必要
___
### **follow and unfollow user**
PUT : /api/user/follow
PUT : /api/user/unfollow

```
request body :{
  userId : string
}
```

___

### **follow list**
GET : /api/user/follow

___
### **like and unlike post**
PUT : /api/user/like
PUT : /api/user/unlike
```
request body :{
  postId : string
}
```

___

### **post mypost**
POST : /api/user/post
```
request body :{
  post : string,
  postId? : string
}
```
___
### **delete my post**
DELETE /api/user/post
```
request body :{
  postId : string
}
```

___
### **edit my post**
PATCH : /api/user/post/edit/{:postId}
```
request body {
  newBody : string
}
```

___
### **delete my account**
DELETE :/api/user