const atackName = window.prompt("Digite o nome do seu personagem:")
const atackNumber = window.prompt("Agora, digite o poder de ataque do seu personagem:")
const realAtack = parseFloat(atackNumber);

const defenseName = window.prompt("Digite o nome do personage de defesa:")
let lifeNumber = window.prompt("Agora, digite a quantidade de vida desse personagem:")
const defenseNumber = window.prompt("Digite também o poder de defesa do personagem de defesa:")
const Shield = window.prompt("O personagem de defesa possui um escudo? [s/n]")
const realShield = Shield.toUpperCase()

let danoCausado = 0

if(realAtack > defenseNumber && realShield === "N"){
     danoCausado = realAtack - defenseNumber
     lifeNumber -= danoCausado
     lifeNumber <= 0 ? window.alert("O personagem de defesa morreu") : window.alert("O personagem de defesa sofreu " + danoCausado + " de dano! Sua vida atual é: " + lifeNumber)
}
else if(realAtack > defenseNumber && realShield === "S"){
     danoCausado = (realAtack - defenseNumber)/2
     lifeNumber -= danoCausado
     lifeNumber <= 0 ? window.alert("O personagem de defesa morreu") : window.alert("O personagem de defesa sofreu " + danoCausado + " de dano! Sua vida atual é: " + lifeNumber)
}
else{
     window.alert("O personagem não sofreu dano e permaneceu com a sua vida inicial: " + lifeNumber)
}