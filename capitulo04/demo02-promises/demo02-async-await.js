const readLine = require('readline')
const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

function questionsAsync(texto) {
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, msg => {
            !!msg ? resolve(msg) : reject(new Error('campo vazio'))
        })
    })
}

async function main() {
    try {
        const nome = await questionsAsync('Qual eh o seu nome?')
        const telefone = await questionsAsync('Qual eh o seu telefone?')
        console.log(`Nome: ${nome}, Telefone:${telefone}`)
    } catch (error) {
        console.log('Deu ruim', error.stack)
    }
    finally {
        terminal.close()
    }
}
main()