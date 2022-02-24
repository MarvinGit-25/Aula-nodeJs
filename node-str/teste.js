const express = require('express')
const app = express()

app.get("/", (req, res) => {
  res.send("Bem vina minha loja")
})

app.get("/produtos", function (req, res) {
  res.send("Aqui estao os produtos")
})

app.get("/teste", function (req, res) {
  res.sendFile(__dirname + "/html./index.html")
})

app.get("/blog/:nome/:idade/:cargo", (req, res) => {
  res.send(" Ola " + req.params.nome + " sua idade é " + req.params.idade + " e seu cargo é " + req.params.cargo)
})

app.listen(8082, function () {
  console.log("servidor rodando na porta 8082")
})

console.log("testando")
console.log("testando")
