function planoTrabalho (plano, salario) {
    switch (plano) {
        case 'A':
            return salario * 1.1
        case 'B':
            return salario * 1.15
        case 'C': 
            return salario * 1.2
        default:
            return "Plano inválido."
    }
}

console.log(planoTrabalho('A', 1000))
console.log(planoTrabalho('B', 1000))
console.log(planoTrabalho('C', 1000))
console.log(planoTrabalho('D', 1000))