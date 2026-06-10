/**
 * Função para calcular o lucro e a margem de lucro percentual de uma venda.
 * * @param {number} custoAquisicao - O custo de aquisição do produto (R$).
 * @param {number} precoVenda - O preço de venda do produto (R$).
 */
function calcularLucroEMargem(custoAquisicao, precoVenda) {
    // 1. Calcula o valor do lucro obtido
    const lucro = precoVenda - custoAquisicao;
    
    // 2. Desafio Adicional: Calcula a margem de lucro percentual
    // Validamos se o custo é maior que zero para evitar erros de divisão por zero
    const margemLucro = custoAquisicao > 0 ? (lucro / custoAquisicao) * 100 : 0;
    
    // 3. Exibe os resultados formatados na tela
    console.log("=========================================");
    console.log("📈 ANÁLISE COMERCIAL DA VENDA");
    console.log("=========================================");
    console.log(`Custo do Produto: R$ ${custoAquisicao.toFixed(2)}`);
    console.log(`Preço de Venda:   R$ ${precoVenda.toFixed(2)}`);
    console.log(`Lucro Líquido:    R$ ${lucro.toFixed(2)}`);
    console.log(`Margem de Lucro:  ${margemLucro.toFixed(2)}%`);
    
    // Feedback visual sobre a saúde financeira da venda
    if (lucro > 0) {
        console.log("Status: Operação Lucrativa Semanal ✅");
    } else if (lucro < 0) {
        console.log("Status: Operação com Prejuízo ⚠️");
    } else {
        console.log("Status: Ponto de Equilíbrio (Sem lucro/prejuízo) ⚖️");
    }
    console.log("=========================================\n");

    return {
        lucro,
        margemLucro
    };
}

// ==========================================
// Testando a aplicação com diferentes cenários
// ==========================================

// Cenário 1: Produto comprado por R$ 50,00 e vendido por R$ 75,00 (Deve dar 50% de margem)
calcularLucroEMargem(50.00, 75.00);

// Cenário 2: Produto comprado por R$ 100,00 e vendido por R$ 80,00 (Prejuízo)
calcularLucroEMargem(100.00, 80.00);
