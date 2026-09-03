let input = require('readline-sync');

let n1 = input.questionInt("Digite um Número: ");

let n2 = input.questionInt("Digite um segundo Número: ");

if(n1<n2){
    console.log("O menor é : ", n1)
}else{
    console.log("Numero invalido")
}

if(n2<n1){
    console.log("O menor e: ", n2)
}else{
    console.log("Numero invalido")
}