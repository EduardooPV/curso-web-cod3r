function teste1(numero) {
    if(numero > 7) 
        console.log(numero)
    console.log('Final')
}

teste1(8)
teste1(6)

function teste2(numero) {
    if(numero > 7); { // Cuidado com o ;, não usar com IF
        console.log(numero)
    }
}

teste2(6)
teste2(8)