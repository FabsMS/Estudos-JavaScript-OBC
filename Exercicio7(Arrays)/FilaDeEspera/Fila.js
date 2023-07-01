let queue = []

let option = 0
do{
     option = prompt("Qual opção deseja selecionar?\n" +
                     "1 - Ver Lista de Pacientes\n" + 
                     "2 - Adicionar Paciante\n" +
                     "3 - Chamar Pŕoximo Paciente\n" +
                     "4 - Sair")
     switch(option){
          case '1':
               if(queue.length == 0){
                    alert("Não há pacientes na fila de espera!")
               }else{
                    let list = "Próximos pacientes:\n\n"
                    for(let index = 0; index < queue.length; index++){
                         list += index+1 + "º - " + queue[index] + "\n"
                    }
                    alert(list)
               }
               break
          case '2':
               let newPacient = prompt("Digite o nome do paciente a ser inserido:")
               queue.push(newPacient)
               break
          case '3':
               if(queue.length == 0){
                    alert("Não há pacientes na fila de espera!")
               }else{
                    let nextPacient = queue.shift()
                    alert("Paciente chamado: " + nextPacient)
               }
               break
          case '4':
               alert("Operações sendo encerradas...")
               break
          default:
               alert("OPÇÃO INVÁLIDA")
     }
}while(option !== "4")

alert("Ações encerradas com sucesso!")