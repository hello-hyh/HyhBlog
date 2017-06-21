

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
  ***
## 博客园上发现的一个WebApi插件 Swashbuckle  
>  主要功能是可以在WebApi发布的适合可以看到方法的详情，注释等，
[博客园链接](http://www.cnblogs.com/daxnet/p/6181366.html)
以防不时只需。  
***
## 微信公众号红包开发心得  
  > 给公司开发公众号红包的时候遇到了几个小问题
  1. 在安装授权（支付）证书时，**最好先将下载下来的证书拷贝到网站或者项目目录下再双击安装**，在本机安装时（win10系统）会让你选择本账户或本计算机，建议安装在本账户，在服务器（winServer 2008）上没有此选项  
  2. 不知为何我在本机调试时使用了 
  ``` C#  
    // 这样的才通过微信的证书校验
    X509Certificate cer = new X509Certificate("证书地址","证书密码");
  ```  
  ``` C#
    // 而我在服务器上必须使用才通过微信验证
    X509Certificate2 cer = new X509Certificate2("证书地址","证书密码");
    // 原因不详，但纪录下来，如果有高手看到这段并知道原因，可以给我Issue，感谢。
  ``` 
  3. 注意证书地址。
