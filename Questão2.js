// Remova os exemplos processarBonificacao(...) e adicione:
const entradaSalario = parseFloat(prompt("Digite o salário base (ex: 2500):"));
const entradaBonus = parseFloat(prompt("Digite o percentual de bônus (ex: 15):"));

if (!isNaN(entradaSalario) && !isNaN(entradaBonus)) {
    processarBonificacao(entradaSalario, entradaBonus);
} else {
    console.log("Por favor, insira valores numéricos válidos.");
}
