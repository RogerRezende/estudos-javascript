//lista de produtos para compra
var lista = [
	{"descricao": "arroz", "quantidade": "1", "valor": "5.40"},
	{"descricao": "cerveja", "quantidade": "12", "valor": "1.99"},
	{"descricao": "carne", "quantidade": "1", "valor": "30.00"}
];
//função que irá retornar o valor total da compra
function getTotal(lista){
	//variável que irá receber a soma dos valores da compra
	var total = 0.0;
	//laço de var key in listarer a lista de produtos
	for(var chave in lista){
		total += lista[chave].valor * lista[chave].quantidade;
	}
	//retorna o valor total da compra
	return total;
}
//função que irá setar a lista de compras
function setLista(lista){
	//variável que irá receber a tabela
	var tabela = '<thead><tr><th scope="col">Descrição</th><th scope="col">Quantidade</th><th scope="col">Valor</th><th scope="col">Ação</th></tr></thead><tbody>';
	//laço de repetição que irá popular a tabela
	for(var key in lista){
		tabela += '<tr><th scope="row">' + formatarDescricao(lista[key].descricao) + '</th><td>' + formatarQuantidade(lista[key].quantidade) + '</td><td>' + formatarValor(lista[key].valor) + '</td><td><button onclick="setarAtualizacao('+ key +');" class="btn btn-primary">Editar</button>  <button onclick="deletarDado('+ key +');" class="btn btn-primary">Deletar</button></td></tr>';
	}
	tabela += '</tbody>';
	document.getElementById('listaTabela').innerHTML = tabela;
}
//função que irá formatar as descrições
function formatarDescricao(descricao){
	//irá deixar a descrição toda com letras minúsculas
	var string = descricao.toLowerCase();
	//irá deixar a primeira letra maiúscula e concatenar com o resto da descrição
	string = string.charAt(0).toUpperCase() + string.slice(1);
	//retorna a descrição alterada
	return string
}
//função que irá formatar as quantidades
function formatarQuantidade(quantidade){
	//retorna a quantidade apenas quando ela for um inteiro
	return parseInt(quantidade);
}
//função que irá formatar os valores
function formatarValor(valor){
	//irá transformar o valor em float e fixo duas casas decimais
	var string = parseFloat(valor).toFixed(2) + "";
	//irá alterar o ponto por vírgula
	string = string.replace(".", ",");
	//irá inserir o R$ a frente do valor
	string = "R$ " + string;
	//retorna o valor alterado
	return string
}
//função que irá adicionar novos itens para a lista de compras
function adicionarDados(){
	//faz a validação dos dados digitados
	if(!validacao()){
		return;
	}
	
	//variável que irá receber a descrição do campo descricao
	var descricao = document.getElementById('descricao').value;
	//variável que irá receber a quantidade do campo quantidade
	var quantidade = document.getElementById('quantidade').value;
	//variável que irá receber o valor do campo valor
	var valor = document.getElementById('valor').value;

	//inserir na lista de compras na primeira posição dela
	lista.unshift({'descricao': descricao, 'quantidade': quantidade, 'valor': valor});

	//setando o novo item para mostrar na página
	setLista(lista);
}
//função que irá atualizar os valores já presentes na lista de compras
function setarAtualizacao(id){
	//variável que irá receber os dados de determinado item da compra
	var objeto = lista[id];

	//irá aparecer no input o dado da descrição do determinado item
	document.getElementById('descricao').value = objeto.descricao;
	//irá aparecer no input o dado da quantidade do determinado item
	document.getElementById('quantidade').value = objeto.quantidade;
	//irá aparecer no input o dado do valor do determinado item
	document.getElementById('valor').value = objeto.valor;

	//irá alterar a visualizaçao do botão para salvar ou cancelar a atualização
	document.getElementById('btnAtualizacao').style.display = 'inline-block';
	//irá alterar a visualizaçao do botão para adicionar um item
	document.getElementById('btnAdicionar').style.display = 'none';

	//irá criar o input para receber o id da lista de compras
	document.getElementById('inputIdAtualizacao').innerHTML = '<input id="idAtualizacao" type="hidden" value="'+ id +'">';
}
//função que irá resetar os dados que aparecem nos inputs do formulário
function resetarFormulario(){
	//irá limpar o dado da descrição do input
	document.getElementById('descricao').value = "";
	//irá limpar o dado da quantidade do input
	document.getElementById('quantidade').value = "";
	//irá limpar o dado do valor do input
	document.getElementById('valor').value = "";

	//irá alterar a visualizaçao do botão para salvar ou cancelar a atualização
	document.getElementById('btnAtualizacao').style.display = 'none';
	//irá alterar a visualizaçao do botão para adicionar um item
	document.getElementById('btnAdicionar').style.display = 'inline-block';

	//irá limpar o input que recebeu o id da lista de compras
	document.getElementById('inputIdAtualizacao').innerHTML = "";
	//retira a div erros na página
	document.getElementById('erros').style.display = 'none';
}
//função que irá fazer a atualização do item da lista de compras
function salvarDados(){
	//faz a validação dos dados digitados
	if(!validacao()){
		return;
	}

	//variável que irá receber o id da lista de compras
	var id = document.getElementById('idAtualizacao').value;
	//variável que irá receber a possível nova descrição do item da lista de compras
	var descricao = document.getElementById('descricao').value;
	//variável que irá receber a possível nova quantidade do item da lista de compras
	var quantidade = document.getElementById('quantidade').value;
	//variável que irá receber o possível novo valor do item da lista de compras
	var valor = document.getElementById('valor').value;

	//inserindo na lista o item atualizado da lista de compras
	lista[id] = {'descricao': descricao, 'quantidade': quantidade, 'valor': valor};

	//irá resetar os inputs do formulário
	resetarFormulario();
	//irá mostrar a lista de compras atualizada
	setLista(lista);
}
//função que irá deletar item da lista de compras
function deletarDado(id){
	//verificar se o usuário quer apagar mesmo o item da lista de compras
	if(confirm("Deletar este item?")){
		//verifica se o item é o último da lista de compras
		if(id === lista.length - 1){
			//retira o último item da lista de compras
			lista.pop();
		}
		//verifica se o item é o primeiro da lista de compras
		else if(id === 0){
			//retira o primeiro item da lista de compras
			lista.shift();
		}
		//se o item estiver no meio da lista de compras, em uma posição qualquer
		else{
			//variável que irá percorrer a lista de compras do primeiro até o item a ser deletado
			var arrayAuxInicio = lista.slice(0, id);
			//variável que irá percorrer a lista de compras do item a ser deletado até o último item da lista de compras
			var arrayAuxFinal = lista.slice(id + 1);

			//irá percorrer a lista, concatenando os arrays de início e final da lista de compras
			lista = arrayAuxInicio.concat(arrayAuxFinal);
		}

		//irá mostrar a lista de compras atualizada
		setLista(lista);
	}
}
//função que irá validar os dados para inserir corretamente na lista de compras
function validacao(){
	//variável que irá receber a descrição do item para inserir na lista de compras
	var descricao = document.getElementById('descricao').value;
	//variável que irá receber a quantidade do item para inserir na lista de compras
	var quantidade = document.getElementById('quantidade').value;
	//variável que irá receber o valor do item para inserir na lista de compras
	var valor = document.getElementById('valor').value;
	//variável que irá apresentar o erro apresentado após uma informação errada dos dados do item da compra
	var erros = "";

	//esconde a div erros na página
	document.getElementById('erros').style.display = 'none';

	//verifica se a descrição está sem nenhum preenchimento no input
	if(descricao === ""){
		erros += '<p>Falta o Preenchimento da Descrição</p>';
	}

	//verifica se a quantidade está sem nenhum preenchimento no input
	if(quantidade === ""){
		erros += '<p>Falta o Preenchimento da Quantidade</p>';
	}
	//verifica se a quantidade foi preenchida apenas com números inteiros
	else if(quantidade != parseInt(quantidade)){
		erros += '<p>Digite um valor válido para a quantidade</p>';
	}

	//verifica se o valor está sem nenhum preenchimento no input
	if(valor === ""){
		erros += '<p>Falta o Preenchimento do Valor</p>';
	}
	//verifica se o valor foi preenchido apenas com números floats
	else if(valor != parseFloat(valor)){
		erros += '<p>Digite um valor válido para o valor</p>';
	}

	//verifica se há erros no preenchimento dos inputs
	if(erros != ""){
		//mostra a div erros na página
		document.getElementById('erros').style.display = 'block';
		//definindo um style para a div erros
		document.getElementById('erros').style.backgroundColor = 'green';
		document.getElementById('erros').style.color = 'white';
		document.getElementById('erros').style.padding = '10px';
		document.getElementById('erros').style.margin = '10px';
		document.getElementById('erros').style.borderRadius = '12px';
		//imprime os erros ocorridos na página
		document.getElementById('erros').innerHTML = '<h3>Erros: </h3>' + erros;

		//se houver erros, retorna 0
		return 0;
	}
	//se não houver erros, retorna 1
	else{
		return 1;
	}
}

//utilizando a função setLista
setLista(lista);
//impressão no log para verificar se deu certo o código
console.log(getTotal(lista));