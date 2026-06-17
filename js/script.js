const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

function buttonclick() {
	mensagem.textContent = "Funcionou!!!"
}

botao.addEventListener("click",buttonclick);