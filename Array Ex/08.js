let input = require('readline-sync')

let numeros = [2, 35, 23, 13, 98]

let pares = 0
let impares = 0

for(let i = 0; i<numeros.length;i++){
    if(numeros[i] %2 === 0){
        pares++
    }else{
        impares++
    }
}

console.log("Impares: ", impares)
console.log("Pares: ", pares)