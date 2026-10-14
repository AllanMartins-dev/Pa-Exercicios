let input = require('readline-sync')

let notas = [5, 6.5, 7, 8, 9]

let soma = 0

for(let i = 0; i<notas.length;i++){
  soma = soma + notas[i]/notas.length
 }
 console.log("A média é: ", soma)

