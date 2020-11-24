// 載入 express
const express = require('express')

// 載入 express Router
const router = express.Router()

// 載入 data model
const Url = require('../../models/url')



// 設定路由：

// 短網址請求 -----
router.get('/:code', (req, res) => {
  const code = req.params.code
  Url.findOne({ code: code })
     .then(url => {
       res.redirect(url.name)
     .catch(error => console.log(error))
     })
})


// 輸出 router
module.exports = router

