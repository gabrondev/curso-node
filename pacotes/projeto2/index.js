import pensador from "pensador-scrap"
import fs from "fs"


const autor = "Senenecacaca"
const { error, success } = await pensador.search({
    query: autor,
    limit: 12
})

let pensamentoPraSalvar

try{
    const pensamentos = success.thought;
    const indiceAleatorio = Math.floor(Math.random() * pensamentos.length);
    const pensamentoSelecionado = pensamentos[indiceAleatorio].content;
    // console.log(pensamentoSelecionado)
    
    pensamentoPraSalvar = `Pensamento de ${autor} -> ${pensamentoSelecionado}\n`;
    // console.log(pensamentoPraSalvar)
} catch(e) {
    pensamentoPraSalvar = `${autor} não tem pensamentos.\n`
} finally {
    fs.appendFileSync("frases.txt", pensamentoPraSalvar, "UTF-8")
    const texto = fs.readFileSync("frases.txt", "UTF-8")
    console.log(texto)
}