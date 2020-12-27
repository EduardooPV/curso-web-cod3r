function criarProduto(nome, preco) {
    return {
        nome,
        preco, 
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 1999.99))
console.log(criarProduto('Computador', 1499.99))
console.log(criarProduto('Mouse', 120.00))
console.log(criarProduto('Teclado', 99.99))