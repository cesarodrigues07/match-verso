document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(
    localStorage.getItem("current_user") ||
    localStorage.getItem("mv_user_global") ||
    localStorage.getItem("user")
  );
  const logado = localStorage.getItem("logado");

  const nomeEl = document.getElementById("nomeUsuario");
  const emailEl = document.getElementById("emailUsuario");
  const senhaEl = document.getElementById("senhaUsuario");
  const fotoEl = document.getElementById("fotoPerfil");
  const fotoInput = document.getElementById("fotoInput");
  const btnEditar = document.getElementById("editarPerfil");
  const btnMostrar = document.getElementById("mostrarSenha");
  const btnSair = document.getElementById("sair");

  if (!window.location.pathname.includes("perfil.html")) return;

  if (!logado || !user) {
    alert("Você precisa estar logado para acessar sua conta!");
    window.location.href = "login.html";
    return;
  }

  // Mostra dados do usuário
  nomeEl.textContent = user.usuario;
  emailEl.textContent = user.email;
  senhaEl.textContent = "••••••••";
  fotoEl.src = user.foto || "../assets/img/pfp.jpg";

  // Mostrar / ocultar senha
  let senhaVisivel = false;
  btnMostrar.addEventListener("click", () => {
    senhaVisivel = !senhaVisivel;
    senhaEl.textContent = senhaVisivel ? user.senha : "••••••••";
    btnMostrar.textContent = senhaVisivel ? "Ocultar Senha" : "Mostrar Senha";
  });

  // Editar nome / email
  btnEditar.addEventListener("click", () => {
    const novoNome = prompt("Novo nome de usuário:", user.usuario);
    const novoEmail = prompt("Novo email:", user.email);

    if (novoNome) user.usuario = novoNome;
    if (novoEmail) user.email = novoEmail;

    nomeEl.textContent = user.usuario;
    emailEl.textContent = user.email;

    localStorage.setItem("current_user", JSON.stringify(user));
    localStorage.setItem("mv_user_global", JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));

    alert("Perfil atualizado!");
  });

  // Trocar foto de perfil
  fotoInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function () {
      const base64 = reader.result;
      fotoEl.src = base64;
      user.foto = base64;
      localStorage.setItem("current_user", JSON.stringify(user));
      localStorage.setItem("mv_user_global", JSON.stringify(user));
      localStorage.setItem("user", JSON.stringify(user));
    };
    reader.readAsDataURL(file);
  });

  // Botão sair
  btnSair.addEventListener("click", () => {
    localStorage.removeItem("logado");
    localStorage.removeItem("current_user");
    window.location.href = "../index.html";
  });
});