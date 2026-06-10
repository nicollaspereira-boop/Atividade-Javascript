const calcCambio = (val, tAtual, tCompra) => ({
    total: val * tAtual, 
    lucro: val * (tAtual - tCompra), 
    retorno: ((tAtual / tCompra) - 1) * 100
});

// Exibe: R$ 5500 | Lucro: R$ 500 | Retorno: 10%
const res = calcCambio(1000, 5.5, 5.0);
console.log(`R$ ${res.total} | Lucro: R$ ${res.lucro} | ${res.retorno}%`);

// Teste Unitário
console.assert(calcCambio(100, 5, 4).lucro === 100);