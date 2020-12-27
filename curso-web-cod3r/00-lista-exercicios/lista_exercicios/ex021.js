function planoSaude (idade) {
    valor = 100.00
    if ( idade < 10 ) { 
        valor += 80.00
        return `O paciente é uma criança, e pagara R$${valor} pelo convenio`
    } else if ( idade < 30 ) { 
        valor += 50.00
        return `O pacienca é um adulto, e pagara R$${valor} pelo convenio`
    } else if ( idade < 60 ) { 
        valor += 95.00
        return `O pacience é idoso classe 1, e pagara R$${valor} pelo convenio`
    } else if ( idade > 60 ) {
        valor += 130.00
        return `O paciente é idoso classe 2, e pagara R$${valor} pelo convenio`
    }
}

console.log(planoSaude(7))
console.log(planoSaude(20))
console.log(planoSaude(44))
console.log(planoSaude(77))