const express = require('express');

// 创建一个服务器
const app = express();

// 内置中间件：创建静态资源服务器
const static = express.static('./');console.log(static)
app.use(static);

// 自定义中间件
app.use('/cart',function(req,res,next){
    console.log(666)

    res.send({
        goodslist:[
            {name:'huawei P30 pro',price:5999,qty:10},
            {name:'onePlus 7 pro',price:3999,qty:20}
        ]
    })
})

app.use(express.urlencoded(),express.json())

app.use('/login',function(req,res,next){
    // get请求express把数据放到req.query中
    console.log('use:',req.query,req.body)
    
    res.send({
        ...req.query
    })

    // 要进入下一个中间件，必须调用next()
    next();
})

app.post('/login',(req,res,next)=>{
    // post请求express把数据放到req.body中
    console.log('post:',req.body)
})

app.listen(1902,()=>{
    console.log('express server is running on http://localhost:1902')
})