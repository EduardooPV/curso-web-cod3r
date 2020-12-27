let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  // Recomendado para uma funcão pequena, return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => {
    return 'Olá'
}

ola = () => 'Olá'

ola = _ => 'Olá' // Possui um Param
console.log(ola())