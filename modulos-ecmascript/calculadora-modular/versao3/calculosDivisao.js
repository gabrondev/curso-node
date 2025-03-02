import { resto } from "./calculosComplementares.js"

function divisao(a, b) {
    return a / b
}

export default function divisaoPorExtenso(a, b) {
    return `A divisão de ${a} por ${b} é ${divisao(a, b)} e o resto é ${resto(a, b)}`
}