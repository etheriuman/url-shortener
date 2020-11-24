// 載入 mongoose
const mongoose = require('mongoose')
// 載入 mongoose Schema
const Schema = mongoose.Schema

// 設定資料型態
const urlSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  }
})

// 輸出為 data model
module.exports = mongoose.model('Url', urlSchema)