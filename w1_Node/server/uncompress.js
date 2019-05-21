const fs = require('fs');
const zlib = require('zlib');

fs.createReadStream('./data/input.md.zip')  //返回一个文件流stream
    // 解压
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('./data/jingjing.md'))