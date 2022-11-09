import { user } from '/src/scripts/services/user.js'
import { repos } from '/src/scripts/services/repositories.js'

document.getElementById('btn-search').addEventListener('click', () =>{
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)
    getUserRepositories(userName)
})

//usabilidade - quando aperta enter no input ele faz a busca
document.getElementById('input-search').addEventListener('keyup', (e) =>{
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        getUserProfile(userName)
        getUserRepositories(userName)
    }
})



function getUserProfile(userName) {
    user(userName).then(userData => {
        // console.log(userData)
        let userInfo = `<div class="info">
                        <img src = "${userData.avatar_url}" alt="Fot do perfil do usuário"/>
                        <div class="data">
                            <h1>${userData.name ?? 'Não possui nome cadastrado 😥'}</h1>
                            <p>${userData.bio ?? 'Não possui bio cadastrada 😥'}</p>  
                        </div>
                        </div>`
    
        document.querySelector('.profile-data').innerHTML = userInfo                
        
    })
}
function getUserRepositories(userName) {
    repos(userName).then(reposData => {
        let repositoriesItens = ""
        reposData.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        });
        
        document.querySelector('.profile-data').innerHTML += 
        `<div class="repositories section">
        <h2>Repositório</h2>
        <ul>${repositoriesItens}</ul>
        </div>`
    })
                                                                            
}


// O userData.name tem um ?? ele vai verificar se o objeto é nulo, se for nulo (não tiver nome cadastrado) ele vai apresentar a mensagem que segue.
// atalho windows ponto apresenta os emojis pra escolher