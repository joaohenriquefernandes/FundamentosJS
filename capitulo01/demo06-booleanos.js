const podeDirigir = true

if(podeDirigir) {
    console.log('Ela pode dirigir')
}

const saldoEmConta = 1

if(!saldoEmConta){
    console.log('nao tem saldo')
}

const boolComString = 'Aee hackerzao'
//forca o valor a true ou false
//de acordo com a tabela
console.log(!!boolComString)

//negacao
console.log('negacao', !boolComString)

//negacao + forcar a bool
console.log('negacao + forcar bool', !(!!boolComString))