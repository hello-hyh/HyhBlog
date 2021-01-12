---
author: Markus
tags:
  - Rust
---

### Rust 模块分包问题

**_rust 这个文档真是不友好啊。。。_**  
最近在学习 rust，跟着官方文档学习了下，感觉有很多片段性的内容，有时候不联系上下文很难对上，学习到[《separating-modules-into-different-files》](https://doc.rust-lang.org/book/ch07-05-separating-modules-into-different-files.html)这章时，老是有

```rust
no `mod1` in the rootrustc(E0432)
```

这个报错，搜了下 so 也没太搞懂，仔细看了下文档  
原来是需要在**引用 mod 的文件**上**声明对应 mod 的名称**，并且该 mod 需要有**同名文件**,这样才能在**引用 mod 的文件**中 use 对应的 mod，从 crate||相对路径中都可以，子模块需要在 src 下**建一个父 mod 同名的文件夹并在该目录下建子 mod 同名的文件**,并在父 mod 同名文件中申明子 mod。。。  
属实有点麻烦  
原话如下  
> Using a semicolon after mod front_of_house rather than using a block tells Rust to load the contents of the module from another file with the same name as the module. To continue with our example and extract the hosting module to its own file as well, we change src/front_of_house.rs to contain only the declaration of the hosting module:

例子： 
```c
src/ //文件结构
  main.rs
  mod1.rs
  mod1/
    mod1_child.rs
```

main.rs 中引用 mod1 模块

```rust
use std::io;
mod mod1; // 在此申明main.rs中需要使用mod1这个模块
use crate::mod1::mod1_child; // 从root引用mod1和旗下的子模块
fn main() {
  mod1_child::add_to_waitlist();
}
/// 其他代码
```

mod1.rs

```rust
pub mod mod1_child; // 在此申明我mod1模块有一个子模块（mod1_child)
```

mod1/mod1_child.rs中申明子模块中对应的方法和实现等

```rust
pub fn add_to_waitlist() {}
```  
