const minhaLista = []
const minhaListaTarefas = [
    'mandar curriculo',
    'limpar o quarto',
    'fazer janta'
]

// console.log(minhaListaTarefas[0])
// console.log(minhaListaTarefas[1])
// console.log(minhaListaTarefas[4])

//quantidade de itens no array
// console.log(minhaListaTarefas.length)

//adicionar item no final da lista
// minhaListaTarefas.push('formatar pc')
// console.log(minhaListaTarefas)

//remover o ultimo da lista
// minhaListaTarefas.pop()
// console.log(minhaListaTarefas)

//remover o primeiro da lista
// minhaListaTarefas.shift()
// console.log(minhaListaTarefas)

//remover um item especifica a partir de um indice
// console.log(minhaListaTarefas[2])
// //sobrecarga 1-qual item de inicio
// //2-quantos remover
// minhaListaTarefas.splice(2,1)
// console.log(minhaListaTarefas)

const itens = [1, 'computador', 0.22]

//verificar o tipo do array
// console.log(typeof(itens))

//verifica se eh array da forma correta
// console.log(Array.isArray(itens))

//ordernar
// const numeros = [3,2,1]
// console.log(numeros.sort())

//juntar dois arrays
// const novo = itens.concat([1,2,3])
// console.log(novo)

//juntar arrays em uma string
// console.log(itens.join(' , '))

//verificar o indice do item
const index = itens.indexOf('computador')
console.log(itens[index])