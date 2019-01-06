// Par Nome/Valor

const saudacao = 'Opa' // Contexto Léxico 1

function exec() {
    const saudacao = 'Falaaa' // ontexto Léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Patricia',
    idade: 27,
    peso: 69,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)