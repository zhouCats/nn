const fs = require('fs');

const path = require('path');

let pathname = path.join(__dirname,'data/user.json');

let user = require('./data/user.json');
console.log(user[1].name)

// 读取文件
fs.readFile(pathname,(err,data)=>{
    if(err){
        console.error('文件读取错误')
    }

    data = data.toString();
    console.log(data);

    // fs.writeFile(pathname,'我们不一样，有啥不一样',err=>{
    //     if(err){
    //         console.error('写入失败')
    //     }

    //     console.log('写出成功')
    // })

    // fs.appendFile(pathname,'{"name":"tingting","age":18.5,"gender":"男"}',err=>{
    //     if(err){
    //         console.error('写入失败')
    //     }

    //     console.log('写出成功')
    // })
    // data = JSON.parse(data)
    // data.push({"name":"tingting","age":18.5,"gender":"男"});
    // fs.writeFile(pathname,JSON.stringify(data),err=>{
    //         if(err){
    //             console.error('写入失败')
    //         }
    
    //         console.log('写出成功')
    //     })
})