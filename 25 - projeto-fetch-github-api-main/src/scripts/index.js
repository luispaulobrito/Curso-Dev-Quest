document.getElementById('btn-search').addEventListener('click', () =>{
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)
})

async function user(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}`)
    return await response.json()
}

function getUserProfile(userName) {
    user(userName).then(userData => {
        console.log(userData)
        let userInfo = `<img src = "${userData.avatar_url}" alt="Fot do perfil do usuário"/>
                        <div class="data">
                            <h1>${userData.name ?? 'Não possui nome cadastrado 😥'}</h1>
                            <p>${userData.bio ?? 'Não possui bio cadastrada 😥'}</p>  
                        </div>`
    
        document.querySelector('.profile-data').innerHTML = userInfo                
    
    })
}


// O userData.name tem um ?? ele vai verificar se o objeto é nulo, se for nulo (não tiver nome cadastrado) ele vai apresentar a mensagem que segue.
// atalho windows ponto apresenta os emojis pra escolher