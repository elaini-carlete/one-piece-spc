const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("clicado");
        personagens[index].classList.add("selecionado");
    })
}) 

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoClicado = document.querySelector(".botao.clicado");
    botaoClicado.classList.remove("clicado");
}