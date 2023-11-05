# 用户

## @User

用于获取当前请求执行上下文中的用户信息。

```typescript {2}
@Get()
getUserInfo(@User() user: JWTPayload){
  return user
}
```

## @User('sub')

@User 也支持传入属性参数。如下所示，获取用户 ID。

```typescript {2}
@Get()
getUserId(@User('sub') id: number){
  return id
}
```
