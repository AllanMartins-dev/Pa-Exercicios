
let produtos = [
  { id: 1,
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônicos",
    tags: ["portátil", "trabalho", "estudo"] 
  },
  { id: 2,
    nome: "Mouse",
    preco: 50,
    categoria: "Eletrônicos",
    tags: ["periférico", "escritório"] 
  },
  { id: 3,
    nome: "Cadeira Gamer",
    preco: 1200,
    categoria: "Móveis",
    tags: ["conforto", "gamer"] 
  },
  {
    id: 4,
    nome: "Smartphone",
    preco: 2000,
    categoria: "Eletrônicos",
    tags: ["celular", "câmera", "5G"] 
  },
  { id: 5,
    nome: "Mesa de Escritório",
    preco: 800,
    categoria: "Móveis",
    tags: ["madeira", "trabalho"] 
  },
];


console.log("--- Produtos de Eletrônicos ---");
for (let i = 0; i < produtos.length; i++) {
  if (produtos[i].categoria === "Eletrônicos") {
    console.log(produtos[i].nome);
  }
}


console.log("--- Produtos com preço <= 2000 ---");
for (let i = 0; i < produtos.length; i++) {
  if (produtos[i].preco <= 2000) {
    console.log(produtos[i].nome + " R$ " + produtos[i].preco);
  }
}


let produtoEscolhido = produtos[0];
console.log("--- Tags de " + produtoEscolhido.nome + " ---");
for (let i = 0; i < produtoEscolhido.tags.length; i++) {
  console.log(produtoEscolhido.tags[i]);
}


let somaPrecos = 0;
for (let i = 0; i < produtos.length; i++) {
  somaPrecos = somaPrecos + produtos[i].preco;
}
console.log("--- Soma dos preços ---");
console.log("Total: R$ " + somaPrecos);