---
title: user
id: "user"
sidebar-title: "user"
---

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