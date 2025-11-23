const user = JSON.parse(
  localStorage.getItem("current_user") ||
  localStorage.getItem("mv_user_global") ||
  localStorage.getItem("user")
);

const logado = localStorage.getItem("logado");

if (logado === "true" && user) {
  const navLogin = document.querySelector(".nav-login");

  let foto = "../assets/img/pfp.jpg";

  if (user.foto && user.foto.startsWith("data:image")) {
    foto = user.foto;
  }

  navLogin.innerHTML = `
    <div class="login-perfil">
      <span class="user-nome">Olá, ${user.usuario}</span>
      <img src="${foto}" alt="Foto do perfil" class="user-pfp">
      <div class="perfil-opcoes">    
        <button id="btn-account" class="btn-conta">Conta</button>
        <button id="btn-logout" class="btn-conta btn-sair">Sair</button>
      </div>
    </div>
  `;

  document.getElementById("btn-account").addEventListener("click", () => {
    window.location.href = "pages/perfil.html";
  });

  document.getElementById("btn-logout").addEventListener("click", () => {
    localStorage.removeItem("logado");
    localStorage.removeItem("current_user");
    window.location.reload();
  });
}
