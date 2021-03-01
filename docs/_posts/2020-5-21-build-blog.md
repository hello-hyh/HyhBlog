---
author: Markus
tags:
  - Docker
---

### 构建 vuepress 站点（本站）

> 最近折腾了一阵子 Docker，觉得很方便，本站点也是基于 docker Image 构建，留个 Backup
> 本来想白嫖个镜像私仓，结果没找到，自己在服务器上搭了一个，准备实现下**DevOps**

```sh
  # 发布
  docker build -f Dockerfile.yml -t  serverIp:5000/markus_blog:latest .
  docker push serverIp:5000/markus_blog

  # 部署
  # 在服务端
  docker pull localhost:5000/markus_blog
  # 暂时还不是https的
  docker run -d -p 80:80 localhost:5000/markus_blog
```

tooltips: 理论上我应该写在 Npm Script 中了

### 2021-2-28

更新至 github action CI,根据 git push 触发构建
