/**
 * Função para calcular o custo total de uma viagem.
 * * @param {number} distancia - Distância da viagem em quilômetros (km).
 * @param {number} consumoMedio - Consumo médio do veículo em km/L.
 * @param {number} precoCombustivel - Preço do combustível por litro (R$).
 * @param {boolean} calcularIdaEVolta - (Desafio) Se true, dobra a distância para considerar ida e volta.
 */
function relatorioDeViagem(distancia, consumoMedio, precoCombustivel, calcularIdaEVolta = false) {
    // Desafio adicional: Ajusta a distância se for ida e volta
    const distanciaTotal = calcularIdaEVolta ? distancia * 2 : distancia;
    
    // Cálculo da quantidade de combustível necessária
    const combustivelNecessario = distanciaTotal / consumoMedio;
    
    // Cálculo do custo total da viagem
    const custoTotal = combustivelNecessario * precoCombustivel;
    
    // Exibição dos resultados formatados na tela (console)
    console.log("=========================================");
    console.log("🚗 RESUMO DA VIAGEM");
    console.log("=========================================");
    console.log(`Trajeto: ${calcularIdaEVolta ? "Ida e Volta" : "Apenas Ida"}`);
    console.log(`Distância total: ${distanciaTotal.toFixed(2)} km`);
    console.log(`Consumo médio: ${consumoMedio.toFixed(2)} km/L`);
    console.log(`Combustível necessário: ${combustivelNecessario.toFixed(2)} Litros`);
    console.log(`Custo estimado: R$ ${custoTotal.toFixed(2)}`);
    console.log("=========================================\n");

    // Retorna os valores caso queira usar os dados em outra parte do sistema
    return {
        distanciaTotal,
        combustivelNecessario,
        custoTotal
    };
}

// ==========================================
// Testando a aplicação com valores de exemplo
// ==========================================

const distancia = 250;       // Ex: 250 km de distância
const consumo = 12.5;        // Ex: O carro faz 12.5 km por litro
const precoLitro = 5.89;     // Ex: O litro custa R$ 5,89

// 1. Calculando apenas a IDA
relatorioDeViagem(distancia, consumo, precoLitro, false);

// 2. Calculando IDA e VOLTA (Desafio Adicional)
relatorioDeViagem(distancia, consumo, precoLitro, true);
