function alterarCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName('post'); //pega a classe article e coloca num array visto que tem dois itens
    let primeiroPost = posts[0]; //pega o primeiro item do array
    primeiroPost.style.backgroundColor = 'red'; //qualquer propriedade CSS pode alterada dessa forma, usando o objeto style, por exemplo: tamanho de fonte, cor, background
    primeiroPost.style.border = '3px solid blue'
    primeiroPost.style.color = 'white'
}

function aumentarFontSegundoPost() {
    let textPosts = document.getElementsByClassName('texto-post'); //pega a classe do parágrafo e coloca num array
    textPosts[1].classList.add('fonte-grande') //o comando add adiciona uma classe ao textPost
}

function marcarRadio(genero) {
    let radioMasculino = document.getElementById('genero-masculino')
    let radioFeminino = document.getElementById('genero-feminino')

    if (genero === 'M') {
        radioMasculino.checked = true;
    } else if(genero === 'F'){
        radioFeminino.checked = true;
    }
}