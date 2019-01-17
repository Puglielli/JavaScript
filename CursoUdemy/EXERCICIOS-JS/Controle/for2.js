const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
notas.sort() //Ordenar ordem crescente
for(let i in notas) {
    console.log(`i = ${i}: ${notas[i]}`)
}

const pessoa = {
    nome: 'Patricia',
    Sobrenome: 'Samia',
    idade: 26,
    peso: 65
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
