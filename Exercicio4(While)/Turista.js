const touristName = prompt("Digite o seu nome:")
let citys = ""
let answer = prompt("Você já visitou alguma cidade? [s/n]")
let qtdCitys = 0

while(answer === 's'){
     qtdCitys += 1
     let visitedCity = prompt('Digite o nome da cidade visitada: ')
     citys += "\n" + visitedCity
     let newAnswer = prompt('Você visitou mais alguma cidade? [s/n]')
     answer = newAnswer
}

if(qtdCitys > 0){
     alert("Lista de cidades visitadas por " + touristName + ":" + citys + "\n\nNúmero de cidades visitadas: " + qtdCitys)
}
else{
     alert("Nenhuma cidade foi visitada por " + touristName)
}