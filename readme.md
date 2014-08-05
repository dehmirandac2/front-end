#Teste Front-end Planedia

#Install dependências
1. Install [NodeJS](http://nodejs.org/download/), caso ainda não tenha.
2. Install [GruntJS](http://gruntjs.com/getting-started), caso ainda não tenha.
3. Install [Bower](http://bower.io/), caso aina não tenha.
4. Install `compass`, `sass`, esse depende do `ruby`

#Rodando Projeto

1. cd planedia-site
2. [sudo] npm install && bower install
3. grunt serve
4. abrir site em `http://localhost:9009/`

===

#Tarefas

* Fazer um request do tipo `POST` para a seguinte url  `http://planedia.com/api/getTimeline`, passando o paramentro `{timeline_id: 348}`
* Renderizar os dados do JSON acima, de acordo com layout contido no arquivo `planedia-site/index.html` que esta dentro da pasta **planedia-site** 
* criar um componente para abir e fechar um `pophover` de acordo com o clique no elemento desejado. Também posicionar a seta de acordo com parametro passado, `top`, `left`, `bottom` ou `right`. Criar css no arquivo `planedia-site/public/assets/sass/ui/tooltip.scss`.

![Exemplo tooltip](https://i.cloudup.com/yAjqZqof_H-3000x3000.png)

**	Exemplo do HTML:**
	

	```
	<!-- TOOLTIP -->
		<div class="tooltip-timeline">
			<div class="tooltip">
				<div class="content-tooltip">
					<b class="title-tooltip">find place</b>
					
					<input type="text" placeholder="ex: Rio de janeiro">
					<div class="autocomplete"></div>

					<p class="suggestions title">city sugestions</p>
					<ul class="suggestions suggestions-list-places">
						<!-- Listagem das 6 primeiras cidades exibidas -->
					</ul>

				</div>
				<div class="footer-tooltip">
					<a href="#" class="fleft link cancel-tooltip">cancel</a>
					<a href="" class="fright btn" >add</a>
				</div>
			</div>
		</div>
	<!-- /TOOLTIP -->
	```
	
	
**Exemplos para `arrow`:**
	
```
	<div class="tooltip top">
	<div class="tooltip left">
	<div class="tooltip right">
	<div class="tooltip bottom">
```

* Criar JavaScript para autocomplete, dados na seguinte url `http://planedia.com/q/attractions.json?q=q.\*:belo%20h*&sort=weight:desc&default_operator=AND` type `GET` - separar o resultado por categorias, como:

```
	##Places
	resultados

	##Hotels
	resultados

	##attractions
	resultados
```