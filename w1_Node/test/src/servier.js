const express = require('express');
const app = express();
//引入Router
const allRouters = require('./api/routers');
// const { PORT } = require('./config.json');

app.use(express.static('./'));

//使用中间件Routers
app.use(allRouters)

app.listen(2008, () => {
    console.log('servier is running....')
})