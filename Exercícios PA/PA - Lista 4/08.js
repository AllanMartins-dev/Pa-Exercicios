let input = require('readline-sync');

let n1 = input.questionInt("Digite um numero: ")


if(n1>10){
   n1 = n1 + 5
}
if(n1<=10)
{
    n1 = n1 + 20
}

if(n1>25){
    console.log(n1)
}