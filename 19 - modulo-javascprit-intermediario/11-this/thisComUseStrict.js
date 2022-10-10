'use strict'
//use strict não vi permitir que o this global vaze pra dentro de uma função
//dentro do escopo global
/*console.log(this)
console.log(window)
console.log(window === this)


this.name = 'Luis'
function saudar(){
    console.log('this no contexto da função', this)
    console.log('Olá '+ this.name)
}
saudar()
*/

/*
let usuario = {
    nome: 'Luis',
    saudar: function(){
        console.log('this no contexto do método', this)
        console.log('this.name no contexto do método', this.nome)        
    }
}
usuario.saudar()
*/

let comida = {
    nome: 'Brócolis',
    temperatura: 0
}

comida.cozinhar = function (temperaturaDeCozimento) {
    this.temperatura = temperaturaDeCozimento;
}

console.log(comida)

comida.cozinhar(100)

console.log(comida)