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
		tabela += '<tr><th scope="row">' + lista[key].descricao + '</th><td>' + lista[key].quantidade + '</td><td>' + lista[key].valor + '</td><td>Editar | Deletar</td></tr>';
	}
	tabela += '</tbody>';
	document.getElementById('listaTabela').innerHTML = tabela;
}

//utilizando a função setLista
setLista(lista);
//impressão no log para verificar se deu certo o código
console.log(getTotal(lista));