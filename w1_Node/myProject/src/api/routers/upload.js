/**
 * 上传功能
 * 前端：formData
 * 后端：multer接收formdata数据
 */

const express = require('express');

const Router = express.Router();
const path = require('path');

const multer = require('multer');

// 接收文件配置文件
let storage = multer.diskStorage({
    // destination: function (req, file, cb) {
    //   cb(null, './uploads/');
    // },

    // 上传文件保存目录，无则自动创建
    destination: './uploads/',

    // 格式化文件名
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
})

// 设置文件保存目录
let upload = multer({ storage });

console.log('upload')

// 增加商品
Router.post('/goods', upload.single('goods'), (req, res) => {
    console.log('upload.goods')
    // 通过multer中间件处理过的文件信息会放置到req.file/req.files
    console.log('goods.file:', req.file)
    res.send({
        ...req.body
    })
})

Router.post('/album', upload.array('album'), (req, res) => {
    // 通过multer中间件处理过的文件信息会放置到req.file/req.files
    console.log('album.files:', req.files)
    res.send({
        ...req.body
    })
})

module.exports = Router;