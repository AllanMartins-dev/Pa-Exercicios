let input = require("readline-sync");

let n1 = input.questionInt("Digite um número");

while(n1>5){
    console.log(n1)
    n1 = n1 + 1
}

while(n1<10){
    console.log(n1)
    n1 = n1 - 1
}