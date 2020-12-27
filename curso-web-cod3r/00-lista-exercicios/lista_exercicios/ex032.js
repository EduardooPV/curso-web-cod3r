function mediaAritmetica (vetor) {
    let soma = 0
    for(let c = 0; c < vetor.length; c++) {
        soma += vetor[c]
    }
    return soma / vetor.length
}

vetor = [1,2,3,4,5]

console.log(mediaAritmetica(vetor))