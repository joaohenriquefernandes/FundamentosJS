function minhaFuncao1(){
    return 'aeeee'
}

const minhaFuncao2 = function(parametro){
    return `aeeee ${parametro}`
}

const minhaFuncao3 = (parametro) => {
    return `aeeee ${parametro}`
}

const minhaFuncao4 = parametro => `aeee ${parametro}`

const obj1 = {
    minhaFuncao: parametro => `aeee ${parametro}`
}

obj1.minhaFuncao('teste')

const obj2 ={
    minhaFuncao (parametro) {
        return `aee ${parametro}`
    }
}

obj2.minhaFuncao('teste2')