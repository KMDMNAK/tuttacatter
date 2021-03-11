# tuttacatter
つったかたー

## API reference

### register user
POST : /api/register

request body : {
  email : string,
  username : string,
  password : string
}

response body:{
  usersession
}

### login user
POST : /api/login

request body :{
  username : string,
  password : string
}

response body:{
  usersession
}

### view posts
GET : /api/posts/{userId : string}

query : page

response body:{
  object:POST
}

### follow user
POST : /api/follow

request body :{
  userId : string
}

### like post
POST : /api/like

request body :{
  postId : string
}

### reply post
POST : /api/post

request body :{
  postId : string,
  comment : string
}

### edit my post
POST : /api/edit/{:postId}
request body {
  newPost : string
}

