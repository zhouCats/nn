/**
 * 创建一个http服务器
 */

//  原生模块为Nodejs自带，不需要安装，直接使用
 const http = require('http');

 const url = require('url');

//  创建一个服务器
http.createServer((req,res)=>{
    // url:当前访问地址：包括路径、参数
    let {url:myurl,method} = req;console.log('当前method:',method)

    console.log('1:',myurl)

    let {pathname} = url.parse(myurl,true);

    if(pathname === '/favicon.ico'){
        res.end();
        return;
    }
    console.log(pathname);
    let statusCode = 200;

    let content = '';

    switch(pathname){
        case '/home':
            content = '首页';
            break;
        case '/cart':
            content = '购物车';
            break;
        case '/login':
            content = '免费登录';
            break
        default:
            statusCode = 404
            content = '404'
        }
        
        res.writeHead(statusCode,{
            'Content-Type':'text/html;charset=utf8'
        });
        res.write(content);

    console.log(666);
    
    // res.write('<h1>jingjing</h1>')
    // res.end('算了，你是个好人，但我们不合适')
    res.end()
}).listen(1902,()=>{
    console.log('server is running on port 1902');
});