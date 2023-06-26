const number = prompt("Olá! Estou aqui para te ajudar\n" + 
                      "Me diga qual número deseja calcular a tabuada:")

let result = "Aqui está a tabauda do " + number + ":\n"

for(let i = 1; i <= 20; i++){
     result += (number + " * " + i + " = " + number*i + "\n")
}

alert(result + "Obrigado, espero ter ajudado ;)")