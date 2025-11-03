const cards = document.querySelectorAll(".cards-list a");
const menuAba = document.getElementById("menuAba");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    menuAba.classList.add("ativo");
  });
});

function fecharMenu() {
  menuAba.classList.remove("ativo");
}
