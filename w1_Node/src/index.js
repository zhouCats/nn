/**
 * 以commonJS的规范引入一个模块
 */

 let jq = require('jquery');
 console.log(jq)

//  引入模块对象
 let formatDate = require('./utils');//得到一个模块对象

//  解构模块对象的属性/方法
// let {getData,format} = formatDate
 let {getData,format} = require('./utils');

 console.log(getData,format,formatDate)

// 把其他模块你引入

console.log('首页');

// formatDate('2019-5-20')

