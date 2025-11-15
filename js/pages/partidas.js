// Seleciona cards e menus
const cards = document.querySelectorAll(".cards-list a");
const keys = document.querySelectorAll(".keys");

// Abrir menu correspondente ao jogo clicado
cards.forEach(card => {
  card.addEventListener("click", (e) => {
    e.preventDefault();

    const jogo = card.getAttribute("data-jogo"); // ex: cs2

    // Fecha todos
    keys.forEach(menu => menu.style.display = "none");

    // Abre só o certo
    const menuSelecionado = document.getElementById(`opcoes-${jogo}`);
    if (menuSelecionado) menuSelecionado.style.display = "flex";
  });
});


// Fechar menus
const btnFecharMenus = document.querySelectorAll(".fechar-menu");

btnFecharMenus.forEach(botao => {
  botao.addEventListener("click", () => {
    keys.forEach(menu => menu.style.display = "none");
  });
});


// Criar sala
const botoesCriar = document.querySelectorAll(".btn-criar-sala");

botoesCriar.forEach(botao => {
  botao.addEventListener("click", () => {

    const jogo = botao.getAttribute("data-jogo");
    const inputNome = document.getElementById(`nome-sala-${jogo}`);
    const selectModo = document.getElementById(`modo-${jogo}`);
    const lista = document.getElementById(`lista-salas-${jogo}`);

    const nome = inputNome.value.trim();
    const modo = selectModo.value;

    if (nome === "")
      return alert("Escolhe um nome pra sala né mano 😭");

    // Criando item da sala
    const sala = document.createElement("div");
    sala.classList.add("sala-item");
    sala.innerHTML = `
      <span><strong>${nome}</strong> (${modo})</span>
      <div class="sala-actions">
        <button class="btn-entrar">Entrar</button>
        <button class="btn-excluir">Excluir</button>
      </div>
    `;

    lista.appendChild(sala);

    // Excluir sala
    sala.querySelector(".btn-excluir").addEventListener("click", () => {
      sala.remove();
    });

    // Limpa input
    inputNome.value = "";
  });
});
