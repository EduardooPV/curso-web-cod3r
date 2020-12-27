function calculadora (num1, operador, num2) {
    switch (operador) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return "Operação inválida."
    }
}

console.log(calculadora(5,'+',5))
console.log(calculadora(5,'-',5))
console.log(calculadora(5,'*',5))
console.log(calculadora(5,'/',5))
console.log(calculadora(5,'a',5))