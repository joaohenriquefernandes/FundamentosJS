const heroi = {
    nome: 'Flash',
    idade: 100,
    sexo: 'Masculino'
}

// console.log('nome', heroi.nome)
// console.log('idade', heroi['idade'])
// console.log('idade', heroi.sexo)
// console.log('nao existe', heroi.naoExiste)
// heroi.id = 0001
// console.log(heroi)

//saber chaves do objeto
// console.log(Object.keys(heroi))

// //saber os valores do objeto
// console.log(Object.values(heroi))

//juntar dois objetos
const pessoa = {
    tamanho: '10 metros'
}
const novoObjeto = Object.assign(heroi,pessoa)

//remover uma chave do objeto
delete novoObjeto.nome

console.log(novoObjeto)