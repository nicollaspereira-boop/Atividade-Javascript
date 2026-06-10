// calculadora-desconto-curta.js

const formatarMoeda = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const calcularEExibir = (preco, desconto) => {
  const economia = preco * (desconto / 100);
  
  console.log(`===== CALCULADORA DE DESCONTO =====
Preço original:      ${formatarMoeda(preco)}
Desconto aplicado:   ${desconto}%
Valor descontado:    ${formatarMoeda(economia)}
Preço final:         ${formatarMoeda(preco - economia)}
-----------------------------------
Você economizou:     ${formatarMoeda(economia)}
===================================`);
};

// Exemplo de uso direto
calcularEExibir(199.9, 15);
