const {soma, subtracao, texto} = require("./calculosBasicos")
const complementares = require("./calculosComplementares")
const {potencia, resto} = complementares
// const textoConflitante = complementares.texto
// const textoConflitante = require("./calculosComplementares").texto
const {textoDivisao} = require("./calculosDivisao")

let x, y
x = 20
y = 2

console.log(soma(x, y))
console.log(subtracao(x, y))
console.log(texto)
console.log(potencia(x, y))
console.log(resto(x, y))
console.log(textoConflitante)
console.log(textoDivisao(x, y))