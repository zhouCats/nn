const fs = require("fs");
const path = require('path');

// 创建可读流
// 以流的方式读取input.txt中的内容
// let pathname = path.join(__dirname,'data/Nodejs.md')
// let readerStream = fs.createReadStream(pathname);

// let data = '';
// readerStream.on('data', function(chunk) {
//     data += chunk;
//     console.log('chunk:',chunk);
// });

// readerStream.on('end',()=>{
//     // console.log('end:',data)
// })


// 创建写入流
// const writerStream = fs.createWriteStream('./data/touxiang.txt');

//  // 使用 utf8 编码写入数据
//  writerStream.write('广州千锋','UTF8');
//  writerStream.write('1902','UTF8');

//  // 标记文件末尾
//  writerStream.end();

// writerStream.on('finish', function() {
//     console.log("写入完成。");
// });

// writerStream.on('error', function(err){
//    console.log(err.stack);
// });


// 管道流

// 创建一个读取流
var readerStream = fs.createReadStream('./data/hello520.txt');
// 创建一个可写流 
var writerStream = fs.createWriteStream('./data/output.txt');
var writerStream2 = fs.createWriteStream('./data/output2.txt');

readerStream
    .pipe(writerStream)
