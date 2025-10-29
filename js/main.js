// Campeonatos Page

const cards = document.querySelectorAll(".cards-list a");
const opcoes = document.querySelectorAll(".keys");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault(); // impede o link de rolar a página

    opcoes.forEach((div) => (div.style.display = "none")); // esconde todas as opções

    const jogo = card.dataset.jogo; // pega o valor do atributo data-jogo
    const alvo = document.getElementById(`opcoes-${jogo}`);
    if (alvo) alvo.style.display = "block"; // mostra as opções do jogo clicado
  });
});
