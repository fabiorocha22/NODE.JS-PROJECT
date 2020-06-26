# NODE.JS-PROJECT

API REST:

Foi desenvolvida utilizando um banco de dados MySQL para criar uma tabela com os valores dos comentários.

Foram criados dois endpoints para inserir um comentário e para ler os comentários.

Foi utilizado o Sequelize como ORM para manipular o banco de dados e o Express para manipulação das rotas.

Para executar basta rodar os seguintes comandos:

npm install
npm run start

----------------------------------------------------------------------------------------------------------

WEB PAGE:

Foi desenvolvida em Angular.JS onde foram feitas as chamadas Ajax à API.

Para executar basta rodar os seguintes comandos:

npm install
npm run start

----------------------------------------------------------------------------------------------------------

Para facilitar os testes foi utilizada containerização por meio do Docker.

Por isso, ambos tem seus Dockerfile's e podem ser instanciados.

Basta rodar os seguintes comandos:

docker build .
docker run
docker ps (pegar o ID do container)
docker port {ID DO CONTAINER} -----> para saber em qual porta do host o container esta

----------------------------------------------------------------------------------------------------------

Estou disponível para resolver bugs ou tirar duvidas!

Obrigado pela oportunidade!
