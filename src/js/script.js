var formAluno = document.getElementById("form-cadastro")

function cadastroAluno(event) {

    event.preventDefault()
    
    var nome = document.getElementById("nome").value
    var matricula = document.getElementById("matricula").value
    var idade = document.getElementById("idade").value
    var mae = document.getElementById("mae").value
    var telefone = document.getElementById("telefone").value

    var objetoAluno = {
        nome: nome,
        matricula: matricula,
        idade: idade,
        mae: mae,
        telefone: telefone
    }



    console.log(nome)
    console.log(matricula)
    console.log(idade)
    console.log(mae)
    console.log(telefone)
    console.log(objetoAluno)
    console.log("Funcao cadastrarProduto chamada")
}

formAluno.addEventListener("submit", cadastroAluno)

