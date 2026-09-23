let input = require('readline-sync');

let n1 = input.questionInt("Digite o primeiro número: ");
let n2 = input.questionInt("Digite o segundo número: ");
 
let resp1 = n1
let resp2 = n2
 
if(n1 > n2){
    resp1 = n2
    resp2 = n1
}
 
let resp3 = (resp1 * 10) + (resp2 / 2)
 
if(resp3 % 2 == 0){
    console.log("o resultado é par")
} else {
    console.log("o resultado é impar")
}