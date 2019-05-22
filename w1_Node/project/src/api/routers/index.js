/**
 * 这里包含所有数据接口
 */

 const express = require('express');

 const Router = express.Router();

 const goodsRouter = require('./goods');
//  const listRouter = require('./list');
//  const regRouter = require('./reg');
//  const loginRouter = require('./login');
 const uploadRouter = require('./upload');

Router.use(express.json(),express.urlencoded({ extended: false }));

//  商品
Router.use('/goods',goodsRouter);

// // 列表
// Router.use('/list',listRouter);

// // 注册/登录
// Router.use('/reg',regRouter);
// Router.use('/login',regRouter);

// 图片上传
Router.use('/upload',uploadRouter)


 module.exports = Router;