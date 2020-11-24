// 載入插件
const express = require('express')
const exphbs = require('express-handlebars')


const app = express()

const port = 3000

// 連接 mongodb 資料庫
require('./config/mongoose')

// 設定樣板引擎
app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))

// 首頁
app.get('/', (req, res) => {
  res.render('index')
})

// 送出短網址表單
app.post('/shorten', (req, res) => {
  // .....動作
})

// 啟動伺服器等待
app.listen(port, () => {
  console.log(`the server is listening on http://localhost:${port}`)
})