let input = require('readline-sync')

let numeros = [10, 40, 50, 67, 69]

let maior = numeros[0]


for(let i = 1; i<numeros.length;i++){
    if(numeros[i]>maior){
       maior = numeros[i]
    }
}

console.log(maior)