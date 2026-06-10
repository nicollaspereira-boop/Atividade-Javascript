// Entradas
const s0 = 10; // Posição inicial (metros)
const v  = 5;  // Velocidade (m/s)
const t  = 4;  // Tempo (segundos)

// Cálculos
const s = s0 + (v * t);       // Posição final: 30m
const distancia = Math.abs(v * t); // Distância percorrida: 20m (Desafio)

// Exibição
console.log(`Posição Final: ${s}m | Distância: ${distancia}m`);