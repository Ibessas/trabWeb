function calculaTotal(){
	var nome = document.querySelector("#login").value;
	var senha = document.querySelector("#password").value;

	document.querySelector("#total").value = nome + " " + senha;

}