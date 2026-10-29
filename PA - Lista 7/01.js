let input = require("readline-sync")

let notas = [];
let media = 0;

for (let i = 0; i < 4; i++) {
    notas[i] = Number(input.question("SYSTEM | digite a nota do aluno(a): "));
    media += notas[i]
}

media = media / 4;

console.log("______________________");

console.log("SYSTEM | media: ", media);

console.log("______________________");
for(let i = 0; i < 4; i++){
    console.log("SYSTEM | notas: ", notas[i]);
}