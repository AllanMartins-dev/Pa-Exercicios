let input = require("readline-sync")
let dividendo = Number(input.questionInt=("Digite um numero: "))
let divisor = Number(input.questionInt=("Digite um segundo numero: "))

let quociente = dividendo / divisor
let quocienteParteInteira = parseInt(quociente)

let resto = quociente - (quocienteParteInteira)*divisor

console.log("Oresto da divisao e: ", resto)