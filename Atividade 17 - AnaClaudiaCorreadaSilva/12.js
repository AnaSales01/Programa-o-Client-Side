/*Questão 12 - Leia a velocidade máxima permitida em uma avenida e a velocidade com que o motorista estava 
dirigindo nela e calcule a multa que uma pessoa vai receber, sabendo que são pagos:
a) 50 reais se o motorista estiver ultrapassar em até 10km/h a velocidade permitida (ex.: velocidade máxima: 
50km/h; motorista a 60km/h ou a 56km/h); 
b) 100 reais, se o motorista ultrapassar de 11 a 30 km/h a velocidade permitida.
c) 200 reais, se estiver acima de 31km/h da velocidade permitida. */

var velocidade = 112;

if (velocidade >=100 && velocidade <= 110) {
    console.log("Sua multa é de R$50,00");
}

else if(velocidade >=111 && velocidade <=130){
    console.log("Sua multa é de R$100,00");
}

else if(velocidade >=131){
    console.log("Sua multa é de R$200,00");
}

