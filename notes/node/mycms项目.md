# mycms 思路
##### 大体

    npm i koa-koa-generator -g
    koa2 +项目名字
    安装npm i koa-router
    在app.js中引入 const router = require('koa-router')()
    启动路由
![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567065974425.png)
1.首先分为
前台入口api.js 后台路口admin.js 前台路口index.js

![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567057656500.png)
![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567057623704.png)
![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567057683626.png)

2.可以把后台的路由都放在admin文件夹中，后台又分为
首页面index.js 登录页面login.js 管理员页面manage.js

![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567057177999.png)
![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567057208237.png)
![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567057548293.png)
![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567057510448.png)

3.管理员页面又分为管理员列表 /  添加管理员 /add 编辑管理员 /edit

![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567057398588.png)

##### 渲染页面

    安装npm i koa-static 设置静态资源
    在app.js中引入 const static = require('koa-static')
    
![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567058408849.png)

    安装 npm i koa-art-template
    npm i art-template
    在app.js中引入 const render = require('koa-art-template')
![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567058578547.png)
1.渲染后台首页面

![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567058781496.png)
2.渲染登录页面

![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567059058471.png)
3.渲染管理员首页面、添加管理员页面、编辑管理员列表

![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567059339603.png)
##### 实现登录

    安装 npm i mongodb@3.0.4
    在自己创建的项目中建一个model文件夹 里面有一个db.js 和config.js

![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567064310707.png)
![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567064431249.png)

    在routes/admin/login.js引入 
    const DB = require('../../mongo/db.js')
1.只有登录成功后才可以进入admin
（1）在admin.js中进行判断，登录成功后会把输入的用户名和密码保存在ctx.session.userinfo中，判断userinfo中是否有内容，有的话就放行，没有的话就跳转到登陆页面

![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567066437951.png)

（2）在login.html中 提交表单提交到routes/admin/login/doLogin进行验证

![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567063683545.png)
    
    安装 npm i koa-bodyparser
    在app.js中进行引入 const bodyParser = require('koa-bodyparer')
    使用 app.use(bodyParser())
    
    安装 npm i koa-session
    在app.js中引入 const session = require('koa-session')
![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567066063333.png)
    
（3）在routes/admin/login.js进行获取前台输入的用户名和密码

![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567064809712.png)

但是你输入用户名和密码后，点击提交按钮，本应该进行到routes/admin/login.js中的/doLogin进行验证，但是它还是跳转到login页面了，因为在admin.js中只有访问login时会放行，其他的都会跳转到login页面
所以应该在admin.js进行修改

![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567067455805.png)



##### 验证码
（1）在routes/admin/login.js中

![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567067966224.png)
（2）在views/admin/login.html中找到验证码的src

![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567068072578.png)
这个只是在admin/login/code下才可以出现一个验证码,在登录页面没有出现，需要在admin.js中进行修改

![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567068221709.png)
这个只是生成了一个验证码，只有刷新了才可以更改,应该实现点击一下就更改

![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567248048424.png)

首先验证码一下验证码是否正确，正确的话再验证用户名密码和确认密码(因为之前已经把验证码存入到ctx.state.session中，所以把输入的验证码和session里面的值进行对比)

![enter description here](https://markdown.xiaoshujiang.com/img/spinner.gif "[[[1567250433598]]]" )
但是即使验证码和用户信息都输入正确后，还是登陆不上去
需要对登录时写的密码加密后和数据库的密码一致时才可以登录上去

安装md5 npm i md5
因为这个数据需要和数据库打交道，所以可以放到model下，建一个tools.js

![enter description here](https://markdown.xiaoshujiang.com/img/spinner.gif "[[[1567251351689]]]" )

![enter description here](https://markdown.xiaoshujiang.com/img/spinner.gif "[[[1567251487453]]]" )

##### 把数据库里的数据渲染到页面中
###### 管理员列表页面
添加、修改时不用把数据渲染到页面，但是需要进行判断
在routes/admin/manage.js

![enter description here](https://markdown.xiaoshujiang.com/img/spinner.gif "[[[1567253763185]]]" )

在views/admin/manage/list.html
![enter description here](https://markdown.xiaoshujiang.com/img/spinner.gif "[[[1567254024952]]]" )

##### 添加管理员页面
![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567254628978.png)
![enter description here](https://markdown.xiaoshujiang.com/img/spinner.gif "[[[1567254805031]]]" )

##### 编辑管理员页面
需要把之前的数据渲染到页面
在views/admin/manage/edit.html
![enter description here](https://markdown.xiaoshujiang.com/img/spinner.gif "[[[1567256227439]]]" )
![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567256436629.png)

##### 分类列表页面

![enter description here](https://markdown.xiaoshujiang.com/img/spinner.gif "[[[1567301560941]]]" )

####### 分类页面的数据需要把子元素放在父元素的list属性中
当一个元素的id值等于另一个元素的pid值，则后面的是前面的子元素

![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567301053971.png)

时间不对

![enter description here](https://markdown.xiaoshujiang.com/img/spinner.gif "[[[1567252107287]]]" )

安装npm i silly-datetime
需要在app.js中设置渲染时，在app.js中引入
const sd = require('silly-datetime')
![enter description here](https://markdown.xiaoshujiang.com/img/spinner.gif "[[[1567252685184]]]" )

##### 设置删除方法
删除按钮
![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567257220831.png)

![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567257125137.png)

![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567257196962.png)

##### 改变状态的公共方法(接口)
在状态那个按钮中，设置一个点击事件，在public/basic.js中实现这个方法，在这个方法中调用admin/changeStatus 并且把页面的图片的样式改变(对号变成错号，错号变成对号),在这个接口中改变的是这个状态在数据库中对应的值，并且把改变后的值更新到数据库中
![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/1567259231768.png)

![enter description here](https://markdown.xiaoshujiang.com/img/spinner.gif "[[[1567259669202]]]" )

![enter description here](https://markdown.xiaoshujiang.com/img/spinner.gif "[[[1567259914951]]]" )

![enter description here](https://markdown.xiaoshujiang.com/img/spinner.gif "[[[1567260083779]]]" )

![enter description here](https://markdown.xiaoshujiang.com/img/spinner.gif "[[[1567260365923]]]" )

##### 当点击左边导航栏的时候出现对应的页面

只需要在views/public/nav_left.html中修改

![enter description here](https://markdown.xiaoshujiang.com/img/spinner.gif "[[[1567261313991]]]" )

