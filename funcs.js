const user = {
    nome: 'Usuário',
    idade: 25,
    endereco: {
        rua: 'Rua central',
        numero: 1
    },
    projetos: ['Projeto 1', 'Projeto 2']
};

const { nome } = user;
console.log(nome);

const { endereco: { rua } } = user;
console.log(rua);

const { projetos } = user;
console.log(projetos);

const { projetos: [, segunda] } = user;
console.log(segunda);

const students = [
    { id: 1, name: 'John Doe', age: 23, scholarship: false },
    { id: 2, name: 'Margoe Rose', age: 19, scholarship: true },
    { id: 3, name: 'Kayle', age: 22, scholarship: true }
];

const [primeiro] = students;
console.log(primeiro)

const [, , terceiro] = students;
console.log(terceiro)

const [, { name }] = students;
console.log(name);

//Desafio 2

function separadamente(arr) {
    console.log(...arr)
};

function mostra_nome({ nome }) {
    console.log(nome);
}

function junta_obj(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

function junta_array(arr1, arr2) {
    return [...arr1, ...arr2]
}





