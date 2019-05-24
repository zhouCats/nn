const express = require('express');

const Router = express.Router();



// 增加商品
Router.post('/', (req, res) => {
    // 操作数据库，并写入商品信息
    res.send({
        ...req.body
    })
})

Router.route('/:id')
    .delete((req, res) => {
        res.send({
            ...req.query,
            ...req.body,
            ...req.params
        })
    })

    .put((req, res) => {
        // 操作数据库，并写入商品信息
        res.send({
            ...req.params,
            ...req.body
        })
    })

    .get((req, res) => {
        // 操作数据库，并写入商品信息
        res.send({
            ...req.params,
            msg: '获取数据成功'
        })
    })

// 动态路由
// Router.delete('/:id',(req,res)=>{console.log('goods')
//     // req.query(get),req.body(post),req.params(动态路由)
//     // 操作数据库，删除当前商品
//     res.send({
//         ...req.query,
//         ...req.body,
//         ...req.params
//     })
// })

// Router.put('/:id',(req,res)=>{
//     // 操作数据库，并写入商品信息
//     res.send({
//         ...req.params,
//         ...req.body
//     })
// })

// Router.get('/:id',(req,res)=>{
//     // 操作数据库，并写入商品信息
//     res.send({
//         ...req.params,
//         msg:'获取数据成功'
//     })
// })

module.exports = Router;