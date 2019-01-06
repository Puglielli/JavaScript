const escola = "Cod3r"

console.log(escola.charAt(4)) // Pegar o caracter do indice informado
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Pegar o Codigo na tabela unicode/ASCII do indice informado

console.log(escola.indexOf('o')) // Pegar o Index do caracter informado

console.log(escola.substring(1)) // Pegando uma string começando por um index
console.log(escola.substring(0, 3)) // Pegando uma string delimitada por dois index Começo e Fim

console.log('Escola '.concat(escola.concat("!"))) // Concatenação de String Utilizando Função "Concat"
console.log('Escola ' + escola + "!") // Concatenação de String Utilizando '+'

console.log(escola.replace(3, 'e')) 
console.log(escola.replace(/\d/, 'e')) // Expressões Regulares (Regex) - Substituir todos os digitos
console.log(escola.replace(/\w/g, 'e')) // Expressões Regulares (Regex) - Substituir todos os caracteres

console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/)) // Expressões Regulares (Regex) - Substituir todas as ','
console.log('Ana,Maria.Pedro'.split(/./)) // Expressões Regulares (Regex) - Pesquisar *******
