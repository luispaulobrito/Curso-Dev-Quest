let question = confirm('Seja bem vindo(a),aventureiro(a)! Gostaria de pagar R$ 50,00 para passara noite na nossa hospedagem?')

function answer(question) {
    if (question) {
        alert("Ótimo! Nós temos as melhores camas de toda a região!")
    } else {
        alert("Que pena! Você parecia ser uma pessoa mais legal")
    }
}

answer(question);