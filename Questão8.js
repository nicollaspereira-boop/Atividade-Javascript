// 1. Conversão: Celsius para Kelvin
const celsius = 25;
const kelvin = celsius + 273.15; 

console.log(`${celsius}°C equivale a ${kelvin} K`);
// Saída: 25°C equivale a 298.15 K

// 2. Conversão Inversa: Kelvin para Celsius (Desafio)
const kInput = 300;
const cOutput = kInput - 273.15; 

console.log(`${kInput} K equivale a ${cOutput.toFixed(2)}°C`);
// Saída: 300 K equivale a 26.85°C