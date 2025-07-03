//definindo variáveis no javascript
//let, var e const, sendo let a mais utilizada atualmente
//let é uma variável que pode ser alterada, var é uma variável global e const é uma constante que não pode ser alterada
//let é o mais utilizado atualmente porque tem escopo de bloco
let idade = 18;
let nome = "Matheus";

//o console.log é utilizado para imprimir no console do navegador ou do terminal
console.log(`Olá, meu nome é ${nome}, eu tenho ${idade}`);
  

//alert é utilizado para mostrar uma mensagem na tela do navegador
alert(`Olá ${nome}`);

//o prompt é utilizado para receber uma entrada do usuário
let chamado = prompt("Qual o número de protocolo do seu chamado?");

//o document.write é utilizado para escrever na tela do navegador mas está obsoleto
//document.write(`<h1>Protocolo ${chamado} aberto !</h1>`); 
// A melhor forma de escrever no HTML é utilizando o innerHTML
//innerHTML é utilizado para escrever no HTML de uma forma mais segura e moderna
document.getElementById("texto-div").innerHTML = `<h1>Protocolo ${chamado} aberto !</h1>`;
document.getElementById("imagem-div").innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/10279/10279499.png" 
alt="Ícone azul de documento com marca de seleção, representando protocolo aberto, sobre fundo branco"/>`;b 

nome = "Marcos";
idade = 18;

console.log(`Olá, meu nome é ${nome}, eu tenho ${idade} anos`); //template string ``

