const installments = [
    {
        installment_number: 1,
        value: 123.45,
        status: 'Pago'
    },
    {
        installment_number: 2,
        value: 139.88,
        status: 'Pago'
    },
    {
        installment_number: 3,
        value: 123.45,
        status: 'Pago'
    },
    {
        installment_number: 4,
        value: 182.37,
        status: 'Aberto'
    },
    {
        installment_number: 5,
        value: 133.93,
        status: 'Aberto'
    }
];

/* const resultado_DE_a = installments.reduce((acumulador, insta) => {
    return acumulador + insta.value;
}, 0)

console.log("Valor total das parcelas:", resultado_DE_a.toFixed(2)); */

/* const resultado_DE_b = installments.reduce((acc, insta) => {
    if (insta.status == 'Pago') {
        return {
            total_pago: acc.total_pago + 1,
            total_aberto: acc.total_aberto
        };
    } else {
        return {
            total_pago: acc.total_pago,
            total_aberto: acc.total_aberto + 1
        };
    }

}, {
    total_pago: 0,
    total_aberto: 0
})

console.log("Valor total das parcelas:", resultado_DE_b); */


/* const resultado_DE_c = installments.sort((a, b) => {
    return b.value - a.value;
});

console.log("Forma desc", resultado_DE_c);
 */
const resultado_DE_d = installments.sort((a, b) => {
    return ((a.value - b.value) == 0) ? (b.installment_number - a.installment_number) : a.value - b.value
});

console.log("Forma crescente:", resultado_DE_d);



