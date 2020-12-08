---
author: Markus
tags:
  - VSC插件
  - Eslint
---

# eslint 插件在新版 vscode（v1.5.\*）中【扩展 Eslint 无法格式化"xxx.js"】的问题

根据 eslint 插件作者在[该帖子](https://github.com/microsoft/vscode-eslint/issues/1086)中的回复，声称在 eslint（v2.1.3）版本中修复了该问题，但是好像后面的同学包括我自己都还是遇到了问题，在 issue 回复中有同学将 vscode 版本降到了 v.1.4.\*版本后，eslint 插件恢复了正常工作

我自己这边选择将格式化工具先转移到[prettier](https://prettier.io/)上，虽然有点小冲突，还是总比没有强:)

::: tip
用 vueCli 部署的模板项目可能会存在文本结尾符不同出现
**Delete `␍` prettier/prettier**的错误，需要手动调整下 vsc 中的结尾符合
在右下角菜单中

:::

```js
// 本人的默认配置，需要需要先配置了eslint-pulgin-prettier & eslint-config-prettier
// 也可以使用'plugin:prettier/recommended'
module.exports = {
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: "none",
  jsxSingleQuote: true,
  arrowParens: "avoid",
};
```
