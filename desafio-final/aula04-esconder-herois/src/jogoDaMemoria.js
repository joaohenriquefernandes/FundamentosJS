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
        this.iconePadrao = './arquivos/padrao.png'
        this.heroisEscondidos = []
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
        //vamos esperar 1 segundo para atualizar a tela
        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000)
    }
    esconderHerois(herois){
        //vamos trocar a imagem de todos os herois existentes
        //pelo icone padrao
        //como fizemos no construtor, vamos extrair somente o necessario
        //usando a sintaxe ({chave:1}) estamos falando que vamos retornar
        //o que tiver dentro dos parenteses
        //quando nao usamos : (exemplo do id) o JS entende que o nome 
        //eh o mesmo do valor. Ex id: id, vira id
        const heroisOcultos = herois.map(({nome, id}) => ({
            id,
            nome, 
            img: this.iconePadrao
        }))
        //atualizamos a tela com os herois ocultos
        this.tela.atualizarImagens(heroisOcultos)
        //guardamos os herois para trabalhar com eles depois
        this.heroisOcultos = heroisOcultos
    }
    jogar(){
        this.embaralhar()
    }

}