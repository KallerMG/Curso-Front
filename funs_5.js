const promisse_1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("A resolução do exec 1 foi feita");
        }, 5000);
    }
    )
};

const promisse_2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("A resolução do exec 2 foi feita");
        }, 3000);
    }
    )
};

const promisse_3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("A resolução do exec 3 não foi feita");
        }, 4000);
    }
    )
};

async function desafio5_2() {
    try {
        const res = await Promise.all([promisse_1(), promisse_2(), promisse_3()]);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

desafio5_2();

async function desafio5_3() {
    try {
        const res = await Promise.all([promisse_1(), promisse_2()]);
        console.log(res);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Final da execução");
    }
}

desafio5_3();