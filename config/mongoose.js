// 載入 mongoose
const mongoose = require('mongoose')

// 連線狀態
const db = mongoose.connection

// 設定 mongodb 連線網址
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/url-shortener'

// 連線到 mongodb
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// 設定連線狀態
db.on('error', () => {
  console.log('mongodb connection fail!')
})

db.once('open', () => {
  console.log('mongodb connection succeed!')
})

// 輸出 db
module.exports = db