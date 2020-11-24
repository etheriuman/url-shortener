function generateCode() {
  // data
  const alpha = 'abcdefghijklmnopqustuvwxyz'
  const alphaUppercase = alpha.toUpperCase()
  const number = '0123456789'

  // 將data通通丟到同一個陣列中並打亂
  const box = alpha.concat(alphaUppercase).concat(number)

  // 抽出的內容
  const code = []

  // 開始抽
  while (code.length < 5) {
    let randomIndex = Math.floor(Math.random() * box.length)
    code.push(box[randomIndex])
  }

  return code.join('')

}

module.exports = generateCode