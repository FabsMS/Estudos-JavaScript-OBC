let data = []

amount = 0

let option = 0

do{
     option = prompt("Quantidade de Imóveis Cadastrados: " + amount +
                     "\n\nAções:" +
                     "\n1 - Cadastrar Novo Imóvel" +
                     "\n2 - Mostrar Imóveis Cadastrados" +
                     "\n3 - Sair")

     switch(option){
          case '1':
               const properties = {}
               properties.owner = prompt("Digite o nome do proprietário do imóvel:")
               properties.rooms = prompt("Digite a quandidade de quartos presentes no imóvel:")
               properties.bathrooms = prompt("Digite a quandidade de banheiros presentes no imóvel:")
               properties.garages = prompt("O imóvel possui garagem? [sim/não]")
               amount++
               data.push(properties)
               break
          case '2':
               if(amount === 0){
                    alert("Não há dados de Imóveis para apresentar!")
               }else{
                    for(let i = 0; i < amount; i++){
                         alert("Dados do imóvel " + (i+1) + ":" +
                               "\nProprietário: " + data[i].owner +
                               "\nQuartos: " + data[i].rooms +
                               "\nBanheiros: " + data[i].bathrooms +
                               "\nGaragem: " + data[i].garages)
                    }
               }
               break
          case '3':
               alert("Saindo...")
               break
          default:
               alert("Opção inválida")
     }
}while(option !== "3")

alert("Sistema finalizado com sucesso!")