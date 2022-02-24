/*const http = require('http')
http.createServer((req, res) => {
  res.end("meu site")
}).listen(8084, (req, res) => {
  console.log("servidor rodando na porta 8084")
})*/

const express = require('express')
const app = express()

app.get("/", (req, res) => {
  res.send("rota concluida com sucesso")
})

app.get("/1rota", function (req, res) {
  res.send("Marcos Vinicius")
})

app.get("/2rota/:nome/:cargo/:idade", function (req, res) {
  res.send(req.params)
})

app.get("/html", function (req, res) {
  res.sendFile(__dirname + "/html./index2.html")
})

app.listen(8085, function (req, res) {
  console.log("servidor rodando")
})