const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const config = require('./config/connection') // Conexao com o banco de dados.
const models = require('./models/database') // Nosso model de creação de uma nova tabela.
const app = express();

// Setando uma porta para nossa aplicação.
const port = process.env.PORT || 3000

// Mostrando tempo de execução da nossa aplicação.
app.use(morgan('dev'));
app.use(cors());

// Configurando para nossa aplicação receber nossas requisições em formato de json.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req, res) => {
	res.json(
		{
			"define":"conserta nosso define em database",
			"create":"criar nossoa tabela no banco de dados usando seqlize"
		}
	);
})

app.listen(port,
	console.log(`Servidor rodando em localhost:${port}`)
)