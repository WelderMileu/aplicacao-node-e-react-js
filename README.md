## Consumindo uma api usando Node JS e React JS

` Pedencias `

- [x] Criar nosso back-end.
- [ ] Configurar nossa conexão com o Banco de Dados.
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
    at Function.init (C:\Users\Bruno\Desktop\react\list-data\back-end\node_modules\sequelize\lib\model.js:926:13)
    at Object.<anonymous> (C:\Users\Bruno\Desktop\react\list-data\back-end\models\database.js:21:7)
    at Module._compile (internal/modules/cjs/loader.js:776:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:787:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Module.require (internal/modules/cjs/loader.js:683:19)
    at require (internal/modules/cjs/helpers.js:16:16)
    at Object.<anonymous> (C:\Users\Bruno\Desktop\react\list-data\back-end\index.js:5:16)
    at Module._compile (internal/modules/cjs/loader.js:776:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:787:10)
    at Module.load (internal/modules/cjs/loader.js:643:32)
    at Function.Module._load (internal/modules/cjs/loader.js:556:12)
    at Function.Module.runMain (internal/modules/cjs/loader.js:839:10)
    at internal/main/run_main_module.js:17:11

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
