const input = require("readline-sync");

let alunos = [];

for (let i = 0; i < 5; i++) {
    alunos[i] = {
        notas: [],
        media: 0
    };

    console.log("___________________________________________");
    console.log(`aluno ${i + 1}`);

    for (let j = 0; j < 4; j++) {
        alunos[i].notas[j] = Number(
            input.question(`digite a nota ${j + 1}: `)
        );

        alunos[i].media += alunos[i].notas[j];
    }

    alunos[i].media /= 4;
}

for (let i = 0; i < 5; i++) {
    console.log(`\nAluno ${i + 1}`);
    console.log("Notas:", alunos[i].notas);
    console.log("Média:", alunos[i].media);
}