const pessoas = ['Luis', 'Roberto', 'Ricardo']

console.log(pessoas) //SEM SPREAD
console.log(...pessoas) //COM SPREAD

/*CONCATENAR DOIS ARRAYS*/
let pessoas1 = ['Luis', 'Roberto', 'Ricardo']
let pessoas2 = ['Pedro', 'José', 'Antonio']

pessoas1 = pessoas1.concat(pessoas2)
console.log(pessoas1)

pessoas2 = [...pessoas1, ...pessoas2]
console.log(pessoas2)

/*CLONANDO UM OBJETO*/
const pessoa1 = {nome: 'Luis', idade: '32'}
const objetoClonado = { ...pessoa1}

console.log(pessoa1)
console.log(objetoClonado)