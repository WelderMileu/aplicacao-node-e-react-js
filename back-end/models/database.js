const Sequelize = require('sequelize');
/* 
	importando a nossa conexao com o banco de dados
	do arquivo config da nossa aplicação.
*/
const sequelize = require('../config/connection');

// Problema com o nosso define não esta gerando a nossa tabela.
const Model = sequelize.define('porcent',{
	language:{
		type: Sequelize.STRING,
		allowNull: true
	},

	porcent:{
		type: Sequelize.STRING,
		allowNull:true
	}
})

// Executando o nosso model.
Model.init();