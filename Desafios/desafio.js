let input = require('readline-sync');
let n1 = input.questionInt("Digite Um numero, com base nele, a resposta será se ele e par ou impar: ");
let result = n1 % 2;

if(result == 0) {
    console.log("par");
} else {
    console.log("Impar");
}