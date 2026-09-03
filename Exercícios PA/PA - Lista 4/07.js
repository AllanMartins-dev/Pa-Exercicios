let input = require('readline-sync');

let n1 = input.questionInt("Digite um numero");
let n2 = input.questionInt("Digite segundo um numero");
let n3 = input.questionInt("Digite terceiro um numero");

if(n1<n2<n3){
    console.log(n1, n2, n3);
}else if(n2<n1<n3){
    console.log(n2, n1, n3);
}else if(n3<n1<n3){
    console.log(n3,n2,n1);
}else{
    console.log(n1, n3, n2);
}