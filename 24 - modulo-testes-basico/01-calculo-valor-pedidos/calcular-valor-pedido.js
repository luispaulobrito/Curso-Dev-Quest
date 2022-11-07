//CALCULA O VALOR DO PEDIDO COLOCANDO FRETE GRÁTIS PARA PEDIDO ACIMA DE 500
const acrescimoValorEntrega = 0.3;
const calcularValorPedido = pedido => {
    const valorProdutos = pedido.itens
    .filter(item => !item.entrega)
    .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0)

    const entrega = pedido.itens.filter(item => item.entrega)

    if (pedido.estado === 'RS' || pedido.estado === 'SC') {
        const acrescimoEntrega = entrega[0].valor * acrescimoValorEntrega;
        entrega[0].valor += acrescimoEntrega;
    }

    return (valorProdutos > 500) ? valorProdutos : valorProdutos + entrega[0].valor;
}

module.exports = calcularValorPedido;

// console.log(calcularValorPedido(meuPedido))

//CALCULA O VALOR DO PEDIDO USANDO O REDUCE
// const calcularValorPedido = pedido =>
// pedido.itens.reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0)
