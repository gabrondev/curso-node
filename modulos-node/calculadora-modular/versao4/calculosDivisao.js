const {resto} = require("./calculosComplementares")

function divisao(a, b) {
    return a / b
}

exports.textoDivisao = function(a, b){
    return `A divisão de ${a} por ${b} é ${divisao(a, b)} e o resto é ${resto(a, b)}`
}

