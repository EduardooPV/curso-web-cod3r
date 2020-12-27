function carros (carro) {
    switch (carro) {
        case 'Hatch':
            return "Compra efetuada com sucesso"
        case 'Sedans':
        case 'Motocicletas':
        case 'Caminhonetes':
            return "Tem certeza que não prefere este modelo?"
        default:
            return "Não trabalhamos com este tipo de automóvel aqui."
    }
}

console.log(carros('Hatch'))
console.log(carros('Sedans'))
console.log(carros('Motocicletas'))
console.log(carros('Caminhonetes'))
console.log(carros('Bike'))