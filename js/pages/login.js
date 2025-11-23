const formLogin = document.querySelector("form");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const usuario = formLogin
    .querySelector('input[placeholder="Usuário"]')
    .value.trim();

  const senha = formLogin
    .querySelector('input[placeholder="Senha"]')
    .value;

  const saved = JSON.parse(localStorage.getItem("mv_user_global"));

  if (!saved) {
    alert("Nenhum usuário encontrado! Faça o cadastro primeiro.");
    return;
  }

  if (usuario === saved.usuario && senha === saved.senha) {
    localStorage.setItem("logado", "true");
    localStorage.setItem("current_user", JSON.stringify(saved));
    alert("Login realizado com sucesso!");
    window.location.href = "../index.html";
  } else {
    alert("Usuário ou senha incorretos!");
  }
});
