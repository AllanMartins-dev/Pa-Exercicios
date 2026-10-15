let input = require('readline-sync')


//Exercicio 1

console.log("Exercício 1: Digite 5 nomes")
let nomes = ["Alessandro", "Allan", "Caio", "Erick", "Laura"];


//for (let i = 0; i < 5; i++) {
    //nomes[i]=input.question("Nome "+(i+1)+": ");
//}
for (let index = 0; index < nomes.length; index++) {
    console.log(nomes[index])   
}


//Exercício 2
console.log("Exercício 2: nomes com indice")

for (let index = 0; index < nomes.length; index++) {
    console.log("Indice " + index + ": " + nomes[index])   
}
//exercicio 3
console.log("Exercicio 3 - cont maior que dez")

let numeros = [2,11,15,8,9,18];
let contMaiorQueDez = 0
for (let i = 0; i < numeros.length; i++) {
    
    if(numeros[i]>10){
      contMaiorQueDez++;
    }
}

console.log("Existem " + contMaiorQueDez +  " numeros que são maior(es) que dez")

//exercicio 4
console.log("Exercicio 4 - soma e média")

let notas = [10,8.5,6,9,8,9]

let somaNotas = 0

for (let i = 0; i < notas.length; i++) {
    somaNotas += somaNotas+notas[i]
}

let media = somaNotas/notas.length;

console.log("Soma = ", somaNotas)
console.log("Media = ",media.toFixed(2))

//exercicio 5
console.log("Exercicio 5 - Encontre o maior valor")

let numerosMaiores = [8,10,25,1,10]

let maiorValor = numerosMaiores[0]


for (let i = 1; i < numerosMaiores.length; i++) {
    if(numerosMaiores[i]>maiorValor){
        maiorValor = numerosMaiores[i]
    }
   
}

console.log("Maior valor :", maiorValor)

//exercicio 6
console.log("Exercicio 6 - Encontre o menor valor")

let numerosMenores = [8,10,25,1,10]

let menorValor = numerosMenores[0]

for (let i = 0; i < numerosMenores.length; i++) {
    if(numerosMenores[i]<menorValor){
        menorValor=numerosMenores[i]
    }
    
}
console.log("Menor Valor: ", menorValor)

//exercicio 7
console.log("Exercicio 7 - Procurando um nome")

let nomesProcurar = ["Allan", "Gabriela", "Isaac", "Enzo"]

let nomeParaAcahar= "Allan"

let encontrado = false

for (let i = 0; i < nomesProcurar.length; i++) {
   if(nomesProcurar[i]===nomeParaAcahar){
        encontrado = true
        let posiçãoarray = i
   }
}
if(encontrado===true){
   console.log("Nome Encontrado!!")
}else{
    console.log("Nome nao encontrado")
}


//exercicio 8
console.log("Exercicio 8 - Separando Pares e impares")

let numerosInteiros = [10,9,5,2,1]

let pares = 0
let impares = 0

for (let i = 0; i < numerosInteiros.length; i++) {
    if(numerosInteiros[i]%2===0){
        pares++
    }else{
        impares++
    }
}
console.log(`QTD.PARES: ${pares}\n QTD.IMPARES: ${impares}`)

//exercicio 9
console.log("Exercicio 9 - Copiando um array")

let numerosCopias = [10, 5, 4, 3, 2,]

let copiadora = []

for (let i = 0; i < numerosCopias.length; i++) {
   copiadora[i] = numerosCopias[i]
    
}
console.log("Original:", numerosCopias)
console.log("Cópia:", copiadora)

//exercicio 10
console.log("Exercicio 10 - Invertendo a ordem")

let numerosInversos = [10, 90, 67, 43, 45]
 let inverso = []

 
for(let i = 0; i<numeros.length;i++){
     inverso[i]=numeros[numeros.length - 1 - i]
}

console.log("Inverso: ", inverso)
console.log("Normal: ", numeros)

//exercicio 11
console.log("Exercicio 11 - Alterando Valores")

let numerosAlterados = [10, 5, 23, 13, 6]
let dobro = []
for (let i = 0; i < numerosAlterados.length; i++) {
    dobro[i] = numerosAlterados[i]*2
    
}
console.log("numeros atuais: ", numerosAlterados)
console.log("Numeros atualizados: ", dobro)

//exercicio 12
console.log("Exercicio 12 - Removendo um valor")

let numerosRemoviveis = [19, 54, 21, 45, 87,]

let arrayPosiçao = 2;

let numeroSemValor = []

let destino = 0

for (let i = 0; i < numerosRemoviveis.length; i++) {
    if(i!==arrayPosiçao){
        numeroSemValor[destino]=numerosRemoviveis[i];
        destino++
    }
    
}
console.log("Array Original=>", numerosRemoviveis)
console.log("Array com remoçao=>", numeroSemValor)

 
