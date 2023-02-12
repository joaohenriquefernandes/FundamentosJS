const readLine = require('readline')
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

// terminal.question('Qual eh seu nome?\n', nome => {
//     terminal.question('Qual eh seu telefone?\n', telefone => {
//         console.log(`
//             Nome: ${nome}
//             Telefone: ${telefone}
//         `)
//         terminal.close()
//     })
// })

function questionsAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve)
    })
}

let nome = ''
let telefone = ''
Promise.resolve()
    .then(() => questionsAsync('Qual eh seu nome?'))
    .then(respostaNome => {
        if (!respostaNome) throw new Error ('campo vazio')
        nome = respostaNome
    })
    .then(() => questionsAsync('Qual eh o seu telefone?'))
    .then(respostaTelefone => {
        if (!respostaTelefone) throw new Error ('campo vazio')
        telefone = respostaTelefone
    })
    .then(() => {
        console.log(`Nome: ${nome}, Telefone: ${telefone}`)
    })
    .catch(error => {
        console.log(error)
    })
    .finally(() => terminal.close())