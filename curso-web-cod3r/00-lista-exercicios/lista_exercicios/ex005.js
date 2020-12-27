function formatarValorDecimal (valordecimal) {
    valorReal = `R$ ${valordecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorReal)
}

formatarValorDecimal(0.1 + 0.2)

// Não consegui!!