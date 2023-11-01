# 响应类型

## BaseResponseVo

```ts
export interface BaseResponseVo<T = any> {
  code?: string
  message?: string
  data?: T
}
```
