let openingBalance = prompt("Digite o saldo inicial da sua conta: ")
let balance = parseFloat(openingBalance)
let option = 0
do{
     option = prompt("Saldo atual: R$ " + balance +
                     "\n O que deseja fazer agora?" +
                     "\n [1] - Realizar depósito" +
                     "\n [2] - Realizar saque" +
                     "\n [3] - Encerrar operações")
     switch(option){
          case '1':
               let deposit = parseFloat(prompt("Digite o valor que deseja depositar em sua conta: "))
               balance += deposit
               break
          case '2':
               let withdraw = parseFloat(prompt("Digite o valor que deseja sacar: "))
               withdraw > balance ? alert("Saldo indisponível para saque...") : balance -= withdraw
               break
          case '3':
               alert("Encerrando operações...")
               break
          default:
               alert("Opção Inválida!")
     }
}while(option !== "3")

alert("Operações encerradas com sucesso!")