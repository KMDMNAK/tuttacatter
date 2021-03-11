# tuttacatter
つったかたー

## API reference

___

### **register user**
POST : /api/register

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
POST : /api/login

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
GET : /api/posts/{userId : string}

query : page

```
response body:{
  object:POST
}
```

___
### **follow and unfollow user**
PUT : /api/follow
PUT : /api/unfollow

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
PUT : /api/like
PUT : /api/unlike
```
request body :{
  postId : string
}
```

___
### **edit my post**
PATCH : /api/post/edit/{:postId}
```
request body {
  newBody : string
}
```

___

### **post**
POST : /api/post
```
request body :{
  post : string,
  postId? : string
}
```
___
### **delete my post**
DELETE /api/post
```
request body :{
  postId : string
}
```