let input = require('readline-sync');

let n1 = input.questionInt("Digite um numero: ");
let n2 = input.questionInt("Digite segundo um numero: ");

if(n1<n2){
    console.log(n1, n2);
}else{
    console.log(n2, n1);
}
