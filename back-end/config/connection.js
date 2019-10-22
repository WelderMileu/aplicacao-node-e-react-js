const Sequelize = require('sequelize');

// Conexao com o banco de dados.
const sequelize = new Sequelize('dados','root','',{
	host:'localhost',
	dialect:'mysql'
});

// Validando conexao com o banco de dados.
sequelize.authenticate()
	.then(() => {
		console.log("Conexão efetuda com sucesso!")
	}).catch( err => {
		console.log(`Erro ao tentar se connectar ao banco de dados ${err}`)
	}).done();

// Fechando a nossa conexao.
// sequelize.close();

module.exports = sequelize;