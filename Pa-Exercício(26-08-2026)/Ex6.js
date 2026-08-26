let input = require('readline-sync');


let n = Number(input.question("insira um numero: "));

let r = n * 3

if ( r >= 15){
    console.log("o resultado é: ", + r)
}