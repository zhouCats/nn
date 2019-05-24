const requset = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
let arr = [];
app.get('/goods', (req, res) => {
    requset('http://list.jiuxian.com/1-2-0-0-0-0-0-0-0-0-0-0.htm?area=6#v2', (err, response, body) => {

        let $ = cheerio.load(body);

        $('li', '.proListSearch').each((i, cele) => {
            let $lis = $(cele);
            let imgurl = $lis.find('img').attr('src')
            console.log(imgurl)
            let filename = path.basename(imgurl);



            let goods = {
                productId: $lis.attr('product-box'),
                name: $lis.find('.proName a').attr('title'),
                imgurl: filename,
                judge: $lis.find('.judge span').text(),

            }
            arr.push(goods);
            requset(imgurl).pipe(fs.createWriteStream('./aaa/' + i + '.jpg'));




        })
        // res.send(arr);
        let ids = arr.map(item => item.productId).join();

        requset('http://list.jiuxian.com/act/selectPriceAndClubPriceByProIds.htm?ids=' + ids, (err, response, body) => {

            let prices = JSON.parse(body).data;

            arr.forEach(item => {
                for (let i = 0; i < prices.length; i++) {
                    if (item.productId == prices[i].productId) {
                        Object.assign(item, prices[i]);
                        break;
                    }
                }
                return item;
            })
            res.send(arr);
        })
    })
})
app.listen(2005, () => {
    console.log('running....');
})

