# mongodb数据库
mongodb  数据库   软件   数据库服务  对外提供数据服务的
node  创建一台web服务器 对我提供网页服务的

如果你在你电脑上装了mongodb，那么你的电脑就是一台数据库服务器
数据库包含多个集合，集合包含多个文档(对象)
在使用mongodb之前，必须有了解如下三个概念：
    database，数据库 [{},{},{}],[{},{},{}],[{},{},{}]
    dollection，集合  多个js对象 [{},{},{}]
    document，文档  js对象 {}
数据库：
    关系型   表  mysql  oricle db2 sqlserver ...
    非关系型  不是表  js对象   key:value  mongodb  redis  { }
    
使用mongod --dbpath=d:/mongo/data 启动服务

连接mongodb，再开一个cmd窗口，使用mongo命令连接mongodb
连接mongodb
mongodb的服务已经开启，现在就可以使用客户端去连接并使用了，

不能关掉刚才的那个窗口，否则服务就停止了。
再开一个cmd窗口，使用mongo命令连接mongodb

# 库相关的命令
###### show dbs
作用：查看当前数据库服务中有哪些数据库
###### use dbname
作用有两个：
	切换到指定的数据库，该数据库已经存在的情况下
	临时的创建一个数据库，并切换

Mongodb比较灵活，如果数据库已经存在了，使用use命令，就直接切换，
如果数据库不存在，就可以临时的创建该数据块，并切换。
###### db.dropDatebase（）

作用，删除当前数据库

在删除的时候，需要分两步：
	使用use切换指定数据库
	调用dropDatabase
例如 删除dj数据库
第一步 use dj
第二步 dj.dropDatebase()
# 集合相关命令
有如下三个：
	show collections
	db.createCollection（）
	db.集合名.drop（）
###### show collections（使用较多）
作用：查看当前数据库有哪些集合
###### db.createCollection（）
作用：显式的创建一个空集合。
例如创建c1集合
db.createCollection('c1')
针对c1这个集合，是空的，没有任何文档
###### db.集合名.drop（）
作用：用于删掉当前数据中指定的集合
# 文档相关命令
文档是mongodb中最小的单位，也是最基础的。包括如下四个操作：
	增加
	查询
	更新
	删除

可以简称为增删改查，英文的描述crud（create、read、update、delete）

这四个操作，都是作为集合对象的方法来实现的。
###### .find
作用，查询当前集合中的文档
db.c1.find()
###### insert
用于新增文档
其参数是文档，其实就是对象
db.c1.insert(title:'新闻1')
###### update
作用，更新指定条件的文档
其参数有两个，都是对象：
	第一个，条件
	第二个，如何更新
db.c1.updata({title:'新闻1'},{title:'新闻2'})
第一个是要修改那个值的条件 第二个是修改后的值

###### remove
作用，用于删除指定条件的文档
有一个参数，就是条件，使用对象的方式。
db.c1.remove({title:'新闻1'})
删除 c1集合的title为新闻1 的集合








