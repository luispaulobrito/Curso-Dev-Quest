const calcularValorPedido = require('./calcular-valor-pedido')

it ('não deve cobrar valor de frete quando o valor dos produtos for superior a 500', () => {
    // AAA - 3 PASSOS DE CRIAÇÃO DE UM TESTE

    //ARRANGE - (ARRUMAR) ORGANIZAR ALGUMA COISA QUE A GENTE QUER PASSAR PRA DENTRO DA FUNÇÃO/OBJETO
    const meuPedido = {
        itens: [
            {nome: 'Poção  de vida', valor: 2000},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    //ACT (AÇÃO) O QUE VAI SER TESTADO
    const resultado = calcularValorPedido(meuPedido)

    //ASSERT (ASSERÇÃO) QUAL O RESULTADO ESPERADO
    expect(resultado).toBe(2000)
});

it ('deve cobrar valor de frete quando o valor dos produtos for inferior a 500', () => {
    const meuPedido = {
        itens: [
            {nome: 'Sanduiche', valor: 50},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }
    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(150)
});

it ('deve cobrar valor de frete quando o valor dos produtos for igual a 500', () => {
    const meuPedido = {
        itens: [
            {nome: 'Sanduiche', valor: 500},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }
    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(600)
})

/* CASO  OS ESTADOS DE ENTREGA SEJAM RS OU SC , DEVE SER ACRESCIDO UM VALOR DE 30% NA ENTREGA */
it('deve adicionar o valor de 30% no valor da entrega caso o estado seja RS', () =>{
    const pedidoComEstadoRS = {
        estado: 'RS',
        itens: [
            {nome: 'Sanduiche', valor: 500},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }
    const resultado = calcularValorPedido(pedidoComEstadoRS)

    expect(resultado).toBe(630)
})

it('deve adicionar o valor de 30% no valor da entrega caso o estado seja SC', () =>{
    const pedidoComEstadoSC = {
        estado: 'SC',
        itens: [
            {nome: 'Sanduiche', valor: 500},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }
    const resultado = calcularValorPedido(pedidoComEstadoSC)

    expect(resultado).toBe(630)
})

it('não deve adicionar o valor de 30% no valor da entrega caso o estado seja SP', () =>{
    const pedidoComEstadoSP = {
        estado: 'SP',
        itens: [
            {nome: 'Sanduiche', valor: 500},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }
    const resultado = calcularValorPedido(pedidoComEstadoSP)

    expect(resultado).toBe(600)
})