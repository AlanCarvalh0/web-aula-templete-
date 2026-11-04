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




export const dados_das_noticias = [
  {
    id: 0,
    titulo: "Transporte Público em Belo Horizonte",
    descricao:
      "O transporte público em BH é composto por um extenso sistema de ônibus urbanos.",
    conteudo:
      "O transporte público em BH é composto por um extenso sistema de ônibus urbanos, gerido pela BHTRANS, e pelo Metrô BH, que opera na região metropolitana. Para utilizar os serviços, você pode adquirir o Cartão BHBUS, que permite recargas via dinheiro, Pix ou boleto, diretamente nos pontos ou pelo aplicativo BHBus+. O aplicativo oferece funcionalidades como rastreamento de veículos em tempo real e cálculo de rotas.",
    categoria: "Transporte",
    autor: "Ana Clara Pereira",
    data: "16/02/2026",
    imagem: "./assets/img/mobilidade.png",
  },
  {
    id: 1,
    titulo: "Tecnologia 6G",
    descricao: "A Tecnologia 6G é a Próxima Geração de Redes Móveis",
    conteudo:
      "A tecnologia 6G é a próxima geração de redes móveis, ainda em desenvolvimento, que sucederá o 5G. Prevista para ser lançada comercialmente por volta de 2030, a 6G promete uma revolução na conectividade, com velocidades muito superiores, latência quase instantânea e integração massiva de inteligência artificial (IA).",
    categoria: "Tecnologia",
    autor: "Bruno Costa e Silva",
    data: "09/03/2026",
    imagem: "./assets/img/tecnologia6g.png",
  },
  {
    id: 2,
    titulo: "Festival de Música de Belo Horizonte",
    descricao: "Belo Horizonte tem Vários Festivais de Música",
    conteudo:
      "Belo Horizonte tem vários festivais de música, como o Festival Planeta Brasil, que é o maior da cidade, e a Virada Cultural, um evento gratuito de 24 horas focado em diversidade artística. Também existem festivais temáticos, como o Épop BH para música pop autoral e o Festival Alvoroço, focado em música brasileira em formato acústico e intimista.",
    categoria: "Cultura",
    autor: "Carla Vieira Grossi",
    data: "20/04/2026",
    imagem: "./assets/img/festivaldemusica.png",
  },
  {
    id: 3,
    titulo: "Gastronomia em Belo Horizonte",
    descricao: "Gastronomia mineira recebe prêmio internacional.",
    conteudo:
      "Minas Gerais tem vários festivais gastronômicos. Em Belo Horizonte, por exemplo, há o Comida de Boteco, um evento que destaca a culinária local anualmente e reúne pessoas de todas as idades e lugares do Brasil.",
    categoria: "Gastronomia",
    autor: "Fabiana Pereira Lima",
    data: "04/05/2026",
    imagem: "./assets/img/gastronomia.png",
  },
];