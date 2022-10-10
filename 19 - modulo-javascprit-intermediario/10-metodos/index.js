let usuario = {
    nome: 'Luis',
    excluir: function() {
        console.log('O usuário ' + this.nome + ' foi excluído!')
    }
}

usuario.excluir()