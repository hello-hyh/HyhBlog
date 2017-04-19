


#Hyh Blog 

<dl>
  <dt>Bootstrap里的模态框无法用ajax向后端提交数据</dt>
  <dd> 改用 Form提交</dd>
</dl>

## 微信浏览器中后退会加载缓存的问题  
 在head标签中加入  
 
   `<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />`  
   
   `<meta http-equiv="Pragma" content="no-cache" />`  
   
   `<meta http-equiv="Expires" content="0" />`  
   
## Ef6框架对MySql的支持  
 根据网上的配置一步一步的安装  
 mysql-for-visualstudio-1.2.3 

 mysql-connector-net - 6.8.3

 nuget 包管理器

 

 nuget 控制台输入

Install-Package EntityFramework -Version 6.0.0
Install-Package EntityFramework.zh-Hans -Version 6.0.0
Install-Package MySql.Data.Entity.EF6
 
 再在Web.config里配置以下代码  
 
 `
 <entityFramework codeConfigurationType="MySql.Data.Entity.MySqlEFConfiguration, MySql.Data.Entity.EF6">
<defaultConnectionFactory type="System.Data.Entity.Infrastructure.SqlConnectionFactory, EntityFramework"/>
<providers>
<provider invariantName="MySql.Data.MySqlClient" type="MySql.Data.MySqlClient.MySqlProviderServices, MySql.Data.Entity.EF6" />
<provider invariantName="System.Data.SqlClient" type="System.Data.Entity.SqlServer.SqlProviderServices, EntityFramework.SqlServer" />
</providers>
</entityFramework>
`  
