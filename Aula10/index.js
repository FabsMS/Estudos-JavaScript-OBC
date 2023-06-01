let nome = "Fabrício"

console.log(nome) //mensagem simples no console do navegador
console.error(nome) //mensagem de erro no console do navegador
console.warn(nome) //mensagem de atenção no console do navegador


// nome = window.prompt("Digite o seu nome:") //permite que o usuário insira algo
// window.alert("Bem vindo " + nome) //exibe uma mensagem em uma janela à parte no navegador
let confirmacao = window.confirm("Confirma essa ação?") //exibe uma caixa de seleção, que pode ser salva em uma variável booleada posteriormente

console.log(confirmacao)