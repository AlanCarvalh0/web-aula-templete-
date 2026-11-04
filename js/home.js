import { dados_das_noticias } from "./db.js";

const container_das_noticias = document.getElementById("noticias");
const opcao_noticia = document.getElementById("opcao-noticia");
let noticias_visiveis = false;

opcao_noticia.addEventListener("click", (evento) => {
    evento.preventDefault();
    alternarApresentacaoDasNoticias();
});

function alternarApresentacaoDasNoticias() {
    if (noticias_visiveis) {
        container_das_noticias.innerHTML = "";
        noticias_visiveis = false;
        return;
    }

    dados_das_noticias.forEach((noticia) => {
        const cartao = document.createElement("article");
        cartao.className = "cartao";
        cartao.innerHTML = `
            <img src="${noticia.imagem}" alt="${noticia.titulo}" class="imagem-do-cartao">
            <section class="corpo-do-cartao">
                <h2 class="titulo-do-cartao">${noticia.titulo}</h2>
                <p class="classificacao">
                    <span class="categoria-da-noticia">${noticia.categoria}</span>
                    <span class="data-da-noticia">${noticia.data}</span>
                </p>
                <p class="descricao-da-noticia">${noticia.descricao}</p>
                <span class="autor-da-noticia">${noticia.autor}</span>
            </section>
        `;
        container_das_noticias.appendChild(cartao);
    });

    noticias_visiveis = true;
}