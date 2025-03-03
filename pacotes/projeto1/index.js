import chalk from "chalk";
import server from "server";

const { get } = server.router;

server({ port:8080 }, [
    get("/", (ctx) => "Hello world"),
])

// const azul = texto => console.log(chalk.blue(texto))
// const aviso = texto => console.log(chalk.bgYellow.bold(texto))
// const erro = texto => console.log(chalk.bgRed.bold.italic(texto))

// azul("Sou um texto")
// aviso("Preciso te avisar de uma coisa...")
// erro("Abortar missão")