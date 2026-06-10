/**
 * Função para calcular o lucro, a rentabilidade total e a rentabilidade anual de um investimento.
 * * @param {number} valorInicial - O valor inicialmente investido (R$).
 * @param {number} valorAtual - O valor atual ou de resgate do investimento (R$).
 * @param {number|null} meses - (Opcional) O tempo em meses que o dinheiro ficou aplicado.
 */
function analisarInvestimento(valorInicial, valorAtual, meses = null) {
    // Validação básica para evitar divisão por zero
    if (valorInicial <= 0) {
        console.error("Erro: O valor inicial investido deve ser maior que zero.");
        return;
    }

    // 1. Calcula o lucro obtido
    const lucro = valorAtual - valorInicial;

    // 2. Calcula a rentabilidade percentual total
    const rentabilidadeTotal = (lucro / valorInicial) * 100;

    // Exibição dos resultados no console
    console.log("=========================================");
    console.log("💰 RELATÓRIO DE RENDIMENTO");
    console.log("=========================================");
    console.log(`Valor Inicial Investido: R$ ${valorInicial.toFixed(2)}`);
    console.log(`Valor Atualizado:        R$ ${valorAtual.toFixed(2)}`);
    console.log(`Lucro Líquido Obtido:    R$ ${lucro.toFixed(2)}`);
    console.log(`Rentabilidade Período:   ${rentabilidadeTotal.toFixed(2)}%`);

    // 3. Desafio Adicional: Cálculo da rentabilidade anualizada (se os meses forem informados)
    if (meses !== null && meses > 0) {
        // Cálculo utilizando a fórmula de juros compostos para anualização (Taxa Equivalente)
        const rentabilidadeAnual = (Math.pow((valorAtual / valorInicial), (12 / meses)) - 1) * 100;
        
        console.log(`Tempo de Aplicação:      ${meses} meses`);
        console.log(`Rentabilidade Anual (aa): ${rentabilidadeAnual.toFixed(2)}% a.a.`);
    } else if (meses !== null) {
        console.log("⚠️ Para o cálculo anual, os meses devem ser maiores que zero.");
    }

    // Feedback visual rápido sobre o desempenho
    if (lucro > 0) {
        console.log("Desempenho: Carteira em alta! 🚀");
    } else if (lucro < 0) {
        console.log("Desempenho: Carteira em queda. 📉");
    } else {
        console.log("Desempenho: Sem oscilações (0 a 0). ⚖️");
    }
    console.log("=========================================\n");

    return {
        lucro,
        rentabilidadeTotal
    };
}

// ==========================================
// Testando a aplicação com cenários práticos
// ==========================================

// Cenário 1: Investiu R$ 1.000,00 e hoje tem R$ 1.250,00 após 6 meses
// (Deve render 25% no período e ~56.25% ao ano devido aos juros compostos)
analisarInvestimento(1000.00, 1250.00, 6);

// Cenário 2: Investiu R$ 5.000,00 e o valor caiu para R$ 4.800,00 após 3 meses (Prejuízo)
analisarInvestimento(5000.00, 4800.00, 3);

// Cenário 3: Investimento sem o parâmetro de meses (Apenas o cálculo básico solicitado)
analisarInvestimento(2000.00, 2300.00);
