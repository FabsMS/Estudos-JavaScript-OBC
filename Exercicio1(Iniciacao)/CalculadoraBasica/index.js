let firstNumber = window.prompt("Digite o primeiro número:")
let secondNumber = window.prompt("Digite o segundo número:")

firstNumber = parseFloat(firstNumber)
secondNumber = parseFloat(secondNumber)

const soma = firstNumber + secondNumber
const subtração = firstNumber - secondNumber
const multiplicação = firstNumber * secondNumber
const divisão = firstNumber / secondNumber

window.alert("Números utilizados: " + firstNumber + " e " + secondNumber + 
             "\n\nResultados:" +  
             "\nSoma: " + soma + 
             "\nSubtração: " + subtração + 
             "\nMultiplicação: " + multiplicação + 
             "\nDivisão: " + divisão)