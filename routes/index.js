// 載入 express
const express = require('express')

// 載入 express Router
const router = express.Router()



// 載入 routes module
const home = require('./modules/home')
const shorten = require('./modules/shorten')

// 設定middle ware
router.use('/', home)
router.use('/shorten', shorten)

// 輸出 router
module.exports = router