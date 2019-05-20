/**
 * 以commonJS的规范定义一个模块
 * 模块作用域：下面的代码只在当前模块生效
 * 模块对象：
    * 导出：往模块对象中添加属性
    * 引入：获取模块对象中的属性
 */


 function formatDate(date){
    console.log(date)
 }


// 导出一个模块（一个模块值运行有一个module.exports）
// module.exports = formatDate;

// 一个模块可以有多个exports
// 给模块对象添加format，getData方法
exports.format = formatDate;
exports.getData = ()=>{
    console.log('my data')
}

export.get = ()=>{

}
export.post = ()=>{
    
}