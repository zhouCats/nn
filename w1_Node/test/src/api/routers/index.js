const express = require('express');
const Routers = express.Router();
const goodsRouter = require('./goods');
Routers.use(express.json(), express.urlencoded())
Routers.use('/goods', goodsRouter);
//曝光
module.exports = Routers;