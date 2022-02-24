console.log("testando")
const http = require('http')
http.createServer((req, res) => {
  res.end("Ola Marcos Vinicius")
}).listen(8081)
