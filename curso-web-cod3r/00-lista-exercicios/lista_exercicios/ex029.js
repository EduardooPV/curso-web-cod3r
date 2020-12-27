function intervalo (vetor) {
    qtdIntervalo = 0
    for(let c = 0; c < vetor.length; c++) {
        if (vetor[c] >= 10 && vetor[c] <= 20) {
        qtdIntervalo++
        }
    }
    return `${qtdIntervalo} número entre 10 e 20`
}

vetor = [7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23]
console.log(intervalo(vetor))

vetor2 = [8,10,12,14,16,18,20,22]
console.log(intervalo(vetor2))