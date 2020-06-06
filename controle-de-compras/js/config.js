//função para setar a configuração
function setConfig(){
	//objeto 
	var texts = {
		"title": "Controle de Compras"
	};
	//setar o título do documento index
	document.title = texts.title;
	//setar o brand do navbar
	document.getElementById('navTitle').innerHTML = texts.title;
}

setConfig();