// 載入 mongoose
const mongoose = require('mongoose')
// 載入 mongoose Schema
const Schema = mongoose.Schema

// 設定資料型態
const urlSchema = new Schema({
  originUrl: {
    type: String,
    required: true
  },
  shortenUrl: {
    type: String,
    required: true
  }
})

// 輸出為 data model
module.exports = mongoose.model('Url', urlSchema)