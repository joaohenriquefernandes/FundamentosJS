const fs = require('fs')
fs.readFile('./arq1.txt', (error1, result1) => {
    if (error1){
        console.log('Erro', error1.stack)
        return
    }
    fs.readFile('./arq2.txt', (error2, result2) => {
        if (error2) {
            console.log('Error', error2.stack)
            return
        }
        fs.readFile('./arq3.txt', (error3, result3) => {
            if (error3) {
                console.log('Error', error3.stack)
                return
            }
            const conteudo = `${result1}\n${result2}\n${result3}`
            fs.writeFile('./final.txt', conteudo, (errorWrite, resonseWrite) => {
                if (errorWrite){
                    console.log('Erro gravacao', errorWrite)
                    return
                }
                console.log('sucess')
            })
        })
    })
})



