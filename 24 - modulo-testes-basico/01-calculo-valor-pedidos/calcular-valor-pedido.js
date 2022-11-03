const meuPedido = {
    itens: [
        {nome: 'Poção  de vida', valor: 100},
        {nome: 'Espada de prata', valor: 100},
        {nome: 'Entrega', valor: 40, entrega: true}
    ]
}

//CALCULA O VALOR DO PEDIDO COLOCANDO FRETE GRÁTIS PARA PEDIDO ACIMA DE 500
const calcularValorPedido = pedido => {
    const valorProdutos = pedido.itens
    .filter(item => !item.entrega)
    .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0)

    const entrega = pedido.itens.filter(item => item.entrega)

    if (valorProdutos > 500) {
        return valorProdutos
    } else {
        return valorProdutos + entrega[0].valor
    }
}
console.log(calcularValorPedido(meuPedido))

//CALCULA O VALOR DO PEDIDO USANDO O REDUCE
// const calcularValorPedido = pedido =>
// pedido.itens.reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0)
