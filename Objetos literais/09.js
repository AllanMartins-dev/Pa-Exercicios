// Exercício 9: Carrinho de Compras Simples
const carrinho = [
  { produto: "Mouse", quantidade: 2, precoUnitario: 50 },
  { produto: "Teclado", quantidade: 1, precoUnitario: 150 },
  { produto: "Monitor", quantidade: 3, precoUnitario: 800 },
];

// 1. Imprimir cada item no formato pedido
console.log("--- Itens do carrinho ---");
for (let i = 0; i < carrinho.length; i++) {
  const item = carrinho[i];
  const subtotal = item.quantidade * item.precoUnitario;
  console.log(
    "Produto: " + item.produto +
    " | Qtd: " + item.quantidade +
    " | Preço unit: R$ " + item.precoUnitario +
    " | Subtotal: R$ " + subtotal
  );
}

// 2. Subtotal total
let subtotalTotal = 0;
for (let i = 0; i < carrinho.length; i++) {
  subtotalTotal += carrinho[i].quantidade * carrinho[i].precoUnitario;
}
console.log("Subtotal total: R$ " + subtotalTotal);

// 3. Desconto de 10% no total
const valorFinal = subtotalTotal - subtotalTotal * 0.1;
console.log("Valor final com 10% de desconto: R$ " + valorFinal);

// 4. Remover o segundo item (índice 1) criando um novo array
const novoCarrinho = [];
for (let i = 0; i < carrinho.length; i++) {
  if (i !== 1) {
    novoCarrinho.push(carrinho[i]);
  }
}

// 5. Imprimir o carrinho atualizado com novo total
console.log("--- Carrinho atualizado ---");
let novoTotal = 0;
for (let i = 0; i < novoCarrinho.length; i++) {
  const item = novoCarrinho[i];
  const subtotal = item.quantidade * item.precoUnitario;
  novoTotal += subtotal;
  console.log(
    "Produto: " + item.produto +
    " | Qtd: " + item.quantidade +
    " | Preço unit: R$ " + item.precoUnitario +
    " | Subtotal: R$ " + subtotal
  );
}
console.log("Novo total: R$ " + novoTotal);