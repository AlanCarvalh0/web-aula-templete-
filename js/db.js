const STORAGE_KEY = "usuarios_do_site";

const usuario = {
    nome: "Administrador",
    email: "adm@email.com",
    senha: "admin"
};

export const usuarioAdmin = {
    nome: "Administrador",
    email: "adm@email.com",
    senha: "admin"
};


function obterUsuarios() {
    const dados = localStorage.getItem(STORAGE_KEY);

    if (!dados) {
        salvarUsuarios([usuario]);
        return [usuario];
    }

    try {
        const usuarios = JSON.parse(dados);
        return Array.isArray(usuarios) && usuarios.length > 0 ? usuarios : [usuario];
    } catch (error) {
        return [usuario];
    }
}

function salvarUsuarios(usuarios) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
}

function cadastrarUsuario(novoUsuario) {
    const usuarios = obterUsuarios();
    const emailJaExiste = usuarios.some(function (usuarioCadastrado) {
        return usuarioCadastrado.email.toLowerCase() === novoUsuario.email.toLowerCase();
    });

    if (emailJaExiste) {
        return {
            ok: false,
            mensagem: "Este e-mail já está cadastrado."
        };
    }

    usuarios.push({
        nome: novoUsuario.nome,
        email: novoUsuario.email.toLowerCase(),
        senha: novoUsuario.senha
    });

    salvarUsuarios(usuarios);

    return {
        ok: true,
        mensagem: "Cadastro realizado com sucesso!"
    };
}