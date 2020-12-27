function lanchonete (codigo, quantidade) {
    switch (codigo){
        case 100:
            console.log(`R$${3 * quantidade}`)
            break
        case 200:
            console.log(`R$${4 * quantidade}`)
            break
        case 300:
            console.log(`R$${5.5 * quantidade}`)
            break
        case 400:
            console.log(`R$${7.5 * quantidade}`)
            break
        case 500:
            console.log(`R$${3.5 * quantidade}`)
            break
        case 600:
            console.log(`R$${2.8 * quantidade}`)
            break
        default:
            console.log('Código inválido.')
    }
}

lanchonete(100, 2)
lanchonete(200, 2)
lanchonete(300, 2)
lanchonete(400, 2)
lanchonete(500, 2)
lanchonete(600, 2)
lanchonete(700, 2)
