const colaboradores = [
    {
        name: 'Juca',
        idade: 25,
        cargo: 'front-end'
    },
    {
        name: 'Márcia',
        idade: 23,
        cargo: 'back-end'
    },
    {
        name: 'Vitória',
        idade: 28,
        cargo: 'designer'
    },
    {
        name: 'Fernando',
        idade: 19,
        cargo: 'estagiario'
    },
    {
        name: 'Fabiane',
        idade: 25,
        cargo: 'back-end'
    },
    {
        name: 'Jéssica',
        idade: 23,
        cargo: 'front-end'
    },
]

const resultado_1 = colaboradores.map(colab => {
    return colab.name;
});

console.log(resultado_1);

const resultado_2 = colaboradores.filter(colab => {
    return colab.cargo == 'front-end';
});

console.log(resultado_2);

const resultado_3 = colaboradores.find(colab => {
    return colab.idade > 23;
});

console.log(resultado_3);

const resultado_4 = colaboradores.every(colab => {
    return colab.idade > 18;
});

console.log("São Maiores de 18?", resultado_4);

const resultado_5 = colaboradores.some(colab => {
    return colab.cargo == 'estagiario';
});

console.log("Existe algum estagiário?", resultado_5);


const resultadoD2_1_a = colaboradores.reduce((acumulador, colab) => {
    return acumulador + colab.idade;
}, 0);

console.log("Soma das idades:", resultadoD2_1_a);

const resultadoD2_1_b = colaboradores.reduce((acc, colab) => Object.assign(acc, { [colab.cargo]: acc[colab.cargo] ? acc[colab.cargo] + 1 : 1 }), {});

console.log("Resultado D2 1 b:", resultadoD2_1_b);

// Colaboradores crescente
///const resultadoD2_2_a = colaboradores.sort((a, b) => {
// return a.idade - b.idade;
//});

//console.log("Resultado D2 2 a:", colaboradores);

// Colaboradores decrescente
///const resultadoD2_2_b = colaboradores.sort((a, b) => {
// return b.idade - a.idade;
//});

//console.log("Resultado D2 2 b:", colaboradores);


/* const resultadoD2_2_c = colaboradores.sort((a, b) => {
    let pesos = {
        'back-end': 3,
        'front-end': 2,
        'designer': 4,
        'estagiario': 1
    };
    return pesos[a.cargo] - pesos[b.cargo];
});

console.log("Resultado D2 2 c:", resultadoD2_2_c); */

const resultadoD2_2_d = colaboradores.sort((a, b) => {
    let pesos = {
        'back-end': 3,
        'front-end': 2,
        'designer': 4,
        'estagiario': 1
    };
    if (a.idade > b.idade) {
        return 1;
    }
    if (a.idade < b.idade) {
        return -1;
    }
    if (a.idade == b.idade) {
        return pesos[a.cargo] - pesos[b.cargo];
    }
    return 0;
});

console.log("Resultado D2 2 c:", resultadoD2_2_d);