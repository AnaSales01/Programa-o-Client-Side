/*Questão 16 -  Faça um programa que receba a idade de uma pessoa e mostre mensagem informando 
“maior de idade”, “menor de idade” ou "idoso(a)". Considere a idade a partir de 18 anos como maior de idade. */

var idade = 90;

if (idade < 18){
    console.log("Você é menor de idade!");
}

else if(idade >= 18 && idade < 65){
    console.log("Você é maior de idade!");
}

else if (idade >= 65){
    console.log("Você é idoso!");
}