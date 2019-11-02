"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("http"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _url = _interopRequireDefault(require("url"));

var _zlib = _interopRequireDefault(require("zlib"));

var _crypto = _interopRequireDefault(require("crypto"));

var _chalk = _interopRequireDefault(require("chalk"));

var _ejs = _interopRequireDefault(require("ejs"));

var _mime = _interopRequireDefault(require("mime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//第三方
let {
  readdir,
  stat
} = _fs.default.promises;

let template = _fs.default.readFileSync(_path.default.join(__dirname, '../template.html'), 'utf-8'); // console.log(template)


class Server {
  constructor(config) {
    // console.log(config.port)
    this.port = config.port;
    this.template = template;
  }

  async handleReuest(req, res) {
    let {
      pathname
    } = _url.default.parse(req.url, true); // console.log(pathname)
    // process.cwd()当前工作目录
    //浏览器把中文自动编码  我们必须手动解码 才可以认识 
    //例如你好.txt  浏览器自动编码 服务器不认识就读不出来


    pathname = decodeURIComponent(pathname);

    let filePath = _path.default.join(process.cwd(), pathname); // console.log(filePath)


    try {
      let statObj = await stat(filePath); // console.log(statObj)

      if (statObj.isDirectory()) {
        //是目录
        // console.log('目录')
        let dirs = await readdir(filePath); // console.log(dirs)  //读出目录下的文件

        let templateStr = _ejs.default.render(this.template, {
          dirs,
          path: pathname === '/' ? '' : pathname
        }); //设置响应头


        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        res.end(templateStr);
      } else {
        // console.log('文件')
        this.sendFile(filePath, req, res, statObj);
      }
    } catch (e) {
      this.sendError(e, req, res);
    }
  }

  gzip(filePath, req, res, statObj) {
    // console.log(req.headers)
    let encoding = req.headers['accept-encoding'];

    if (encoding) {
      if (encoding.match(/gzip/)) {
        //服务器给浏览器返回用什么格式进行压缩的
        res.setHeader('Content-Encoding', 'gzip');
        return _zlib.default.createGzip();
      } else if (encoding.match(/deflate/)) {
        res.setHeader('Content-Encoding', 'deflate');
        return _zlib.default.createDeflate();
      }

      return false;
    }

    return false;
  }

  cache(filePath, req, res, statObj) {
    let ifModifiedSince = req.headers['if-modified-since'];
    res.setHeader('Last-Modified', statObj.ctime.toGMTString());
    let lastModified = statObj.ctime.toGMTString(); // let ifNoneMatch = req.headers['if-none-match']

    let Etag = _crypto.default.createHash('md5').update(_fs.default.readFileSync(filePath)).digest('base64');

    console.log(Etag); // res.setHeader('Etag',Etag)
    // console.log(ifModifiedSince) //undefined 只有修改了他才会出现在请求头
    // console.log(lastModified) //Web,11 sep 2019 03:08:29 GMT 最后修改的时间
    // if(ifModifiedSince){
    //     //修改过  ifModifiedSince它就会出现在请求头
    //     if(ifModifiedSince !== lastModified){
    //         //最后修改的时间和上一次修改的时间不一致  就会走网络  不走缓存
    //         return false
    //     }else{
    //         //走缓存
    //         return true
    //     }
    // }
    // return  true
    // if(ifNoneMatch){
    //     if(ifNoneMatch !== Etag){
    //         //内容修改 走网络
    //         return false
    //     }else{
    //         //内容没有修改 走缓存
    //         return true
    //     }
    // }
    // return true
    // if(ifModifiedSince && ifNoneMatch){
    //     if(ifModifiedSince !== lastModified && ifNoneMatch !== Etag){
    //         return false
    //     }else{
    //         return true
    //     }
    // }
    // return true
  }

  sendFile(filePath, req, res, statObj) {
    //发送数据之前  进行缓存
    // console.log(statObj.ctime.toGMTString())
    //Web,11 sep 2019 03:08:29 GMT
    let cache = this.cache(filePath, req, res, statObj);

    if (cache) {
      //走缓存
      res.statusCode = 304;
      res.end();
    } else {} //走网络
    //发送数据之前先进行压缩


    let flag = this.gzip(filePath, req, res, statObj); //响应数据前 设置一个头

    res.setHeader('Content-Type', _mime.default.getType(filePath) + "; charset=utf-8");

    if (!flag) {
      _fs.default.createReadStream(filePath).pipe(res);
    } else {
      _fs.default.createReadStream(filePath).pipe(flag).pipe(res);
    }
  }

  sendError(e, req, res) {
    // console.log(e)
    res.statusCode = 404;
    res.end('Not Found');
  }

  start() {
    let server = _http.default.createServer(this.handleReuest.bind(this));

    server.listen(this.port, () => {
      console.log(`${_chalk.default.yellow('Starting up http-server, serving ')} ${_chalk.default.blue('./')}
${_chalk.default.yellow(' Available on:')} 
${_chalk.default.green('http://127.0.0.1:')} ${_chalk.default.green(this.port)}
Hit CTRL-C to stop the server`);
    });
  }

}

var _default = Server;
exports.default = _default;