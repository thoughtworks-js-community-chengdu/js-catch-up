# Deno 初体验
满远荣 2019-06-20

## 简介
想必大家也听闻过NodeJs 之父Ryan Dahl 造的下一代 JS/TS runtime Deno,  这次 catch up 满远荣将会为大家带来Deno的基本介绍，环境，语法，HTTP服务等。

```ts
import { serve } from "https://deno.land/std@v0.5/http/server.ts";

async function main() {
  const body = new TextEncoder().encode("Hello World\n");
  for await (const req of serve(":8000")) {
    req.respond({ body });
  }
}

main();
```
## 照片

[查看PPT](https://drive.google.com/file/d/12gMdrQhbZfgBGgLuksc1bQM307zxt6nN/view?usp=sharing)
