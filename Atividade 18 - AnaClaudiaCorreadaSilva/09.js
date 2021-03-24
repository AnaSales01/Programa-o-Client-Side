/*Questão 09 - Escreva um programa que recebe um número inteiro e diga se é par ou ímpar. 
Use o operador matemático % (resto da divisão ou módulo) e o teste condicional if. */

var numero = 2;
var quociente = numero%2;

if (quociente == 0){
    console.log("Esse número é par!")
}
else{
    console.log("Esse número é ímpar!")
}
