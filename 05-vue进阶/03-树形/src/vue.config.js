module.exports = {
    devServer : {
        open : true,
        host: 'localhost',
        port : 8080,
        https : false,
        hotOnly : false,
        proxy:{
            '/api':{
                target : 'https://ele-interface.herokuapp.com/api/',
                ws  : true,
                changOrigin : true,
                pathRewrite : {
                    '^/api':''
                }
            }
        },
        before : app=>{}
    }
};