# Vue + ts 开发时所需的 shims

因为 ts 不识别.vue 文件，所以在.ts 文件中可能会出现`Can't find module "xx.vue"`
所以需要一个 shims 文件来引导 ts 识别

## 针对 vue2.x + ts

```ts
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
```

## 针对 vue2.x + composition-api + ts

```ts
declare module "*.vue" {
  import { Component } from "vue";
  const component: Component;
  export default component;
}
```

## vue3 + ts 自带了
```ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

```