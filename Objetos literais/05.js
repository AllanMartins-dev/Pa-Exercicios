const endereço = {
    rua:"Augusta",
    numero: 1030,
    cidade:"Sao Paulo",
    cep: "0100-0000"
}

const pessoa ={
    nome: "Allan",
    idade: 16,
    endereço: endereço,
}

console.log("O", pessoa.nome, "mora na rua",endereço.rua,", Numero",endereço.numero,", cidade", endereço.cidade)