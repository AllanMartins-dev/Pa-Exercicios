let input = require('readline-sync')

let nomes = ["Allan", "Laura", "Isaac", "Henri", "Gabriela"]

let encontrado = 0

let espec = "Laura"

for(let i = 0; i<nomes.length;i++){
     if(nomes[i] === espec){
       encontrado = 1

}
}

if(encontrado === 1){
console.log("Nome Encontrado")
}else{
        console.log("Nome nao encontrado")
     }
