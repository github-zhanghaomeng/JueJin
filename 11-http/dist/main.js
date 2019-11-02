"use strict";

var _commander = _interopRequireDefault(require("commander"));

var _server = _interopRequireDefault(require("./server.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const http = require('http')
_commander.default.option('-d, --debug', 'output extra debugging').option('-s, --small', 'small pizza size'); // console.log(process.argv)  //存入命令  -a -b -help


_commander.default.parse(process.argv); //默认带-help 输入-d  则不认识  配置后就认识了


let config = {
  port: 8080
};
let server = new _server.default(config);
server.start(); // console.log(commander)