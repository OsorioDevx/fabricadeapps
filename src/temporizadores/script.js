// setInterval

function acao(){
    //aqui eu vou usar += porque quero visualizar os resultados um em baixo do outro, o += vai somar o valor atual com o novo valor
    document.getElementById("execute").innerHTML += "Executando... <br>";
}


//o tempo está em milisegundos, portanto 1000 ao lado de acao representa 1 segundo
//aqui ele vai executar a ação de 1 em 1 segundo infinitamente
/*setInterval(acao, 5000) 

// Vou fazer também um exemplo com uma função anônima
setInterval(() => {
    document.getElementById("execute").innerHTML += "Executando!!!!... <br>"
}, 2000)*/


// ---------------------------------------- setTimeout
// setTimeout é usado para executar uma ação uma única vez, após um determinado tempo
//Ele só vai executar a função quando o tempo que eu determinei dentro dele for cumprido
setTimeout(acao, 3000);