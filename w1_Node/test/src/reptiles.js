//爬取图片
const requset = require('request');
const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

requset('http://list.jiuxian.com/1-1795-0-0-0-0-0-0-0-0-0-0.htm', (err, response, body) => {
    let $ = cheerio.load(body);

    $('img', '.clearfix li').each((i, e) => {
        let src = $(e).attr('src');
        console.log(src)
        let filename = path.basename(src);
        requset(src).pipe(fs.createWriteStream('./reptile/' + i + '.jpg'));
    })
})