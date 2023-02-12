// for(let index = 0; index <= 10; index++){
//     index % 2 === 0 ? console.log(index,' par') : console.log(index, ' impar')
// }

const minhaListaTarefas = [
    {
        id: parseInt(Math.random() * 10),
        nome: 'Zezinho',
        superPoder: 'Veloz'
    },
    {
        id: parseInt(Math.random() * 10),
        nome: 'Mariazinha',
        superPoder: 'Super Forca'
    },

]

for (let index = 0; index < minhaListaTarefas.length; index++){
    const item = minhaListaTarefas[index]
    console.log(`
        id: ${item.id}
        nome: ${item.nome}
        super Poder: ${item.superPoder}
    `)
}

//Nao precisa do contador
for(const index in minhaListaTarefas){
    const item = minhaListaTarefas[index]
    console.log('Nome: ', item.nome)
}

//Nao precisa do indice
for(const index of minhaListaTarefas){
    console.log('Super poder: ', index.superPoder)
}