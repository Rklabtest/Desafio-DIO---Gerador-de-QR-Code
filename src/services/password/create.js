import chalk from "chalk"
import handle from "./handle.js"

async function createPassword() {
  const password = await handle()
  console.log(chalk.green(`Seu password é: ${chalk.bold(password)}`))
}

export default createPassword
