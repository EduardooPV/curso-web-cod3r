const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (i in nums) {
    if (i == 5) {
        break //Fora do laço mais proximo: For/While/Switch
    }
    console.log(`${i} = ${nums[i]}`)
}
console.log('Fim')

for(y in nums) {
    if (y == 5) {
        continue //Pula pra prox repetição: For/While
    }
    console.log(`${y} = ${nums[y]}`)
}
console.log('Fim')

externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim')