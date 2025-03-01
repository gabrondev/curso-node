// const acoes = require("./cozinha/acoesCozinhar")
// const {alimentos} = require("./cozinha/alimentos")
// console.log(acoes.cozinhar(alimentos[0]))

// const cozinha = require("./cozinha")
// const receita = require("./receita")
// console.log(cozinha.ferver(cozinha.alimentos[2]))

// console.log(receita(["carne", "alface"], cozinha.cortar, cozinha.assar))

const refeicao = require("./refeicao")("Almoço")
refeicao("arroz", "feijão", "batata")

const refeicao2 = require("./refeicao")("Jantar")
refeicao2("arroz", "feijão", "alface")