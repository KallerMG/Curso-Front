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

const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
        rua: 'Rua central',
        numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
}
// pontos
console.log(user.nome);
console.log(user.endereco.rua);
console.log(user.projetos[1]);

// colchetes
console.log(user["nome"]);
console.log(user["endereco"]["rua"]);
console.log(user["projetos"][1]);

//utilizando var

let endereco_var = "endereco";
let numero_da_rua_var = "numero";
console.log(user[endereco_var][numero_da_rua_var]);

const students = [
    { id: 1, name: 'John Doe', age: 23, scholarship: false },
    { id: 2, name: 'Margoe Rose', age: 19, scholarship: true },
    { id: 3, name: 'Kayle', age: 22, scholarship: true }
]

function somente_nomes(item) {
    console.log(item["name"]);
};

students.forEach(somente_nomes);

function maior_d_20(item) {
    if (item["age"] > 20) {
        console.log(item);
    };
};

students.forEach(maior_d_20);

let novo_arr = [];

function tem_bolsa(item) {
    if (item["scholarship"] == true) {
        novo_arr.push(item);
    };
};

students.forEach(tem_bolsa)
console.log(novo_arr);