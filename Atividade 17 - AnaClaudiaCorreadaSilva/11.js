/*Questão 11 - Que gere o preço de um carro ao consumidor e os valores pagos pelo imposto e pelo lucro do 
distribuidor, sabendo o custo de fábrica do carro e que são pagos:
a) de imposto: 45% sobre o custo do carro;
b) de lucro do distribuidor: 12% sobre o custo do carro. */

var  imposto = 0.45;
var lucro = 0.12;
var carro = 22000;
var cliente = carro*imposto;
var clientetotal = carro + cliente
var distribuidorlucro = carro*lucro
console.log("O preço total da Kombi é: ",clientetotal);
console.log("O lucro do distribuidor é: ",distribuidorlucro);
