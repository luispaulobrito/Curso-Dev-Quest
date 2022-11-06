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

module.exports = calcularValorPedido;

// console.log(calcularValorPedido(meuPedido))

//CALCULA O VALOR DO PEDIDO USANDO O REDUCE
// const calcularValorPedido = pedido =>
// pedido.itens.reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0)
