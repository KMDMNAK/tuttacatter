---
title: authentication
id: "auth"
sidebar-title: "auth"
---

import { POST } from '../../src/components/api'

### **register user**

<POST url="/api/auth/register" />

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
