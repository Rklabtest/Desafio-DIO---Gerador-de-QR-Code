import permittedCharacters from "./utils/permitted-characters.js"
import chalk from "chalk"

async function handle() {
  let characters = await permittedCharacters()
  let password = ""

  const passwordLength = process.env.PASSWORD_LENGTH

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length)
    password += characters[index]
  }
  console.log(chalk.green("Password gerado com sucesso!"))
  return password
}

export default handle
