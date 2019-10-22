const Sequelize = require('sequelize');
/* 
	importando a nossa conexao com o banco de dados
	do arquivo config da nossa aplicação.
*/
const sequelize = require("../config/connection");

// Definido a nossa tabela da aplicação
const Model = sequelize.define('models', {
	language:{
		type: Sequelize.STRING,
		allowNull: true
	},
	porcent:{
		type: Sequelize.STRING,
		allowNull:true
	}
});

// Executando o nosso model.
Model.sync({ force: true })
	.then(() => {
		// Criando um novo registro
		return Model.create({
			language: "Javascript",
			porcent: "100"
		})
	})
module.exports = Model;