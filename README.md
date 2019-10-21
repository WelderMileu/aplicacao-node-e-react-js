## Consumindo uma api usando Node JS e React JS

` Pedencias `

- [x] Criar nosso back-end.
- [ ] Configurar nossa conexão com o Banco de Dados.
- [ ] Criar nossa tabela no nosso Banco de dados.
- [ ] Criar o nosso method post delete e outros ... para nosso crud no back-end

` BUGS `

- [ ] Resolver o problema com nosso define nosso models/database

``` javascript
	
	// Modelo da conexão
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

```

## Comando do back-end

* Startando nossa aplicação

``` bash

	node index.js
```


* Startando nossa aplicação com nodemon

``` bash
	npm start 

```
