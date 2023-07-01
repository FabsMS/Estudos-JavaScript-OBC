let cards = []

let option = 0
do{
     option = prompt("Quantidade de cartas na pilha: " + cards.length +
                     "\n\nO que deseja fazer?\n" +
                     "1 - Adicionar Carta\n" +
                     "2 - Puxar Carta\n" +
                     "3 - Sair")
     switch(option){
          case '1':
               let newCard = prompt("Digite a carta a ser inserida:")
           cards.unshift(newCard)
               break
          case '2':
               if (cards.length == 0){
                    alert("Não há cartas na pilha!")
               }else{
                    let nextCard = cards.shift()
                    alert("Carta Puxada: " + nextCard)
               }
               break
          case '3':
               alert("Operações sendo encerradas...")
               break
          default:
               alert("OPÇÃO INVÁLIDA")
     }
}while(option !== "3")

alert("Ações encerradas com sucesso!")