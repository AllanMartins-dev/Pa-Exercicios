let input = require('readline-sync');

let n1 = Number(input.question("insira um primeiro número: "));
let n2 = Number(input.question("insira um segundo número: "));


let r1 = n1 + n2 
if (r1 <= 20){
    console.log(n1 * 10)
    console.log(n2 * 10)
}