let input = require('readline-sync');


let n = Number(input.question("insira um numero: "));
let r = n + 5;
if (r >= 10) {
    console.log("o resultado é maior ou igual a dez")
}