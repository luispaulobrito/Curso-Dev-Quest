// let pessoa = {nome: 'Luis', sobrenome: 'Brito', idade: 32};
// let nome = pessoa.nome;
// let idade = pessoa.idade;

// console.log(nome);
// console.log(idade);

// DESESTRUTURANDO OBJETO
let pessoa = {nome: 'Luis', sobrenome: 'Brito', idade: 32};

let = {nome, idade} = pessoa

console.log(nome);
console.log(idade);

// DESESTRUTURANDO ARRAY
const numeros = [1, 2, 3];

const [um, dois, tres] = numeros;

console.log(um);
console.log(dois);
console.log(tres);