let input = require('readline-sync');

let n1 = input.questionInt("Digite o primeiro número: ");
let n2 = input.questionInt("Digite o segundo número: ");
let n3 = input.questionInt("Digite o terceiro número: ");
let n4 = input.questionInt("Digite o quarto número: ");
 
let resp = n1 + n2
let resp2 = n3 - n4
let resp3 = resp + resp2
 
if(resp3 > 10){
    console.log("resultado maior que dez")
} else {
    console.log("resultado menor ou igual a dez")
}
