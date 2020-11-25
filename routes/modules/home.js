// 載入 express
const express = require('express')

// 載入 express Router
const router = express.Router()

// 載入 generateCode 序碼產生器
const generateCode = require('../../public/javascripts/generateCode')

// 載入 data model
const Url = require('../../models/url')

// 載入 mongoose 連線狀態
const db = require('../../config/mongoose')


// 解析 port 當前的狀態
const localhost = process.env.PORT === 3000? 'http://localhost:3000/shorten/' : 'https://polar-river-15707.herokuapp.com/shorten/'


// 設定路由：

// 首頁
router.get('/', (req, res) => {
  res.render('index')
})

// 送出短網址表單
router.post('/', (req, res) => {
  // 得到輸入的網址
  const inputUrl = req.body.url
  console.log('this is ' + inputUrl)
  // 尋找db是否有該url的項目
  Url.find({ name: inputUrl })
     .then(url => {
       // 如果有找到：
       if (url.length) {
         console.log('找到了匹配資料，渲染畫面！')
         // 取出 url 的 code
         const code = url[0].code
         // 渲染畫面
         res.render('index', { code, localhost })
       // 如果沒找到：
       } else {
         console.log('沒有找到匹配資料，生成一組code並開始進行後續動作！')
         // 創建一組 code
         const code = generateCode()
         // 尋找是否已經有相同 code 存在：
         Url.find({ code: code })
            .then(url => {
              // 如果有找到：
              if (url.length) {
                console.log('找到重複的code，重新生成一組code並生成資料，渲染畫面！')
                // 重新生成一組 code
                code = generateCode()
                // 生成資料
                Url.create({
                      name: inputUrl,
                      code: code
                    })
                   // 渲染畫面
                   .then(() => res.render('index', { code, localhost }))
              // 如果沒找到：
              } else {
                console.log('沒有找到重複的code，直接生成資料，渲染畫面！')
                // 生成資料
                Url.create({
                      name: inputUrl,
                      code: code
                    })
                    // 渲染畫面
                   .then(() => res.render('index', { code, localhost }))
              }
            })
       }
     })
})


// 輸出 router
module.exports = router