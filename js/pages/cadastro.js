const formCad = document.querySelector("form");

formCad.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = formCad.querySelector('input[placeholder="Email"]').value.trim();
    const usuario = formCad.querySelector('input[placeholder="Usuário"]').value.trim();
    const senha = formCad.querySelector('input[placeholder="Senha"]').value;

    if (!usuario || !email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    const userData = { usuario, email, senha };
    localStorage.setItem("mv_user_global", JSON.stringify(userData));

    alert("Cadastro feito com sucesso!");
    window.location.href = "login.html";
});
