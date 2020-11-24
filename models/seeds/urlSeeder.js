// 載入 db
const db = require('../../config/mongoose')

// 載入 data model
const Url = require('../../models/url')

// 生成種子資料
db.once('open', () => {
  Url.create({
      name: 'http://www.google.com',
      code: '5Wujc'
    })
  console.log('done')
})