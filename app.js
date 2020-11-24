// 載入插件
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes')


const app = express()

const port = 3000

// 連接 mongodb 資料庫
require('./config/mongoose')

// 設定樣板引擎
app.set('view engine', 'handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))

// 設定 middle ware
app.use(
  express.static('public'),
  bodyParser.urlencoded({extended: true}),
  routes
)




// 啟動伺服器等待 -----
app.listen(port, () => {
  console.log(`the server is listening on http://localhost:${port}`)
})