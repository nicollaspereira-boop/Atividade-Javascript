// Entradas
const qtdBtc = 0.05;
const precoAtual = 340000;
const valorOriginal = 12000;

// Cálculos
const valorTotal = qtdBtc * precoAtual;               // R$ 17.000
const lucro = valorTotal - valorOriginal;              // R$ 5.000
const rentabilidade = (lucro / valorOriginal) * 100;  // 41.67%

// Exibição
console.log(`Total: R$ ${valorTotal} | Lucro: R$ ${lucro} | Retorno: ${rentabilidade.toFixed(2)}%`);