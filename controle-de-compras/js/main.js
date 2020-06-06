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

//impressão no log para verificar se deu certo o código
console.log(getTotal(lista));