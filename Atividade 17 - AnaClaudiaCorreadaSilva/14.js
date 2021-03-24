/*Questão 14 - Ler 2 números inteiros do teclado. Se o segundo for diferente de zero, calcular e imprimir 
o quociente do primeiro pelo segundo. Caso contrário, imprimir a mensagem: “DIVISÃO POR ZERO”. */

var numero1 = 10;
var numero2 = 0;
var resultado = numero1/numero2;
if (numero2 != 0){
    console.log("O quociente é: ",resultado);
}
else if(numero2 == 0){
    console.log("DIVISÃO POR 0");
}