window.onload = () => {
    const btn = document.getElementById('btnCalcular')
    btn.onclick = click
    function obterValorInput(id){
        const item = document.getElementById(id)
        return item.value
    }
    function click() {
        const tipoOperacao = obterValorInput('tipoOperacao')
        const valor1 = obterValorInput('valor1')
        const valor2 = obterValorInput('valor2')
        const resultado = Matematica[tipoOperacao](valor1, valor2)
        document.getElementById('resultado').innerText = `A operacao ${tipoOperacao} de ${valor1} e ${valor2} eh ${resultado}`
    }
}