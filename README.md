

# Blog 

Bootstrap里的模态框无法用ajax向后端提交数据
  > ~~改用 Form提交~~
***
## 微信浏览器中后退会加载缓存的问题  
>在head标签中加入
 
 
 >`<meta`   `http-equiv="Cache-Control"content="no-cache,  no-store, must-revalidate" />`     
 `<meta` `http-equiv="Pragma" content="no-cache" />`  
`<meta` `http-equiv="Expires" content="0" />`  
   
***
## Ef5.x框架对MySql的支持  
>根据网上的配置一步一步的安装  
 mysql-for-visualstudio-1.2.3  
 mysql-connector-net - 6.8.3  
 nuget 包管理器  
 nuget 控制台输入  
Install-Package EntityFramework -Version 6.0.0  
Install-Package EntityFramework.zh-Hans -Version 6.0.0    
_请注意6.0EF对Mysql支持度不够友好等待并寻找解决方案_  
***
## 发布.Net项目时的小问题  
> 记得在Web.Cofing文件中加入      
    `<customErrors mode="Off"></customErrors>`  
  并在IIS中修改项目对应的应用程序池中的高级设置里将  
  **启用32位应用程序**  更改为 **True**  
  因为可能项目引用了NuGet的某些32位的包，如果不开，可能会导致项目出现编译失败。