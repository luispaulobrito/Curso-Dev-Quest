let pessoas = [
    {nome: 'Ricardo', idade: 33},
    {nome: 'Roberto', idade: 33},
    {nome: 'Rafael', idade: 27}
]

//FILTRANDO OS NOMES SEM O MAP
// let nomeDePessoas = []
// for (let i = 0; i < pessoas.length; i++) {
//     nomeDePessoas.push(pessoas[i].nome)
// }

// console.log(nomeDePessoas)

//FILTRANDO OS NOMES COM O MAP
// let nomeDePessoas = pessoas.map(function (pessoa) {
//     return pessoa.nome
// })

//FILTRANDO OS NOMES COM O MAP E ARROW FUNCTION
// let nomeDePessoas = pessoas.map(pessoa => pessoa.nome)


//FILTRANDO OS NOMES COM O MAP E ARROW FUNCTION E CONCATENANDO TEXTO E COM A IDADE
let nomeDePessoas = pessoas.map(pessoa => pessoa.nome + ' tem ' + pessoa.idade + ' anos')

console.log(nomeDePessoas)