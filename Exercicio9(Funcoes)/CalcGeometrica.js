function triangle(base, height){
     area = (base * height) / 2
     return area
}

function rectangle(base, height){
     area = base * height
     return area
}

function square(base){
     area = base ** 2
     return area
}

function trapeze(baseG, baseP, height){
     area = ((baseG + baseP) * height) / 2
     return area
}

function circle(radius){
     area = 3.14 * (radius ** 2)
     return area
}

let option = ''

do{
     option = prompt("Bem vindo à cálculadora geométrica!\n\n" +
                     "Selecione o tipo de cálculo que deseja realizar:" +
                     "\n1. Área do triângulo" +
                     "\n2. Área do retângulo" +
                     "\n3. Área do quadrado" +
                     "\n4. Área do trapézio" +
                     "\n5. Área do círculo" +
                     "\n6. Sair")
     switch(option){
          case '1':
               const baseTriangle = prompt("Digite a medida da base do triângulo:")
               const heightTriangle = prompt("Agora, digite a medida da altura do triângulo:")
               const areaTriangle = triangle(baseTriangle, heightTriangle)
               alert("A área do triângulo em questão é igual à: " + areaTriangle + "u.a.")
               break
          case '2':
               const baseRectangle = prompt("Digite a medida daa base do retângulo:")
               const heightRectangle = prompt("Agora, digite a medida da altura do retângulo:")
               const areaRectangle = rectangle(baseRectangle, heightRectangle)
               alert("A área do retângulo em questão é igual à: " + areaRectangle + "u.a.")
               break
          case '3':
               const sideSquare = prompt("Digite a medida do lado do quadrado:")
               const areaSquare = square(sideSquare)
               alert("A área do quadrdado em questão é igual à: " + areaSquare + "u.a.")
               break
          case '4':
               const basePTrapeze = prompt("Digite a medida da base maior do trapézio:")
               const baseGTrapaze = prompt("Agora, digite a medida da sua base menor:")
               const heightTrapeze = prompt("Por fim, digite a altura do trapézio:")
               const areaTrapeze = trapeze(baseGTrapaze, basePTrapeze, heightTrapeze)
               alert("A área do trapézio em questão é igual à: " + areaTrapeze + "u.a.")
               break
          case '5':
               const radiusCircle = prompt("Digite a medida do raio do círculo:")
               const areaCircle = circle(radiusCircle)
               alert("A área do círculo em questão é igual à: " + areaCircle + "u.a.")
               break
          case '6':
               alert("Finalizando calculadora...")
               break
          default:
               alert("Opção inválida...\nVoltando ao menu")
     }
}while(option !== '6')

alert("Calculadora finalizada com sucesso!")