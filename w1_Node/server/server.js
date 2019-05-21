const http = require('http');

const url = require('url');

const fs = require('fs');
const path = require('path');
const mime = require('./mime');

const PORT = 1902;


// 创建hi个服务器
http.createServer((req,res)=>{
    let {method,url:currentUrl} = req;

    // 获取pathname
    let {pathname} = url.parse(currentUrl,true);

    // 获取后缀名
    let ext = path.extname(pathname);
    if(ext){
        ext = ext.slice(1);
    }

    // 获取真实文件路径
    // __dirname ： 当前服务器所在的路径
    let realPath = path.join(__dirname,pathname);
    console.log(pathname,realPath)

    // 通过浏览器url地址访问的都是get请求
    if(method.toLowerCase() === 'get'){
        fs.readFile(realPath,(err,data)=>{
            if(err){
                res.writeHead(404,{
                    'Content-Type':"text/plain;charset=utf8"
                });
                res.end(`你访问的文${pathname}件不存在`);
                return;
            }

            console.log('success')

            res.writeHead(200,{
                'Content-Type':mime[ext]+';charset=utf8'
            });
            res.end(data)
        })
    }
}).listen(PORT,()=>{
    console.log('server is running on http://localhost:'+PORT);
})