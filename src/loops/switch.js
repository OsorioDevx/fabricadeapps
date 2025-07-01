function pedir(){
    let valor = prompt("Digite um valor de 1 a 4");

    //switch é uma estrutura de controle que permite executar diferentes blocos de código com base no valor de uma expressão.
    //Ele é usado quando você tem várias condições para verificar e deseja executar um bloco de código
    //primeiro eu defino uma variável que recebe o valor do prompt, depois converto esse valor para um número
    switch(Number (valor)){
        //aqui eu defino os casos que serão verificados, se o valor digitado for igual ao caso, o bloco de código correspondente será executado
        case 1: 
         alert("um Suco saindo")
         //o break é usado para sair do switch após a execução do bloco de código correspondente ao caso
        break;

        case 2:
            alert("Mandando uma água chefe");
            break;

        case 3: 
            alert("Um X=SALADA saindo");
            break;

        case 4:
            alert("Um jacaré quentinho indo até você");
        break
        //default é um caso que será executado se nenhum dos casos anteriores for atendido
        default:
            alert("Nada a declarar!!")

            break;
}
}