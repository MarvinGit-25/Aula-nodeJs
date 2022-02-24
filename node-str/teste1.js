const Sequelize = require('sequelize')
const sequelize = new Sequelize("teste1", "root", "Marvin1995", {
  host: "localhost",
  dialect: "mysql"

})

sequelize.authenticate().then(function () { // a função then sera chamada se ocorrer sucesso ao se conectar ao banco de dados.
  console.log("conectado com sucesso.")
}).catch(function (erro) { // a função catch sera chamada se ocorrer erro ao se conectar ao banco de dados.
  console.log("falha ao se conectar " + erro)
}) // a função sequelize.authenticate verifica se conseguimos se conectar com sucesso ao banco de dados.