//começo definindo as variáveis
let peso;
let altura;
let imc;
let resultado;

//crio a função para calcular o IMC
function calcular(event){
    //o preventDefault() é pra impedir que ao apertar o botão de calcular o navegador recarregue a página
    event.preventDefault();

    // peço para o usuário digitar o peso e a altura usando parseFloat para transformar em número
    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);
    resultado = document.getElementById("resultado");

    //aqui eu faço a verificação se o usuário digitou um valor válido antes de calcular o IMC
    if(isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0){
        resultado.innerHTML = "Por favor, preencha os dados corretamente";
        return;
    }

    imc = peso / (altura * altura);

    //resultado.ClassName = "resultado" é pra dar um estilo ao resultado, mas não é necessário
    // eu usei para estilizar e saber em qual resultado o css irá aplicar
    resultado.className = "";

    if(imc < 17){
        resultado.classList.add("muito-abaixo")
        resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(2)} <br>Você está muito abaixo do peso!`
    } else if(imc > 17 && imc <= 18.49){
        resultado.classList.add("abaixo")
        resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(2)} <br> Você está abaixo do peso`
    }  else if(imc >= 18.5 && imc < 24.99){
        resultado.classList.add("ideal")
        resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(2)} <br> Você está no peso ideal`
    }  else if(imc >= 25 && imc <= 29.99){
        resultado.classList.add("acima")
        resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(2)} <br> Você está acima do peso`
    }  else if(imc >= 30){
        resultado.classList.add("obesidade")
        resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(2)} <br> Cuidado, obesidade`  
    }

    //aqui eu redefino a variável resultado para que ela possa ser usada novamente
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";

}