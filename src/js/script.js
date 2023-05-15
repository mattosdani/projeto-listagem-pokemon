/* passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
   passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
   passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
   passo 4 - adicionar a classe modo-escuro no body
   passo 5 - trocar a imagem do botão de alterar tema para lua
   passo 6 - verificar se o body já tem a classe modo-escuro
   passo 7 - remover a classe do modo-escuro do body
   passo 8 - trocar a imagem do botão de alterar tema para sol */

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")
    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");

    }
});

