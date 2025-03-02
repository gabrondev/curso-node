// import cozinha from "./cozinha/index.js"
// console.log(cozinha)

// import receita from "./receita.js"
// const r = receita(["arroz,feijao"], cozinha.assar, cozinha.cortar)
// console.log(r)

import refeicao from "./refeicao.js"
// console.log(refeicao)
const vouComerNoAlmoco = refeicao("Almoço")
const vouComerNoJantar = refeicao("Jantar")

vouComerNoAlmoco("arroz", "feijão", "batata")
vouComerNoJantar("arroz", "feijão", "alface")