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
        //forcar a tela a usar o THIS de Jogo da memoria
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
    }
    embaralhar(){
        const copias = this.heroisIniciais
        //duplicar os itens e criar um id aleatorio
        .concat(this.heroisIniciais)
        .map(item => {
            return Object.assign({}, item, {id: Math.random()/0.5})
        })
        //ordernar
        .sort(() => Math.random() - 0.5)

        this.tela.atualizarImagens(copias)
    }
    jogar(){
        this.embaralhar()
    }

}