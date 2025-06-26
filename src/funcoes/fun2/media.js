//nesta função eu adicionei dois parâmetros, que são as notas do aluno
//parametros são variáveis que eu vou passar para a função
//a função vai calcular a média das notas e retornar o resultado
function mediaAluno(nota1, nota2){
    let media = (nota1 + nota2) /2 // aqui eu estou calculando a média das notas

    //vou fazer uma condição para verificar se a média é maior ou igual a 6
    if(media >= 6){
        console.log(`O aluno foi aprovado com média ${media}`);
    } else if(media < 6){
        console.log(`O aluno foi reprovado com média ${media}`);

    }
}

function aluno (nome, curso){
    let boasvindas = `Seja bem-vindo(a) ${nome} ao curso de ${curso}!`
    console.log(boasvindas);
}