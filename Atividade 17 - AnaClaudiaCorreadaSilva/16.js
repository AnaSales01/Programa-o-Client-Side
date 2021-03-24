/*Questão 16 - Ler três valores e colocá-los em ordem crescente. */

var numeros = [1,1000,2];

numeros.sort(function(a,b){
    return a-b;
});
console.log(numeros)