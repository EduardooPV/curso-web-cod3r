function negativos (vetor) {
    let qtdNegativos = 0
    for(let c = 0; c < vetor.length; c++) {
        if (Math.sign(vetor[c]) == -1) {
            qtdNegativos++
        }
    }
    return qtdNegativos
}

vetor = [-5,-4,-3,-2,-1,1,2,3,4,5]

console.log(negativos(vetor))