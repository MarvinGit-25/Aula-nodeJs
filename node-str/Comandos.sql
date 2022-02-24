mysq -h (nome do servidor) -u (nome do usuario) - p  > se conectando ao servidor.

show databases; > mostra bancos de dados que existem no mysql.

create database (nome do banco); > cria um banco de dados.

use (nome do banco); > entra no banco de dados.

show tables; mostra as tabelas dentro do banco de dados.

create table nome da tabela (
nome das colunas (tipo das colunas (qtd caracteres das colunas)
) ); > cria uma tabela e suas colunas e define seus tipos.

Ex: create table usuarios(
coluna1 varchar(50), /* varchar é do tipo texto */
coluna2 varchar(100), /* varchar é do tipo texto */
coluna3 int()); /* int é do tipo inteiro */

describe (nome da tabela); > mostra a estrutura da tabela.

insert into nome da tabela (nome das colunas) values (valores das colunas); > adiciona informações a tabela.

ex: insert into usuarios (coluna1, coluna2, coluna3) values ("valor1", "valor2", 25);
 
select * from (nome da tabela); > lista todos os dados de uma tabela.
select * from (nome da tabela) where (nome da coluna) e o que se quer retornar "dado da coluna";

ex: select * from usuarios where coluna1 = "dado da coluna" 

delete from (nome da tabela) where (nome da coluna) = "dado da coluna";

ex: delete from usuarios where coluna1 = "dado da coluna";

update (nome da tabela) set (nome da coluna) = "dado mudado" where = (nome da coluna) = "dado que vai ser mudado";

ex: update usuarios set coluna2 = "Marcos" where coluna2 = "luiz";