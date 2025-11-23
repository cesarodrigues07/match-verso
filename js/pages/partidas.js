const cards = document.querySelectorAll(".cards-list a");
const keys = document.querySelectorAll(".keys");

cards.forEach(card => {
  card.addEventListener("click", e => {
    e.preventDefault();
    const jogo = card.getAttribute("data-jogo");
    const nome = card.getAttribute("data-jogo-nome");

    jogoAtual = jogo;
    nomeJogoAtual = nome;

    keys.forEach(menu => (menu.style.display = "none"));
    const menuSelecionado = document.getElementById(`opcoes-${jogo}`);
    if (menuSelecionado) menuSelecionado.style.display = "flex";
  });
});

let jogoAtual = null;
let nomeJogoAtual = null;

const btnFecharMenus = document.querySelectorAll(".fechar-menu");
btnFecharMenus.forEach(botao => {
  botao.addEventListener("click", () => {
    keys.forEach(menu => (menu.style.display = "none"));
  });
});

const botoesCriar = document.querySelectorAll(".btn-criar-sala");
botoesCriar.forEach(botao => {
  botao.addEventListener("click", () => {
    const jogo = botao.getAttribute("data-jogo");
    const inputNome = document.getElementById(`nome-sala-${jogo}`);
    const selectModo = document.getElementById(`modo-${jogo}`);
    const lista = document.getElementById(`lista-salas-${jogo}`);

    const nome = inputNome.value.trim();
    const modo = selectModo.value;

    if (nome === "") return alert("Escolhe um nome pra sala né mano 😭");

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

    sala.querySelector(".btn-excluir").addEventListener("click", () => {
      sala.remove();
    });

    inputNome.value = "";
  });
});

const times = ["Barcelona", "Real Madrid", "PSG", "Manchester City", "Liverpool"];

const casa = document.getElementById("casaSelect");
const fora = document.getElementById("foraSelect");
const start = document.getElementById("startMatch");

times.forEach(t => {
  casa.innerHTML += `<option>${t}</option>`;
  fora.innerHTML += `<option>${t}</option>`;
});

start.addEventListener("click", () => {
  const partida = {
    homeTeam: casa.value,
    awayTeam: fora.value,
    difficulty: dificuldade.value,
    duration: tempo.value,
    stadium: estadio.value,
    weather: clima.value,
  };

  console.log("CONFIG DA PARTIDA:", partida);
  alert("Partida inicializada!");
});

function gerarCodigo() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let codigo = "MV-";
  for (let i = 0; i < 6; i++) codigo += chars[Math.floor(Math.random() * chars.length)];
  return codigo;
}

const startMatch = document.getElementById("startMatch");
const popup1 = document.getElementById("popup-config");
const popup2 = document.getElementById("popup-final");
const fechar1 = document.getElementById("fecharPopup1");
const fechar2 = document.getElementById("fecharPopup2");

startMatch.addEventListener("click", () => {
  document.getElementById("confCasa").innerText = casaSelect.value;
  document.getElementById("confFora").innerText = foraSelect.value;
  document.getElementById("confTempo").innerText = tempo.value;
  document.getElementById("confEstadio").innerText = estadio.value;
  document.getElementById("confClima").innerText = clima.value;

  const codigo = gerarCodigo();
  document.getElementById("codigoPartida").innerText = codigo;

  popup1.classList.remove("hidden");
});

fechar1.addEventListener("click", () => {
  popup1.classList.add("hidden");
});

document.getElementById("confirmarPartida").addEventListener("click", () => {
  popup1.classList.add("hidden");
  popup2.classList.remove("hidden");
});

fechar2.addEventListener("click", () => {
  popup2.classList.add("hidden");
});

document.getElementById("concluirPartida").addEventListener("click", () => {
  const vencedor = document.getElementById("vencedor").value;
  const placar = document.getElementById("placar").value;

  const timeCasa = casaSelect.value;
  const timeFora = foraSelect.value;

  const horario = getHorarioPartida();
  const nomeDoJogo = nomeJogoAtual || "Jogo Desconhecido";

  const card = document.createElement("div");
  card.classList.add("historico-card");

  card.innerHTML = `
    <div class="historico-info">
      <strong class="jogo-title">${nomeDoJogo}</strong><br>
      <strong>${timeCasa} vs ${timeFora}</strong><br>
      Vencedor: ${vencedor}<br>
      Resultado: ${placar}<br>
      <span class="horario">${horario}</span>
    </div>
    <button class="btn-excluir">Excluir</button>
  `;

  document.getElementById("historicoList").appendChild(card);

  card.querySelector(".btn-excluir").addEventListener("click", () => {
    card.remove();
  });

  popup2.classList.add("hidden");
  document.getElementById("placar").value = "";
});

function getHorarioPartida() {
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, "0");
  const minutos = agora.getMinutes().toString().padStart(2, "0");
  const dia = agora.getDate().toString().padStart(2, "0");
  const mes = (agora.getMonth() + 1).toString().padStart(2, "0");
  const ano = agora.getFullYear();
  return `${dia}/${mes}/${ano} às ${horas}:${minutos}`;
}
