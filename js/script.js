const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

function buttonclick() {
	mensagem.textContent = "Funcionou!!!"
}

botao.addEventListener("click",buttonclick);

if("serviceWorker" in navigator){
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("./service-worker.js")
			.then(reg => {
				console.log("Service Worker registrado!", reg)
;			})
			.catch(err => {
				console.log("Erro ao registrar:", err);
			})
	});
}