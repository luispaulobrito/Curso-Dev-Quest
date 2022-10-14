const resposta = document.querySelectorAll(".answer");
const setaMostrar = document.getElementsByClassName("seta-mostrar")
const setaRetirar = document.getElementsByClassName("seta-retirar")


console.log(resposta)
console.log(setaMostrar)
console.log(setaRetirar)

setaMostrar.addEventListener("click", function () {
    resposta[1].classList.add("answer");
})

setaRetirar.addEventListener("click", function () {
    resposta[1].classList.remove("answer");
})