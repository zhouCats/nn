const express = require('express');
const Routers = express.Router();

Routers.post('/', (req, res) => {
    console.log('goods')
    res.send({
        ...req.body
    })
});
// Routers.delete('/:id', (req, res) => {
//     res.send({
//         ...req.body,
//         ...req.params,
//         ...req.query
//     })
// })
Routers.route('/:id')
    .delete((req, res) => {
        res.send({
            ...req.body,
            ...req.params,
            ...req.query
        })
    })
    .get((req, res) => {
        res.send({
            ...req.body,
            ...req.params,
            ...req.query
        })
    })
    .put((req, res) => {
        res.send({
            ...req.params,
            ...req.query
        })
    })
//曝光
module.exports = Routers;