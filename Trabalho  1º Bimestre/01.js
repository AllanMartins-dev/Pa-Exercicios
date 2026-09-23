let input = require('readline-sync')

let name = input.question("Digite o nome do estudante:");
let nt1 = input.questionInt("Digite sua nota:");
let nt2 = input.questionInt("Digite sua segunda nota:");
let nt3 = input.questionInt("Digite sua terceira nota:");

let média = nt1 + nt2 + nt3 / 3;

if(média>=7){
    console.log("nome:",  name, "-", "notas",  nt1, nt2, nt3, "-", "Média:",  média, "-", "Resultado FINAL",  "Parabems!! Voce foi aprovado!");
}else if(média >= 5 && média <= 6.9){
    console.log("nome:",  name, "-", "notas",  nt1, nt2, nt3, "-", "Média:",   média, "-", "Resultado FINAL",  "Infelizmente voce nao passou... porem ha como recuperar!");
}else if (média<5){
   console.log("nome:",  name, "-", "notas",  nt1, nt2, nt3, "-", "Média:", "-",  média, "-","situação FINAL",  "Voce foi reprovado...");
}


 