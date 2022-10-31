let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (typeof chaleiraEstaNoFogao != 'boolean') throw "Somente o tipo booleano é aceito"
        
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve()
        } else {
            console.log('é necessário  ligar o fogão e colocar a chaleira no fogão pra ferver a água')
            reject()
        }
    })
}

let passarCafe = (aguaFervida) => {
    return new Promise((resolve, reject) => {
            console.log('Passo 2 finalizado: Café foi passado')
            resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve, reject) => {
            console.log('Passo 3 finalizado: Terminei de tomar o café')
            resolve(true)
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve, reject) => {
            console.log('Passo 4 finalizado: Terminei de lavar a xícara')
            resolve(true)
    })
}

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

async function iniciarProcessoDeFazerCafe() {
    try {
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        const cafePassado = await passarCafe(aguaFervida)
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomado)
    } catch (error) {
        console.log(error)
    }finally{
        console.log('Finalizado o processo de tomar o café')
    }
}

iniciarProcessoDeFazerCafe()