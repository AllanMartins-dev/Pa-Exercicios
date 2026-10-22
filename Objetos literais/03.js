const produto = {
    nome : "Creme para cabelo",
    preço : 20,
    categoria : "Cabelo",
    estoque : true
}

if("preço" in produto){
    console.log(true)
}else{
    console.log(false)
}

if("desconto" in produto){
    console.log(true)
}else{
    console.log(false)
}
