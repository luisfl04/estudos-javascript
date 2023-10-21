//verificando tipo de variavel:

function verifVar(index) {
    if (typeof index == "boolean") {
        console.log("tipo = variável booleana")
    } else if (typeof index == "string") {
        console.log("tipo = é uma string")
    } else if (typeof index == "number") {
        console.log("tipo = é um numero")
    } else {
        console.log("indefinido")
    }
}
//verificacão:
verifVar()

//criando um objeto e adicionando valores a ele:

const carroPadrao = {

    EspecGerais: {
        motor: "1.0",
        Arosdospneus: "20",
        TipodeFreio: "ABS",
        TipodeSom: "peoneer",
        direção: "hidráulica"    
    }
}

//adicionando careacterísticas ao carro1:
const carro1 = {
    ...carroPadrao,
    placa:"Odv0d97",
    estilo:{
        cor:"amarelo",
        MarcadoAro:"BBS",
        Interior: "Todo de couro em cor marrom",
        tamPortamalas:"100L"
    }

}




