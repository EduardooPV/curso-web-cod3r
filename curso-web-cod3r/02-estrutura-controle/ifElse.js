const ImprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado')
    }
}

ImprimirResultado(5)
ImprimirResultado(8)
ImprimirResultado('Epa!') // Cuidado !!