const firstCar = window.prompt("Digite o modelo do primeiro veículo:");
const firstSpeed = window.prompt("Agora, digite a sua velocidade:");
const firstSpeedReal = parseFloat(firstSpeed)

const secondCar = window.prompt("Digite o modelo do segundo veículo:");
const secondeSpeed = window.prompt("Agora, digite a sua velocidade:");
const secondeSpeedReal = parseFloat(secondeSpeed)

if(firstSpeedReal > secondeSpeedReal){
     window.alert("O primeiro carro [" + firstCar + "], é mais rápido do que o segundo [" + secondCar + "]");
}
else if(secondeSpeedReal > firstSpeedReal){
     window.alert("O segundo carro [" + secondCar + "], é mais rápido do que o primeiro [" + firstCar + "]");
}
else{
     window.alert("Ambos os carros tem a mesma velocidade")
}
