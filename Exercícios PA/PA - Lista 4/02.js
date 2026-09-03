let input = require('readline-sync');

let n1 = input.questionInt("Digite um numero");
let n2 = input.questionInt("Digite segundo um numero");

r1 = n1 + 5
r2 = n2 + 5

if(n1<n2){
    console.log(r1)
}else{
    console.log("Menor numero ")
}

if(n2<n1){
    console.log(r2)
}else{
    console.log("Menor numero")
}

if(r1<r2){
    console.log("O maior valor é: ", r1)
}else{
    console.log("Menor número")
}

if(r2<r1){
    console.log("O maior valor é: ", r2)
}else{
    console.log("Menor número")
}
