// 載入 mongoose
const mongoose = require('mongoose')

// 連線狀態
const db = mongoose.connection

// 連線到 mongodb
mongoose.connect('mongodb://localhost/URL-shortener', { useNewUrlParser: true, useUnifiedTopology: true })

// 設定連線狀態
db.on('error', () => {
  console.log('mongodb connection fail!')
})

db.once('open', () => {
  console.log('mongodb connection succeed!')
})

// 輸出 db
module.exports = db