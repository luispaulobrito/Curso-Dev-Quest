// function (a,b,...args) {
//     ...
// }

//DESSA FORMA EU INCENTIVARIA UM QUESTER
// function incentivarQuester(mensagem, nome) {
//     console.log(`${mensagem}, ${nome}`)
// }

// incentivarQuester('Parabéns por chegar no módulo de Java avançado', 'Luís')

//DESSA FORMA EU INCENTIVARIA VÁRIOS QUESTERS
// function incentivarQuester(mensagem, ...nomesQuesters) {
//     console.log(`${mensagem}, ${nomesQuesters}`)
// }

// incentivarQuester('Parabéns por chegar no módulo de Java avançado', 'Luís', 'Pedro', 'Rafael')

//SE EU QUISER ITERAR PRA CADA QUESTER BASTA USAR O MAP
function incentivarQuester(mensagem, ...nomesQuesters) {
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuester('Parabéns por chegar no módulo de Java avançado', 'Luís', 'Pedro', 'Rafael')