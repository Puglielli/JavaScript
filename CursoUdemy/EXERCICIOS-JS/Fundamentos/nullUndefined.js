let valor // Não inicializada
console.log(valor)
//console.log(valor2) // Error - Is Not Defined

valor = null // Ausência de valor
console.log(valor)
//console.log(valor.toString()) // Error - Not Read Null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // Tirar o atributo |preco|
console.log(produto)

produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)