目前 票数最高的 编写一个babel 插件,  如果不知道怎么上手, 推荐阅读

[ Babel 插件手册 ](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)

在这里 我们列出几个备选的babel 插件练习 (建议有对应的单元测试):

[AST 树在线生成](https://astexplorer.net/)


== 转成 ===

```js
 // from
 const isEqual = 1 == 1
 if(a == b){...}
 a == b ? 1 : 2

 // to
 const isEqual = 1 === 1
 if(a === b){...}
 a === b ? 1 : 2
```


预计算表达式的值 (只用考虑 加减乘除)

```js
// from
const num = 1 + 1
const num = 1 - 1
const num = 1 * 3
const num = 4 / 2

// to
const num = 2
const num = 0
const num = 3
const num = 2
```


数组的 lastIndex

```js
const arr = [1,2,3]

// from
arr[-1]

// to
arr[arr.length - 1]
```

模板字符串的转换

```js
 const name = "ljk"

 // from
 const desc = `my name is ${name}`

 // to
 const desc = 'my name is ' + name
```

