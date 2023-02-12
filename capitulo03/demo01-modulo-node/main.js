const Matematica = require('./matematica')
const readLine = require('readline')

const terminal = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('Insira o primeiro valo\n', valor1 => {
    terminal.question('Insira o segundo valor\n', valor2 => {
        terminal.question('Insira a operacao\n', tipoOperacao => {
            const resultado = Matematica[tipoOperacao](Number(valor1), Number(valor2))
            console.log(`A operacao ${tipoOperacao} de ${valor1} e ${valor2} eh ${resultado}`)
            terminal.close()
        })
        
    })
})