# 数据转换

## @Trim

用于去除 Dto 中字符串属性的前后空格。

```typescript {2}
class UserDto {
  @Trim()
  username: string
}
```
