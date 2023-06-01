const medida = prompt("Digite, em metros, a medida que deseja converter:")
const medidaReal = parseFloat(medida)
const conversao = prompt("Agora, digite a sigla da medida para qual deseja converter:\n\n" + 
                         "mm - (milímetro):\n" +
                         "cm - (centímetro):\n" +
                         "dc - (decímetro):\n" +
                         "dam - (decâmetro):\n" +
                         "hm - (hectômetro):\n" +
                         "km - (quilomêtro):\n")
const conversaoMaiusculo = conversao.toUpperCase()

let newMedida = 0

switch(conversaoMaiusculo){
     case "MM":
          newMedida = medidaReal * 1000
          alert(medidaReal + " metros, equivalem à " + newMedida + " milímetros")
          break
     case "CM":
          newMedida = medidaReal * 100
          alert(medidaReal + " metros, equivalem à " + newMedida + " centímetros")
          break
     case "DC":
          newMedida = medidaReal * 10
          alert(medidaReal + " metros, equivalem à " + newMedida + " decímetros")
          break
     case "DAM":
          newMedida = medidaReal / 10
          alert(medidaReal + " metros, equivalem à " + newMedida + " decâmetros")
          break
     case "HM":
          newMedida = medidaReal / 100
          alert(medidaReal + " metros, equivalem à " + newMedida + " hectômetros")
          break
     case "KM":
          newMedida = medidaReal / 1000
          alert(medidaReal + " metros, equivalem à " + newMedida + " kilômetros")
          break
     default:
          alert("Opção inválida")
}