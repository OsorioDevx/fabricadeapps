//vou começar definindo as variáveis, verificando o que eu quero utilizar do html.
//querySelector é uma função que permite selecionar elementos do DOM, como se fosse o jQuery.
//No caso, estou selecionando o elemento com o id "app" então eu uso #
let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

//vou recuperar meu array que esta no localstorage
//como eu transformei o array em string, preciso transformá-lo novamente em array
let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

function renderTarefas(){

    listElement.innerHTML = ''; //limpa a lista antes de renderizar as tarefas
    
    //Usando forEach ao invés de .map porque só quero exibir a lista na tela, não quero criar um novo array
    tarefas.forEach((todo, index)=>{
            let liElement = document.createElement("li");
            liElement.textContent = todo;

            let linkElement = document.createElement("a");
            linkElement.setAttribute("href", "#");
            linkElement.textContent = "  Excluir";

            linkElement.addEventListener("click", () =>{
                deltarefa(index);
            });

            liElement.appendChild(linkElement);
            listElement.appendChild(liElement);
        });

}

renderTarefas();

function adicionarTarefas(){
    //condição para verificar se o input está vazio
    if(inputElement.value === '') {
        alert('Digite uma tarefa!');
        return false;
} else{

    let novaTarefa = inputElement.value; //pega o valor do input e armazena na variável novaTarefa
    
    tarefas.push(novaTarefa); //adiciona a nova tarefa ao array tarefas
    inputElement.value = ''; //limpa o input após adicionar a tarefa

    renderTarefas();
    salvarDados();

}
}

// agora vamos atribuir a função adicionarTarefas ao evento de clique do botão
buttonElement.onclick = adicionarTarefas; 

function deltarefa (posicao){
    tarefas.splice(posicao, 1);
    renderTarefas();
    salvarDados();
}


function salvarDados(){
    //vou converter minha lista para string para armazenar no localstorage
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas))
}



 
