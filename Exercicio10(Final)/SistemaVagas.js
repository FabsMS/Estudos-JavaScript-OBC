function mostrarVagas(listaVagas){
     if(listaVagas.length === 0){
          alert("Não há vagas disponíveis.")
     }else{
          let print = "Vagas Disponíveis:\n\n"
     for (let i = 0; i < listaVagas.length; i++) {
          print += "Vaga número " + (i + 1) + ":" +
                   "\nNome: " + listaVagas[i].nome +
                   "\nNº de Inscritos: " + listaVagas[i].candidatos +
                   "\n\n"
     }
     alert(print)
     }
}

function criarVaga(listaVagas){
     alert("Bem vindo à área de Criação de Vagas!")
     const dadosVaga = {}
     dadosVaga.nome = prompt("Com qual nome deseja cadastrar a vaga?")
     dadosVaga.descricao = prompt("Faça um breve resumo sobre a vaga em questão:")
     dadosVaga.dataLimite = prompt("Qual será a data limite para inscrição de candidatos?")
     dadosVaga.candidatos = 0

     let confirmacao = confirm("Por favor, confirme os dados anteriormente inseridos:" +
                              "\nNome da Vaga: " + dadosVaga.nome +
                              "\nDescrição da Vaga: " + dadosVaga.descricao +
                              "\nData Limite: " + dadosVaga.dataLimite +
                              "\n\nOs dados mostrados conferem?")
     if(confirmacao === true){
          listaVagas.push(dadosVaga)
     }
}

function visualizarVaga(listaVagas, listaCandidatos){
     alert("Bem vindo à área de Visualização de Vagas!")
     const vaga = prompt("Digite o número da vaga que deseja visualizar detalhadamente:")
     if(listaVagas[(vaga-1)] === undefined){
          alert("Número de vaga inexistente... Voltando ao menu.")
     }else{
          let cadastrados = ""
          for(let i = 0; i < listaCandidatos.length; i++){
               if(listaCandidatos[i].vaga == vaga){
                    cadastrados += "- " + listaCandidatos[i].nome + "\n"
               }
          }
          alert("Vaga número " + vaga +
               "\nNome: " + listaVagas[(vaga-1)].nome +
               "\nDescrição: " + listaVagas[(vaga-1)].descricao +
               "\nData Limite: " + listaVagas[(vaga-1)].dataLimite +
               "\nQuantidade de Candidatos: " + listaVagas[(vaga-1)].candidatos +
               "\nCandidatos Cadastrados:" +
               "\n" + cadastrados)
     }
}

function cadastrarCandidato(listaCandidatos, listaVagas){
     alert("Bem vindo à área de Inscrição!")
     const dadosUsuario = {}
     dadosUsuario.nome = prompt("Digite o seu nome:")
     dadosUsuario.vaga = prompt("Digíte o núnero da vaga para a qual deseja se cadastrar:")

     if(listaVagas[(dadosUsuario.vaga - 1)] === undefined){
          alert("Número de vaga inexistente... Voltando ao menu.")
     }else{
          const confirmacao = confirm("Por favor, confirme os dados anteriormente inseridos:" +
                                      "\nNome do Candidato: " + dadosUsuario.nome +
                                      "\nNúmero da Vaga desejada: " + dadosUsuario.vaga +
                                      "\n\nOs dados mostrados conferem?")
          if(confirmacao === true){
               listaCandidatos.push(dadosUsuario)
               listaVagas[(dadosUsuario.vaga - 1)].candidatos += 1
          }
     }
}

function excluirVaga(listaVagas){
     alert("Bem vindo à área de Exclusão de Vagas!")
     if(listaVagas.length === 0){
          alert("Não há vagas para serem excluídas... Voltando ao menu.")
     }else{
          const vaga = prompt("Digite o número da vaga que deseja excluir:")
          if(listaVagas[(vaga-1)] === undefined){
               alert("Número de vaga inexistente... Voltando ao menu.")
          }else{
               const confirmacao = confirm("Vaga número " + vaga +
                                           "\nNome: " + listaVagas[(vaga-1)].nome +
                                           "\nDescrição: " + listaVagas[(vaga-1)].descricao +
                                           "\nData Limite: " + listaVagas[(vaga-1)].dataLimite +
                                           "\nQuantidade de Candidatos: " + listaVagas[(vaga-1)].candidatos +
                                           "\n\nOs dados mostrados conferem com a vaga que deseja excluir?")
               if(confirmacao === true){
                    alert("Exclusão realizada com sucesso!")
                    listaVagas.splice((vaga - 1), 1)
               }
          }
     }
}


let vagas = [] //{nome:, descrição:, dataLimite:, candidatos:}
let candidatos = [] //{nome:, índiceVaga:}

let option = 0

do{
     option = prompt("Bem vindo(a) ao nosso sistema de vagas de emprego!\n\n" +
                     "Que ação deseja realizar?" + 
                     "\n1. Listar vagas disponíveis" +
                     "\n2. Criar uma nova vaga" +
                     "\n3. Visualizar uma vaga" +
                     "\n4. Inscrever-se em uma vaga" +
                     "\n5. Excluir uma vaga" +
                     "\n6. Sair")
     switch(option){
          case '1':
               mostrarVagas(vagas)
               break
          case '2':
               dadosVaga = criarVaga(vagas)
               break
          case '3':
               visualizarVaga(vagas, candidatos)
               break
          case '4':
               cadastrarCandidato(candidatos, vagas)
               break
          case '5':
               excluirVaga(vagas)
               break
          case '6':
               alert("Saindo...")
               break
          default:
               alert("Opção Inválida...\nVoltando ao menu!")
     }
}while(option !== '6') 

alert("Processo finalizado com sucesso!")