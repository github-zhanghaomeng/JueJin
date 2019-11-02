// const http = require('http')
import program from 'commander'
import Server from './server.js'


program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
// console.log(process.argv)  //存入命令  -a -b -help
program.parse(process.argv);  //默认带-help 输入-d  则不认识  配置后就认识了

let config = {
    port:8080
}
let server = new Server(config)
server.start()

// console.log(commander)