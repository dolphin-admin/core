# 响应类型

## BaseResponseVo

```typescript
export interface BaseResponseVo<T = any> {
  code?: string
  message?: string
  data?: T
}
```
