## Consumindo uma api usando Node JS e React JS

` Pedencias `

- [x] Criar nosso back-end.
- [x] Configurar nossa conexão com o Banco de Dados.
- [ ] Criar nossa tabela no nosso Banco de dados.
- [ ] Criar o nosso method post delete e outros ... para nosso crud no front-end

` BUGS `

- [ ] Resolver o problema com nosso define do nosso models/database, esta pedindo para passar um instancia para nosso sequelize.

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

* Erro da nossa aplicação

``` bash

	 throw new Error('No Sequelize instance passed');
      ^

     Error: No Sequelize instance passed
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
