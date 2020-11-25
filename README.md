# 短網址產生器
  輸入你想要去的網址，讓短網址產生器來幫你產生一組短網址！
  [現在就去試試!](https://polar-river-15707.herokuapp.com/)

![Image](https://github.com/etheriuman/url-shortener/blob/master/url-shortener-image.png)
---
- ## 運行環境需求:
  Node.js

- ## 資料庫需求:
  MongoDB

- ## 插件需求 :
1. npm
2. Express
3. Express-handlebars
4. Mongoose
5. Body-parser
6. Nodemon

- ## 功能 :
1. 輸入你想要到達的網址連結，生成短網址。
2. 一鍵複製短網址。

- ## 應用程式安裝前導 :
1. ### 請用 Mac users: 終端機 / Windows users: Git Bash 輸入以下內容：

2. 將專案從GitHub複製到你的本機中：
```
git clone https://github.com/etheriuman/url-shortener.git
```
3. 進入到該資料夾中：
```
cd url-shortener
```
4. 安裝npm：
```
npm init -y
```
5. 用npm指令安裝所有所需的插件：
```
npm i
```
6. 啟動你的資料庫。
7. 產生種子資料到資料庫中(optional)：
```
npm run seed
```
8. 開始運行伺服器：
```
npm run dev
```
9. 將回傳的網址貼到瀏覽器中：
```
the server is listening on http://localhost:3000
```