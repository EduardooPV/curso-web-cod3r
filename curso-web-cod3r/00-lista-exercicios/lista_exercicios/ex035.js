let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]
function adicionar (vetorInicial, vetorAdicionar) {
    for ( let c = 0; c < vetorAdicionar.length; c++) {
        console.log(vetorInicial[c])
        vetorInicial.push(vetorAdicionar[c])
    }
    console.log('Vetor adicionado: ' + vetorAdicionar)
    console.log('Vetor resultado :' + vetorInicial)
}

adicionar(vetorPilha, vetorAdiciona)