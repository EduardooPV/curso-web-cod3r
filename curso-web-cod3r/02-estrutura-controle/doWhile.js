function getInteiroAleatorioEntre(minimo, maximo) {
    const valor = Math.random() * (maximo - minimo) + minimo
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida: ${opcao}`)
} while (opcao != -1)