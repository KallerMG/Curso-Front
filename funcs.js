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


