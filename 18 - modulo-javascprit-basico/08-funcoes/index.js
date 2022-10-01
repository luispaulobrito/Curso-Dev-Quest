/*
    function nomeDaFuncao(){
        <bloco de execução>
    }

    nomeDaFuncao()
*/
/*
    function nomeDaFuncao(parametro1, parametro2){
    <bloco de execução>
    }

    nomeDaFuncao(parametro1, parametro2)
*/

/*
function incentivarQuester(){
    alert('Muito bem, você chegou ao JS, continue assim')
}

incentivarQuester()
*/

// Sempre que eu não passar um nome pra função, em vez de aparecer undefined irá aparecer 'Quester'
function incentivarQuester(name = 'Quester'){
    alert('Muito bem, '+ name +'! Você chegou ao JS, continue assim')
}

incentivarQuester("Luis")

//return pode ser tuilizado e não vai ser apresentado nenhum resultado na tela
// function soma(numero1, numero2) {
//     return (numero1 + numero2)
// }

// soma (1,4)

// posso atribuir uma função a uma variável
function soma(numero1, numero2) {
    return (numero1 + numero2)
}

let resultadoDaSoma = soma (1,4)
console.log(resultadoDaSoma)