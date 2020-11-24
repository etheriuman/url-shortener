const mongoose = require('mongoose')

const db = mongoose.connection

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