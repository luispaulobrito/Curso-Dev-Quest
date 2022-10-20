const form = document.getElementById("formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const mensagem = document.getElementById("mensagem")


form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})

function checkInputs() {
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const telefoneValue = telefone.value.trim()
    const mensagemValue = mensagem.value.trim()

    if (nomeValue === '') {
        errorValidation(nome)
    } else{
        successValidation(nome)        
    }

    if (emailValue === ''){
        errorValidation(email)
    } else{
        successValidation(email)        
    }
    
    if (telefoneValue === ''){
        errorValidation(telefone)
    } else{
        successValidation(telefone)        
    }
    
    if (mensagemValue === ''){
        errorValidation(mensagem)
    } else{
        successValidation(mensagem)        
    }
}

function errorValidation(input) {
    const formControl = input.parentElement;
    formControl.className="form-control error"
}

function successValidation(input) {
    const formControl = input.parentElement;
    formControl.className="form-control success"
}