const Sequelize = require('sequelize');

// Conexao com o banco de dados.
const sequelize = new Sequelize('dados','root','',{
	host:'localhost',
	dialect:'sqlite'
});

// Validando conexao com o banco de dados.
sequelize
	.authenticate()
	.then(() => {
		console.log("conexão efetuda com sucesso")
	}).catch((err)=>{
		console.log(`Erro ao tentar se connectar ao banco de dados ${err}`)
	});

// Fechando a nossa conexao.
sequelize.close();