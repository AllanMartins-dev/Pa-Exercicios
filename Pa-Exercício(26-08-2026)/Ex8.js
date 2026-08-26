let input = require('readline-sync');


let n1 = Number(input.question("insira um primeiro numero: "));
let n2 = Number(input.question("insira um segundo numero: "));

if ( n1 == n2 ){
    console.log("os numeros são: " + n1, + n2)
}