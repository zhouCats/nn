const express = require('express');
const app = express();

const {PORT} = require('./config.json');

const allRouters = require('./api/routers');

// 静态资源服务
app.use(express.static('./'))



// 利用中间件载入路由
app.use('/api',allRouters);


app.listen(PORT,()=>{
    console.log('server is running on http://localhost:%d',PORT);
})