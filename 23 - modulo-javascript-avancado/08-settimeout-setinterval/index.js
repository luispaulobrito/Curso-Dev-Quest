//DEPOIS DE 3 SEGUNDOS MOSTRA O ALERTA
// setTimeout(() => {
//     alert('Olá')
// }, 3000);

// setInterval(() => {
//     console.log('Olá')
// }, 2000);

// setTimeout(() => {
//     console.log('Dentro do setTimeout')
// }, 2000);

// setInterval(() => {
//     console.log('Dentro do setInterval')
// }, 2000);

// console.log('Fora do setTimeout')

let idDoIntervalo = setInterval(() => {
                        console.log('Executando a cada 2 segundo')
                    }, 2000);

console.log(idDoIntervalo)
clearInterval(idDoIntervalo)                    