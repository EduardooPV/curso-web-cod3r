function frutas (fruta) {
    switch (fruta) {
        case "Maça": 
            return "Não vendemos essa fruta aqui"
        case "Kiwi":
            return "Estamos com escassez de kiwis"
        case "Melancia":
            return "Aqui está, são 3 reais o quilo"
        default:
            return "Fruta inválida, tente novamente"
    }
}

console.log(frutas("Maça"))
console.log(frutas("Kiwi"))
console.log(frutas("Melancia"))
console.log(frutas("Batata"))