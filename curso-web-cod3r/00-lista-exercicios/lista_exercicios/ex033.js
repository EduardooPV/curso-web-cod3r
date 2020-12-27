let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Batata', 'Beringela', 'Brocolis', 'Beterraba']
let vetroDouble = [0.1, 0.2, 0.3, 0.4]

function concatenar (...args) {
    resultado = []
    for (let c = 0; c < arguments.length; c++) {
        resultado = resultado.concat(arguments[c])
   }
   return resultado;
}

console.log(concatenar(vetorInteiro, vetroDouble))
console.log(concatenar(vetroDouble, vetorString))
console.log(concatenar(vetorInteiro, vetorString, vetroDouble))