// Seleciona o elemento da área
const area = document.getElementById("area");

// Função para entrar
function entrar(){
    let nome = prompt("Digite seu nome:");
    
    if(nome === '' || nome === null){
        alert("Por favor, digite um nome válido.");
        area.innerHTML = "Clique no botão para entrar novamente.";
    } else{
        area.innerHTML = `
            <div class="welcome-message">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fdbb2d" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </svg>
                <h2>Seja bem-vindo, ${nome}!</h2>
                <p>Sua sessão foi iniciada com sucesso</p>
            </div>
        `;
    }
    
    // Cria o botão de sair
    let botaoSair = document.createElement("button");
    botaoSair.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
        Sair da conta
    `;
    botaoSair.id = "sair-btn";
    botaoSair.onclick = sair;
    area.appendChild(botaoSair);
}

// Função para sair
function sair(){
    alert("Você saiu da conta.");
    area.innerHTML = `
        <div class="exit-message">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#b21f1f" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            <h2>Adeus!</h2>
            <p>Volte sempre que quiser testar mais funcionalidades</p>
        </div>
    `;
}

