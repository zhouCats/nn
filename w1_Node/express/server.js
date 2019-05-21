const express = require('express');

// 创建一个服务器
const app = express();

// 创建静态资源服务器
app.use(express.static('./'))

app.listen(1902,()=>{
    console.log('express server is running on http://localhost:1902')
})