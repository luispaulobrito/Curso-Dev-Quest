function adicionarComentario() {
    let inputComentario = document.getElementsByName('novo-comentario'); //coloca o input numa variável
    let textoDigitado = inputComentario[0].value; //coloca o valor digitado do input na variável
    let novosComentarios = document.getElementById('novos-comentarios') //pega a div que está em branco pra preencher
    novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado}</p>` //pega a variável textoDigitado e coloca na div
}