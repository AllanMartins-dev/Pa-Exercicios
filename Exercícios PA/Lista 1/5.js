let input = require("readline-sync")

let n1 = input.questionInt("Digite seu número:")

let n2 = input.questionInt("Digite outro número:")

let resp = n1 - n2

let resp2 = resp + 10

console.log("A resposta:", resp2)
