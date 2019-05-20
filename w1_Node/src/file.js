const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path')

let app = http.createServer((req,res)=>{
    let {url:myurl} = req;

    let {pathname} = url.parse(myurl);
    // pathname = path.parse(pathname);
    
    console.log(pathname)

    pathname = path.join('./',pathname);

    console.log(pathname)

    fs.readFile(pathname,(err,data)=>{console.log('data',data)
        if(err){
            res.writeHead(404,{
                "Content-Type":'text/plain;charset=utf8'
            });
            res.end('文件不存在')
        }else{
            res.writeHead(200,{
                // 文件mime类型
                "Content-Type":'image/jpeg'
            });

            res.end(data)
        }
    })
})

app.listen(1902,()=>{
    console.log('图片服务器启动成功')
})

// fs.readFile('./data/hello520.txt',(err, data)=>{
//     // err：读取文件失败时得到错误信息，默认：null
//     // data:读取文件的数据
//     if(err){
//         console.log('文件读取错误',err)
//     }

//     console.log(data.toString())
// })

// let data = fs.readFileSync('./img/g3.jpg');
// console.log('readFileSync:',data.toString('base64'));