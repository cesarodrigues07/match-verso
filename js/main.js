const user = JSON.parse(
  localStorage.getItem("current_user") ||
  localStorage.getItem("mv_user_global") ||
  localStorage.getItem("user")
);

const logado = localStorage.getItem("logado");

if (logado === "true" && user) {
  const navLogin = document.querySelector(".nav-login");

  let foto = "../assets/img/pfp.jpg";
<<<<<<< HEAD
=======

>>>>>>> 22c2d6182c8fa57eeef36d39ecc0c96a53685fc8
  if (user.foto && user.foto.startsWith("data:image")) {
    foto = user.foto;
  }

  navLogin.innerHTML = `
    <div class="login-perfil">
      <span class="user-nome">Olá, ${user.usuario}</span>
      <a href="pages/perfil.html"><img src="${foto}" class="user-pfp"></a>
      <div class="perfil-opcoes">
        <button id="btn-logout" class="btn-sair">Sair</button>
      </div>
    </div>
  `;

<<<<<<< HEAD
=======
  document.getElementById("btn-account").addEventListener("click", () => {
    window.location.href = "pages/perfil.html";
  });

>>>>>>> 22c2d6182c8fa57eeef36d39ecc0c96a53685fc8
  document.getElementById("btn-logout").addEventListener("click", () => {
    localStorage.removeItem("logado");
    localStorage.removeItem("current_user");
    window.location.reload();
  });
}
