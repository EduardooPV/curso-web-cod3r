// Função em JS é First-Class Object (Citizens)
// Higher-ordem Functions

// Criar de forma literal
function fun1() { }

// Armazenar em uma variável 
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](5, 5))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// Passar função como parametro
function run(fun) {
    fun() 
}
run(function () { console.log('Executando..') })

// Uma função pode retornar/conter uma função
function soma(a, b) {
    console.log(`A soma entre ${a} e ${b} é:`,a + b)
    return function (c) {
        
        console.log(`Adicionando o terceiro numero fica:`, a + b + c)
    }
}
soma(5, 5)(5)

const cincoMais = soma(5, 5)
cincoMais(5)

// 