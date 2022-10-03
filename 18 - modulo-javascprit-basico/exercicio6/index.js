const numero1 = 5
const numero2 = 3

function somar(numero1, numero2) {
    let soma = numero1+numero2 
    return 'A soma dos dois números é: ' + soma
}

let resultadoSoma = somar(numero1,numero2)
console.log(resultadoSoma)

function subtrair(numero1, numero2) {
    let subtracao = numero1-numero2 
    return 'A soma dos dois números é: ' + subtracao
}

let resultadoSubtracao = subtrair(numero1,numero2)
console.log(resultadoSubtracao)

function multiplicar(numero1, numero2) {
    let multiplicacao = numero1*numero2 
    return 'A soma dos dois números é: ' + multiplicacao
}

let resultadoMultiplicacao = multiplicar(numero1,numero2)
console.log(resultadoMultiplicacao)

function dividir(numero1, numero2) {
    let divisao = numero1/numero2 
    return 'A soma dos dois números é: ' + divisao
}

let resultadoDivisao = dividir(numero1,numero2)
console.log(resultadoDivisao)