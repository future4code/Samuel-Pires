let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    despesas.forEach((despesa) => {
        divDespesas.innerHTML+=`<p>Valor: R$${despesa.valor} | Tipo: ${despesa.tipo} | Descrição: ${despesa.descricao}</p>`
    });
}


// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // irei receber um array com os objetos que são dos tipos respectivos
    let gastoAlim  = arrDespesas.filter((despesa) => {
        if(despesa.tipo==="alimentação")return true
    })
    let gastoUtil = arrDespesas.filter((despesa) => {
        if(despesa.tipo==="utilidades")return true
    })
    let gastoViag = arrDespesas.filter((despesa) => {
        if(despesa.tipo==="viagem")return true
    })
    
    //para cada elemento.valor dos objetos, irei somar e salvar em outra variável
    gastoAlim.forEach((gasto) => {
            gastoAlimentacao+=gasto.valor;
    })
    
    gastoUtil.forEach((gasto) => {
            gastoUtilidades+=gasto.valor;
    })
    
    gastoViag.forEach((gasto) => {
            gastoViagem+=gasto.valor;
    })
    
    console.log(gastoAlim, gastoUtil, gastoViag)

    gastoTotal = gastoAlimentacao + gastoUtilidades + gastoViagem

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro')
    let valorMin = document.getElementById('valorFiltroMin')
    let valorMax = document.getElementById('valorFiltroMax')


    if(!(validarTipo(tipoFiltro) && parseInt(valorMin.value)>=0 && validarValor(valorMax) && parseInt(valorMax.value)>parseInt(valorMin.value))){
        alert("Preencha todos os dados corretamente")
        return
    }

    let despesasFiltradas
    if(tipoFiltro !== "todos"){
        despesasFiltradas = arrDespesas.filter((despesa) => {
            if(despesa.tipo===tipoFiltro.value && despesa.valor>=valorMin.value && despesa.valor<=valorMax.value)return true
            return false
        })
    }
    else {
        despesasFiltradas = arrDespesas.filter((despesa) =>{
            if(despesa.valor>=valorMin && despesa.valor<=valorMax) return true
            return false
        })
    }
    imprimirDespesas(despesasFiltradas)
}

function ordenarDespesas(){
    arrDespesas.sort((a,b)=>{
        return b.valor - a.valor
    })
    imprimirDespesas(arrDespesas)
}



// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}