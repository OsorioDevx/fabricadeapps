//vou começar definindo as variáveis, verificando o que eu quero utilizar do html.
//querySelector é uma função que permite selecionar elementos do DOM, como se fosse o jQuery.
//No caso, estou selecionando o elemento com o id "app" então eu uso #
let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

// Vou criar um array vazio para armazenar as tarefas
// O array vai ser usado pra armazenar as tarefas que o usuário adicionar
let tarefas = [];

function renderTarefas(todo){
<<<<<<< Updated upstream
    listElement.innerHTML = ''; //limpa a lista antes de renderizar as tarefas
    
    //Usando forEach ao invés de .map porque só quero exibir a lista na tela, não quero criar um novo array
    tarefas.forEach(
        (todo)=>{
            let liElement = document.createElement("li");
            let tarefaText = document.createTextNode(todo);

            liElement.appendChild(tarefaText);
            listElement.appendChild(liElement); 
        }
=======
     // vou limpar a lista antes de renderizar as tarefas
    listElement.innerHTML = '';

    // aqui o tarefas.map é usado para criar um novo array com as tarefas
    tarefas.map(
        ()=>{
            console.log(`tarefa: ${todo}`);
        }   
>>>>>>> Stashed changes
    )
}

function adicionarTarefas(){
    //condição para verificar se o input está vazio
    if(inputElement.value === '') {
        alert('Digite uma tarefa!');
        return false;
} else{
<<<<<<< Updated upstream
    let novaTarefa = inputElement.value; //pega o valor do input e armazena na variável novaTarefa
    
    tarefas.push(novaTarefa); //adiciona a nova tarefa ao array tarefas
    inputElement.value = ''; //limpa o input após adicionar a tarefa

    renderTarefas();
=======
    //vou pegar o valor do input e armazenar na variável novaTarefa
    let novaTarefa = inputElement.value; 
    //adicionar a nova tarefa ao array tarefas
    tarefas.push(novaTarefa); 
    //limpar o input após adicionar a tarefa
    inputElement.value = ''; 
>>>>>>> Stashed changes
}
}

// agora vamos atribuir a função adicionarTarefas ao evento de clique do botão
buttonElement.onclick = adicionarTarefas; 




 
