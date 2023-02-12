let salarioDoAmigo = 1000
let meuSalario = '2000.14'
let meuSalarioCorrigido = Number(meuSalario)

console.log(salarioDoAmigo + meuSalarioCorrigido)

console.log(
    typeof(salarioDoAmigo), salarioDoAmigo
)
console.log(
    typeof(meuSalario), meuSalario
)

console.log(
    isNaN(meuSalario)
)

let minhaString = 'Ola mundo'
let minhaOutraString = 'Ola mundo2'
let minhaStringComVariaveis = `
    ${minhaString} - ${minhaOutraString}. AE!
`

console.log(minhaStringComVariaveis)