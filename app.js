// 載入插件
const express = require('express')

const app = express()

const port = 3000



app.get('/', (req, res) => {
  res.render('index')
})

// 啟動伺服器等待
app.listen(port, () => {
  console.log(`the server is listening on http://localhost:${port}`)
})