// 1. Função: Calcula gorjeta, total e divisão
const fecharConta = (conta, gorjeta, pessoas) => {
    let valorGorjeta = conta * (gorjeta / 100);
    let total = conta + valorGorjeta;
    return { valorGorjeta, total, cada: total / pessoas };
};

// 2. Exibição (Ex: R$ 100, 10%, 2 pessoas)
let res = fecharConta(100, 10, 2);
console.log(`Gorjeta: R$ ${res.valorGorjeta} | Total: R$ ${res.total} | Cada: R$ ${res.cada}`);

// 3. Teste Unitário
console.assert(fecharConta(100, 10, 2).total === 110, "Erro no total!");