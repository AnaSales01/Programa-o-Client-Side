/*Questão 05 - Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor. 
Consegue criar mais de uma solução? */

var numeros = [10,800,2];

numeros.sort(function(a,b){
    return a-b;
});
console.log(numeros)