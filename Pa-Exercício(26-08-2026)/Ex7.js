let input = require('readline-sync');


let n1 = Number(input.question("insira um primeiro numero: "));
let n2 = Number(input.question("insira um segundo numero: "));
let n3 = Number(input.question("insira um terceiro numero: "));

let r = n1 + n2 + n3

if ( r >= 20 ){
    console.log("o resultado: ", + r)
}