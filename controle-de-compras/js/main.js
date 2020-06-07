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
		tabela += '<tr><th scope="row">' + formatarDescricao(lista[key].descricao) + '</th><td>' + lista[key].quantidade + '</td><td>' + formatarValor(lista[key].valor) + '</td><td><button onclick="setarAtualizacao('+ key +');" class="btn btn-primary">Editar</button> | Deletar</td></tr>';
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
}
//utilizando a função setLista
setLista(lista);
//impressão no log para verificar se deu certo o código
console.log(getTotal(lista));