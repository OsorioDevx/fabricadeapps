//loops são estruturas de repetição que permitem executar um bloco de código várias vezes.
//while é uma estrutura de repetição que executa um bloco de código enquanto uma condição for verdadeira.
let x = 10;

//abaixo temos um exemplo de loop while que incrementa o valor de x até que ele seja menor que 10
//entre os parênteses do while, colocamos a condição que deve ser verdadeira para que o loop continue executando
// o getElementById('ValorX') é usado para acessar o elemento HTML onde vamos exibir o valor de x e o innerHTML é usado para modificar o conteúdo desse elemento
//o x++ é usado para incrementar o valor de x em 1 a cada iteração do loop
while(x < 10){
    document.getElementById('valorDeX').innerHTML += `Valor de x: ${x} <br> `;

    x++; //x = x+1 
}

//for é uma estrutura de repetição que executa um bloco de código um número específico de vezes
//o for é usado quando sabemos quantas vezes queremos repetir um bloco de código
//dentro dos parênteses do for, temos três partes separadas por ponto e vírgula:
//1. Inicialização: onde declaramos e inicializamos uma variável de controle (neste caso, a variável 'a').
//2. Condição: que é verificada antes de cada iteração do loop (neste caso, enquanto 'a' for menor que 5).
//3. Incremento: que é executado após cada iteração do loop (neste caso, 'a++' incrementa 'a' em 1)

for(a = 0; a <20; a++){
    document.getElementById('valorDeX').innerHTML += `Valor de a: ${a} <br>`;
}

//resumindo, o while é usado quando não sabemos quantas vezes queremos repetir um bloco de código, enquanto o for é usado quando sabemos quantas vezes queremos repetir um bloco de código.