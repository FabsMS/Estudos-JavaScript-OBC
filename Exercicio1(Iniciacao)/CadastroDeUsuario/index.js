const actualYear = 2023

let name
let surname
let study
let year

name = window.prompt("Digite o seu nome:")
surname = window.prompt("Digite o seu sobrenome:")
study = window.prompt("Digite o seu campo de estudo:")
year = window.prompt("Digite o seu ano de nascimento:")

const completeName = name + " " + surname
const age = actualYear - parseFloat(year)

window.confirm("Seja bem vindo!\n\n" +  
               "Dados Cadastrados:\n" + 
               "Nome Completo: " + completeName + 
               "\nCampo de Estudo: " + study + 
               "\nIdade: " + age + 
               "\n\nVocê confirma essas informações?")