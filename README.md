# tuttacatter
つったかたー

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
  usersession
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
  status : boolean
}
```

___
### **view posts**
GET : /api/view/posts/{userId : string}

query : page

```
response body:{
  object:POST[]
}
```

___
### **view posts**
GET : /api/view/post/{postId}

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