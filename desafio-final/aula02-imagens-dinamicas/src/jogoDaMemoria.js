class JogoDaMemoria{
    //se mandar um obj ={tela:1, idade:2, etc:3}
    //vai ignorar o resto das propriedades e pegar somente a propriedade tela
    constructor({tela}){
        this.tela = tela
        this.heroisIniciais = [
            //caminho do arquivo sempre referente ao index.html
            {img: './arquivos/batman.png', name: 'batman'},
            {img: './arquivos/ciclope.png', name: 'ciclope'},
            {img: './arquivos/hellboy.png', name: 'hellboy'},
            {img: './arquivos/flash.png', name: 'flash'}
        ]
    }
    //para usar o this nao podemos usar static
    inicializar(){
        //vai pegar todas as funcoes da classe tela
        //coloca todos os herois na tela
        this.tela.atualizarImagens(this.heroisIniciais)
    }
}