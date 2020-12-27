const triangulo = (x, y, z) => {
    if ( x === y && y === z && x === y) {
         return console.log("Equilátero")
    } else if ( x === y || x === z || y === z ) {
        return console.log("Isósceles")
    } else {
        return console.log("Escaleno")
    }
}

triangulo(5,5,5)
triangulo(5,2,5)
triangulo(1,1,1)