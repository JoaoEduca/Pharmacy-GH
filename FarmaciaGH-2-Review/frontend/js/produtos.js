import { db, collection, getDocs, query, where } from "./firebase.js";

// Busca os produtos do banco de dados
async function carregarProdutos() {
  const container = document.getElementById("lista-produtos");
  container.innerHTML = `<p class="text-center">Carregando produtos...</p>`;

  try {
    const snapshot = await getDocs(collection(db, "produtos"));
    const produtos = [];
    snapshot.forEach(doc => produtos.push({ id: doc.id, ...doc.data() }));

    atualizarContador(produtos.length);
    renderizarProdutos(produtos);
  } catch (erro) {
    container.innerHTML = `<p class="text-center text-danger">Erro ao carregar produtos.</p>`;
    console.error(erro);
  }
}

// Categorias
async function filtrarCategoria(categoria) {
  const container = document.getElementById("lista-produtos");
  container.innerHTML = `<p class="text-center">Carregando...</p>`;

  try {
    const q = query(collection(db, "produtos"), where("categoria", "==", categoria));
    const snapshot = await getDocs(q);
    const produtos = [];
    snapshot.forEach(doc => produtos.push({ id: doc.id, ...doc.data() }));

    atualizarContador(produtos.length);
    renderizarProdutos(produtos);
  } catch (erro) {
    console.error(erro);
  }
}

// Busca produto pelo nome
async function buscarProdutos(termo) {
  if (!termo || termo.length < 2) {
    carregarProdutos();
    return;
  }

  const container = document.getElementById("lista-produtos");
  container.innerHTML = `<p class="text-center">Buscando...</p>`;

  try {
    const snapshot = await getDocs(collection(db, "produtos"));
    const produtos = [];
    snapshot.forEach(doc => {
      const dados = { id: doc.id, ...doc.data() };
      if (dados.nome.toLowerCase().includes(termo.toLowerCase())) {
        produtos.push(dados);
      }
    });

    atualizarContador(produtos.length);
    renderizarProdutos(produtos);
  } catch (erro) {
    console.error(erro);
  }
}

// cards no HTML
function renderizarProdutos(produtos) {
  const container = document.getElementById("lista-produtos");

  if (produtos.length === 0) {
    container.innerHTML = `<p class="text-center">Nenhum produto encontrado.</p>`;
    return;
  }

  // Faz matriz de 5 colunas
  let html = "";
  for (let i = 0; i < produtos.length; i += 5) {
    const linha = produtos.slice(i, i + 5);
    html += `<div class="row">`;
    linha.forEach(produto => {
      html += `
        <div class="col-sm">
          <div class="card text-center bg-card">
            <div class="card-body">
              <img src="${produto.imagem}" alt="${produto.nome}">
              <h5 class="card-title">${produto.nome}</h5>
              <p>R$${parseFloat(produto.preco).toFixed(2)}</p>
              <button class="btn btn-azul" onclick="adicionarCarrinho('${produto.id}', '${produto.nome}', ${produto.preco}, '${produto.imagem}')">
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>`;
    });
    html += `</div>`;
  }

  container.innerHTML = html;
}

// Atualiza o contador de produtos
function atualizarContador(total) {
  const contador = document.getElementById("contador-produtos");
  if (contador) contador.textContent = `${total} produtos encontrados`;
}

// Adiciona ao carrinho (salvo no localStorage)
window.adicionarCarrinho = function(id, nome, preco, imagem) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
  const existente = carrinho.find(item => item.id === id);

  if (existente) {
    existente.quantidade += 1;
  } else {
    carrinho.push({ id, nome, preco, imagem, quantidade: 1 });
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert(`"${nome}" adicionado ao carrinho!`);
}

// Inicializa ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  carregarProdutos();

  // Barra de busca
  const inputBusca = document.querySelector("input[type='search']");
  const btnBusca = document.querySelector("button[type='submit']");

  if (btnBusca) {
    btnBusca.addEventListener("click", (e) => {
      e.preventDefault();
      buscarProdutos(inputBusca.value);
    });
  }

  // Filtros de categoria (se existirem botões com data-categoria)
  document.querySelectorAll("[data-categoria]").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-categoria");
      cat === "todos" ? carregarProdutos() : filtrarCategoria(cat);
    });
  });
});