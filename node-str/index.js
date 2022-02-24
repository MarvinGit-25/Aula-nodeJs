const express = require('express')
const app = express()

app.get("/", function (req, res) { // criando uma rota padrão.
  res.send("seja bem vindo ao meu app")
})

app.get("/sobre", (req, res) => {
  res.sendFile(__dirname + "/html./index.html")
})

app.get("/blog", function (req, res) {
  res.send("bem vindo ao meu blog")
})

app.get("/ola/:cargo/:nome/:cor", function (req, res) { // criando uma rota com parametros, app.get("/ola/:cargo/:nome/:cor".
  res.send("ola " + req.params.nome + " seu cargo e " + req.params.cargo + " sua cor é " + req.params.cor)
})



app.listen(8083, function () {
  console.log("servidor rodando na porta 8081")
})