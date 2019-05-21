const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('./data/Nodejs.md')  //返回一个文件流stream
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./data/input.md.zip'))