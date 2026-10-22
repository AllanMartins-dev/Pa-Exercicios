const livro = {
    Titulo : "It: A coisa",
    autor : "Stephen King",
    anoPublicacao : 1986,
    disponivel : true
};

console.log("      Livro Em aluguel!       ")
console.log("-------",livro.Titulo,"---------");
console.log("Autor:", livro.autor);
console.log("Ano publicado: ", livro.anoPublicacao)
if(livro.disponivel==true){
    console.log("Disponível?","Sim!!")
}else{
    console.log("Disponível?","Não!!")
}