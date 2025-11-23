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

  nomeEl.textContent = user.usuario;
  emailEl.textContent = user.email;
  senhaEl.textContent = "••••••••";
  fotoEl.src = user.foto || "../assets/img/pfp.jpg";

  let senhaVisivel = false;
  btnMostrar.addEventListener("click", () => {
    senhaVisivel = !senhaVisivel;
    senhaEl.textContent = senhaVisivel ? user.senha : "••••••••";
    btnMostrar.textContent = senhaVisivel ? "Ocultar Senha" : "Mostrar Senha";
  });

  const Elnome = document.getElementById("nomeUsuario");
  const Elemail = document.getElementById("emailUsuario");
  const Elsenha = document.getElementById("senhaUsuario");

  const inputNome = document.getElementById("inputNome");
  const inputEmail = document.getElementById("inputEmail");
  const inputSenha = document.getElementById("inputSenha");

  const btnSalvarPerfil = document.getElementById("salvarPerfil");

  let userx = JSON.parse(localStorage.getItem("current_user")) || {};

  nomeEl.textContent = userx.usuario || "Usuário";
  emailEl.textContent = userx.email || "email@exemplo.com";
  senhaEl.textContent = userx.senha ? "•".repeat(userx.senha.length) : "••••••••";

  btnSalvarPerfil.addEventListener("click", () => {
    const novoNome = inputNome.value.trim();
    const novoEmail = inputEmail.value.trim();
    const novaSenha = inputSenha.value.trim();

    if (!novoNome || !novoEmail || !novaSenha) {
      alert("Preencha todos os campos");
      return;
    }

    user.usuario = novoNome;
    user.email = novoEmail;
    user.senha = novaSenha;

    Elnome.textContent = user.usuario;
    Elemail.textContent = user.email;
    Elsenha.textContent = "•".repeat(user.senha.length);

    localStorage.setItem("current_user", JSON.stringify(user));
    localStorage.setItem("mv_user_global", JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));

    alert("Perfil atualizado! 🔥");
  });

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

  btnSair.addEventListener("click", () => {
    localStorage.removeItem("logado");
    localStorage.removeItem("current_user");
    window.location.href = "../index.html";
  });
});
