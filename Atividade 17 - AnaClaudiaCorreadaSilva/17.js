/*Questão 17 -  Ler os três coeficientes de uma equação de segundo grau e determinar suas raízes. */

var a = 10;
var b = 10;
var c = 20;
var delta = (b*b)-4*a*c;
var coeficiente1;
var coeficiente2;


console.log("O valor de Delta é: ",delta);
if (delta < 0) {
    console.log("A Equação não possui raiz real!")
}
else if
(coeficiente1 = (-b + Math.sqrt(delta))/(2*a)){
    console.log("X' = ",coeficiente1);

(coeficiente2 = (-b - Math.sqrt(delta))/(2*a))
    console.log("X'' = ", coeficiente2)
}

