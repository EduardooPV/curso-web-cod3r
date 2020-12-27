function paresImpares (vetorNumber) {
    let qtdimpar = 0
    let qtdpar = 0
    for (let c = 0; c < vetorNumber.length; c++) {
        if (vetorNumber[c] % 2 == 0) {
            qtdpar++
        } else {
            qtdimpar++
        }
    }
    console.log(`${qtdpar} números pares, ${qtdimpar} números impares.`)
}

numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
paresImpares(numeros)