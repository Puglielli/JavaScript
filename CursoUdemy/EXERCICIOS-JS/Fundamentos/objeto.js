// JSON - JavaScript Object Notation [Formato Textual]

const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espações

console.log(prod1)

const prod2 = {
    nome: 'Patricia',
    sobrenome: 'Samia',
    Idade: 25,
    Sexo:'Feminino'
}


'{ "nome": "Patricia", "sobrenome": "Samia", "idade": 25, "sexo":"Feminino" }' // JSON

console.log(prod2)
