let input = require('readline-sync')
 let numeros = [10, 90, 67, 43, 45]
 let inverso = []

 
for(let i = 0; i<numeros.length;i++){
     inverso[i]=numeros[numeros.length - 1 - i]
}

console.log("Inverso: ", inverso)
console.log("Normal: ", numeros)