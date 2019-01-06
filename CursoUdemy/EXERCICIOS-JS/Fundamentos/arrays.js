const array1 = [] // Criando um 'ARRAY' sem nada
const valores = [7.7, 8.9, 2.4, 5.5] // Criando um 'ARRAY' inicializado com valores
console.log(valores[0], valores[3])
console.log(valores[4]) // Informa undefined

valores[4] = 10
console.log(valores)
console.log(valores.length) // Metodo 'LENGTH' para mostrar o tamanho do array
valores.push({id: 3}, false, null, 'teste') // Metodo 'PUSH' para inserir varios valores ao array
console.log(valores)

console.log((valores.pop())) // Metodo 'POP' para remover o ultimo valor
delete valores[0] // Função 'DELETE' para deletar um elemento do vetor, mas passando o indice
console.log(valores)

console.log(typeof valores)

// JSON - JavaScript Object Notation [Formato Textual]