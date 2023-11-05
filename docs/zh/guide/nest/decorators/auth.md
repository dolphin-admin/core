# 认证

应用默认启用全局守卫，对所有接口进行认证，如果需要对某些接口进行特殊处理，可以使用 `@Auth` 或 `@SkipAuth`。

## @Auth

与 Auth 的守卫配合，定义当前请求需要认证。  
由于全局守卫默认是启用的，通常可以省略此装饰器。

```typescript {1}
@Auth()
@Get('no-need-auth')
needAuth(){}
```

Controller 都不需要认证，仅某个路由需要认证。

```typescript {7}
@Controller()
@SkipAuth()
class UserController {
  @Get('no-need-auth')
  noNeedAuth() {} // 不需要认证

  @Auth()
  @Get('need-auth')
  needAuth() {} // 需要认证
}
```

## @SkipAuth

同 @Auth, 但是不需要认证。

```typescript {3}
@Controller()
class UserController {
  @SkipAuth()
  @Get('no-need-auth')
  noNeedAuth() {} // 不需要认证

  @Get('need-auth')
  needAuth() {} // 需要认证
}
```
