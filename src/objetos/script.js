//OBJETOS
//vou criar um objeto com as informações do usuário
let pessoa = {
    nome: 'João',
    idade: 30,
    cidade: 'Manaus',
    altura: 1.85,
    cargo: 'Desenvolvedor'
};

let carro = {
    marca: 'Fiat',
    modelo: 'Punto',
    ano: 2015,
    cor: 'Azul',
    placa: 'ABC1234'
};

document.getElementById("joao").innerHTML = pessoa.nome; //exibe o nome da pessoa = variável.propriedade
console.log(pessoa);
console.log(carro);

//Vou criar agora uma lista de objetos
let usuarios = [
    {nome: "Matheus", cargo: "Desenvolvedor", status: "Ativo"},
    {nome: "João", cargo: "Gerente", status: "Ativo"},
    {nome: "Maria", cargo: "Vendedora", status: "Inativo"},
];

console.log(usuarios);