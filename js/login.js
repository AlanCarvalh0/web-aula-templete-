function autenticarUsuario(emailDigitado, senhaDigitada) {
    const usuarios = obterUsuarios();
    const usuarioEncontrado = usuarios.find(function (usuarioCadastrado) {
        return usuarioCadastrado.email.toLowerCase() === String(emailDigitado).trim().toLowerCase();
    });

    if (!usuarioEncontrado) {
        return {
            ok: false,
            mensagem: "Usuário não encontrado."
        };
    }

    if (usuarioEncontrado.senha !== senhaDigitada) {
        return {
            ok: false,
            mensagem: "Senha incorreta."
        };
    }

    return {
        ok: true,
        mensagem: "Login realizado com sucesso!",
        usuario: usuarioEncontrado
    };
}

document.addEventListener("DOMContentLoaded", function () {
    const formularioCadastro = document.querySelector(".form-cadastro");

    if (!formularioCadastro) {
        return;
    }

    formularioCadastro.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome")?.value.trim() || "";
        const email = document.getElementById("email")?.value.trim() || "";
        const senha = document.getElementById("senha")?.value || "";

        if (!nome || !email || !senha) {
            alert("Preencha todos os campos antes de cadastrar.");
            return;
        }

        const resultado = cadastrarUsuario({ nome, email, senha });

        if (!resultado.ok) {
            alert(resultado.mensagem);
            return;
        }

        alert(resultado.mensagem);
        formularioCadastro.reset();
        window.location.href = "index.html";
    });
});