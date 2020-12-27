// Função sem retorno
function imprimirSoma(numero1, numero2) {
    console.log(numero1 + numero2)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6, 7, 8)
imprimirSoma()

// Função com retorno
function somar(numero1, numero2 = 1) {
    return numero1 + numero2
}

console.log(somar(2, 3))
console.log(somar(4))
console.log(somar())