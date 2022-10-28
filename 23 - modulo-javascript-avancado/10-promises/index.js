/*ESTADOS DA PROMISES
    Pendente
    Realizada(Resolve)
    Recusada(Reject)
    Estabelecida
*/

// new Promise((resolve, reject) => {
    
// })


let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('começando o processo de ferver a água')
            resolve()
        } else {
            console.log('é necessário  ligar o fogão e colocar a chaleira no fogão pra ferver a água')
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('fazendo café')