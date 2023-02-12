let termoDeParada = true
let contador = 0
while(termoDeParada){
    termoDeParada = contador < 10
    if(contador % 2 === 0){
        console.log('NUmero par', contador)
    }
    contador += 1
}

//roda a primeira vez e testa a variavel depois
do{
    console.log('So uma vez')
}while(termoDeParada)

while(termoDeParada){
    //nao vai executar pois esta como false
    console.log('Nem vai executar')
}