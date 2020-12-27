function maiorMenor (vetor) {
    let maior
    let menor
    for(let c = 0; c < vetor.length; c++) {
        if (maior === undefined && menor === undefined) {
            maior = vetor[c]
            menor = vetor[c]
        } else {
            if (vetor[c] < menor) {
                menor = vetor[c]
            }
            if (vetor[c] > maior) {
                maior = vetor[c]
            }
        }
    }
    return[menor, maior]
}

vetor = [22,42,56,12,4242,2,]

console.log(maiorMenor(vetor))

// Não consegui !!