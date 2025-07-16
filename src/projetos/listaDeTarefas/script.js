//vou começar definindo as variáveis, verificando o que eu quero utilizar do html.
//querySelector é uma função que permite selecionar elementos do DOM, como se fosse o jQuery.
//No caso, estou selecionando o elemento com o id "app" então eu uso #
let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

// Vou criar um array vazio para armazenar as tarefas
// O array vai ser usado pra armazenar as tarefas que o usuário adicionar
let tarefas = [];

function renderTarefas(){

    listElement.innerHTML = ''; //limpa a lista antes de renderizar as tarefas
    
    //Usando forEach ao invés de .map porque só quero exibir a lista na tela, não quero criar um novo array
    tarefas.forEach((todo)=>{
            let liElement = document.createElement("li");
            let tarefaText = document.createTextNode(todo);

            liElement.appendChild(tarefaText);
            listElement.appendChild(liElement); 
        });

   
}

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

}
}

// agora vamos atribuir a função adicionarTarefas ao evento de clique do botão
buttonElement.onclick = adicionarTarefas; 




 
