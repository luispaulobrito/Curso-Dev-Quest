// let videoGame = {
//     nome: 'Xbox',
//     preco: 3000,
//     jogos: [
//         {nome: 'Final Fantasy'}, 
//         {nome: 'Fallout'}
//     ]
// }

// let jogo3 = {
//     nome: 'Fifa'
// }

// videoGame.jogos.push(jogo3)

// console.log(videoGame)

let cliente = {
    nome: 'Luis',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            {nome:'Fifa'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome)