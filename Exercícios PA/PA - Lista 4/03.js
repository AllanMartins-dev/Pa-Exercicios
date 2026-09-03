let input = require('readline-sync');

let n1 = input.questionInt("Digite um numero");

if(n1>10){
    console.log("Maior que Dez")
}else if(n1<=10){
    console.log("invalido")
}

