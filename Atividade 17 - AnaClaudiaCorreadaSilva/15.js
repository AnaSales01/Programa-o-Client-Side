/*Questão 15 - Ler três valores e determinar o maior dentre eles. */

var x = 0;
var y = 0;
var z = 0;

if(x>y && x>z){
    console.log("O maior valor é: ",x);
}
else if(y>x && y>z){
    console.log("O maior valor é: ",y);
}
else if(z>x && z>y){
    console.log("O maior valor é: ",z);
}
else if (x==y && x==z && y==z){
    console.log("Os valores são iguais!");
}