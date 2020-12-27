let vetorNumericos = [1,2,3,4,5,6,7,8,9,10]

function multiplicaVetor (vetorNumerico, numero) { 
   let vetorResultado = []
   vetorNumerico.forEach(element => {
       vetorResultado.push(element * numero)
   });
   return vetorResultado
}

console.log(multiplicaVetor(vetorNumericos, 5))

// Quase consegui!!