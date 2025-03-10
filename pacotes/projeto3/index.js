import {salvar, deletar, pegaDados, persistirValores} from "./banco.js"
import {finaliza, menu, le, textoAzul, textoVerde, menuSelecaoUsuario} from "./interface.js"

const itensMenu = [" Adicionar ", " Editar ", " Deletar ", " Ver Todos ", " Persistir ", " Sair "]

let nome, id

while(1) {
    const selecionado = await menu(itensMenu)
    switch(selecionado.trim().toLowerCase()){ // adicionar, editar
        case "adicionar":
            nome = await le("Digite o nome do usuário: ")
            salvar(nome)
            textoVerde("Feito!")
            break
        case "editar":
            id = await menuSelecaoUsuario(pegaDados())
            nome = await le("Digite o nome do usuário: ")
            salvar(nome, id)
            textoVerde("Feito!")

            break
        case "deletar":
            id = await menuSelecaoUsuario(pegaDados())
            deletar(id)
            textoVerde("Feito!")
            break
        case "ver todos":
            const dados = pegaDados()
            textoAzul(dados)
            break
        case "persistir":
            persistirValores()
            textoVerde("Feito")
            break
        case "sair":
            finaliza()
            textoVerde("Até mais!")
        default:
            console.log(`${selecionado.trim().toLowerCase()} não é válido`)
    }
}
finaliza()