let input = require('readline-sync')

let numeros = [5, 2, 67, 69, 42, 34]

contador = 0

for(let i = 0; i<numeros.length;i++){
   if(numeros[i]>10){
    contador++}
}
console.log(contador)
