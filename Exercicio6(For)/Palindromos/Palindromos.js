const word = prompt("Digite a palavra que deseja descobrir se é um palíndromo:")

let palindrome = ""

for(let i = word.length-1; i >= 0; i--){
     palindrome += word[i]
}

if(word === palindrome){
     alert("A palavra " + word + " é sim um palíndromo!")
}else(
     alert("Infelizemnte, a palavra " + word + " não é um palíndromo...\n" +
           "Palavra escrita normalmente: " + word +
           "\nPalavra escrita ao contrário: " + palindrome)
)