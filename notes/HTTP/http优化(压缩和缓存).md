
# http优化
1.压缩
2.缓存
### 压缩
压缩就是通过转化流
zlib就是进行压缩的
使用 import zlib from 'zlib'
zlib.createGzip()


### 缓存
##### 强制缓存
首页面是不会缓存的
在发送数据时  响应一个头 
不会向服务器发送请求，直接从缓存中读取资源，在chrome控制台的network选项中可以看到该请求返回200的状态码;
###### cache-control
服务器告诉浏览器20秒之内不要再访问我
    
    res.setHeader('Cache-Control'，'max-age=20')
    res.setHeader('Cache-Control'，'no-cache')
    //请求网络  缓存
    res.setHeader('Cache-Control'，'no-store')
    //请求网络 不缓存
###### Expires 
它和cache-controll功能相同 就是后面设置时间不一样

    res.setHeader('Expries',
    new Date(Date.now()+1000*20).toGMTString())
##### 协商缓存(对比缓存)
if-Modified-Since在req头 Last-Modified 在req头 它们两一一对应
1.没有修改页面直接访问时 第一次没有出现if-Modified-Since 走的是网络 状态码是200 服务器给浏览器返回Last-Modified 刷新页面后出现if-Modified-Since 这时它和Last-Modified的值一致 走的是缓存 状态码是304
2.修改页面后访问时 出现if-Modified-Since(是上一次修改时的时间) 也出现Last-Modified(最后一次修改的时间) 这时两个的值不一致
走的是网络 200 刷新页面后两个的值一致 走的是缓存 304
3.两者的共同点是，都是从客户端缓存中读取资源；区别是强缓存不会发请求，协商缓存会发请求。
###### if-Modified-Since
在请求头 第一次访问这个页面时 请求头中没有这个参数  刷新页面后就会出现这个参数 如果没有修改页面  则会返回304状态码 从缓存中获取数据 
###### Last-Modified
在响应头 代表的是最后一次修改这个页面的时间
    
    let statObj = stat(filePath)
    let ifModifiedSince = req.headers['if-Modified-Since']
    let LastModified = statObj.ctime.toGMTString()
    if(ifModifiedSince){
        if(ifModifiedSince !== LastModified){
        //走网络
            return false
        }else{
        //走缓存
            return true
        }
    }
    return false
###### if-Modified-Since和Last-Modified缓存的缺点
1.当内容修改后 删除恢复以前的状态时 不需要走网络 但是它让走的是网络
2.当在极短的时间修改内容时 它只能精确到秒 不能察觉到修改内容了 所以走的缓存 应该走网络

##### ETag
Etag 在res头 if-None-Match 在req头 它们俩一一对应
该字段存储的是文件的特殊标识(一般都是hash生成的)，服务器存储着文件的Etag字段，可以在与每次客户端传送If-no-match的字段进行比较。
如果相等，则表示未修改，响应304；反之，则表示已修改，响应200状态码，返回数据。

它使用的是摘要算法
规则 
1.摘要后的长度一致
2.对于内容不同进行摘要时  摘要后的内容肯定不一致
3.使用摘要后的内容不能返回摘要前的内容(不可逆) 但是对于一些简单的内容还是可以返回

web服务器响应请求时，告诉浏览器当前资源在服务器的唯一标识（生成规则由服务器决定）。

If-None-Match：当资源过期时（使用Cache-Control标识的max-age），发现资源具有Etage声明，则再次向web服务器请求时带上头If-None-Match （Etag的值）。web服务器收到请求后发现有头If-None-Match 则与被请求资源的相应校验串进行比对，决定是否命中协商缓存；


## 浏览器缓存过程

1.浏览器第一次加载资源，服务器返回200，浏览器将资源文件从服务器上请求下载下来，并把response header及该请求的返回时间一并缓存；

2.下一次加载资源时，先比较当前时间和上一次返回200时的时间差，如果没有超过cache-control设置的max-age，则没有过期，命中强缓存，不发请求直接从本地缓存读取该文件（如果浏览器不支持HTTP1.1，则用expires判断是否过期）；如果时间过期，则向服务器发送header带有If-None-Match和If-Modified-Since的请求

3.服务器收到请求后，优先根据Etag的值判断被请求的文件有没有做修改，Etag值一致则没有修改，命中协商缓存，返回304；如果不一致则有改动，直接返回新的资源文件带上新的Etag值并返回200；；

4.如果服务器收到的请求没有Etag值，则将If-Modified-Since和被请求文件的最后修改时间做比对，一致则命中协商缓存，返回304；不一致则返回新的last-modified和文件并返回200；；

