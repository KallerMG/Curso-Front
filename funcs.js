const subtrai = function (numero1, numero2) {
    return numero1 - numero2;
}

const testaZero = num_teste => {
    let resultado = num_teste == 0 ? "É zero" : "Não é zero";
    console.log(resultado);
};

function testaSinal(num1, num2) {
    let resultado = subtrai(num1, num2);
    if (resultado == 0) {
        console.log("Zero");
    } else if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
        console.log("Subtração entre números de sinais diferentes");
    } else {
        console.log("Subtração entre números de mesmo sinal");
    }
};