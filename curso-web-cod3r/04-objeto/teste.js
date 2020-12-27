const salario = function (salario, desconto) {
    if (salario < 1500 ) {
        resultado = salario * 0.1
        return resultado
    } else {
        resultado = salario * 0.2
        return resultado
    }
}

console.log(salario(1500))