
const alunoPerfil = {
    nome: "Ana Clara",
    ra: "123456",
    curso: "Desenvolvimento de Sistemas",
    matriculaAtiva: true,
    notas: {[
    
      historia = {[
    
      ]} 
     ]
    

    }
};

alunoPerfil.idade=18
alunoPerfil.matriculaAtiva = false
delete alunoPerfil.ra

//console.log(alunoPerfil.notas)


let matemática = alunoPerfil.notas[0]
let português = alunoPerfil.notas[0]
let soma = 0
     for (let i = 0; i < matemática.length; i++) {
        soma+=matemática[i].nota
        
     }

     let media = soma / matemática.length
     matemática.media = media
     português.media = 0


     console.log(`
        ------- Boletim Bimestral -------
        Nome : $(alunoPerfil.curso)
        ra : $(alunoPerfil.ra)
        Curso : $(alunoPerfil.curso)
        Está Matrilado?: $(alunoPerfil.matriculaAtiva?"sim":"não")
        `)

   for (let i = 0; i < matemática.length; i++) {
    console.log("atividade: ",matemática[i].notas )
     
   } 
    console.log("média: ",  matemát)    