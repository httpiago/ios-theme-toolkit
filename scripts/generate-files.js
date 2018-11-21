/**
 * Arquivo usado para automatizar a criação de outros arquivos com códigos semelhantes.
 * 
 * Dependências:
 * yarn add template-file inquirer colors fs-extra dedent --dev
 */
const { renderString: renderTemplate } = require('template-file')
const indent = require('dedent')
const colors = require('colors')
const fs = require('fs-extra')

module.exports = async (ANSWERS, FILES) => {

  // Transformar o array de template em um array de promises
  const promises = FILES.map(file => {
    const FILE_NAME = renderTemplate(file.path, ANSWERS)
    const FILE_CONTENT = renderTemplate(indent(file.template).trimStart(), ANSWERS) // Também respeitar a indentação e remover espaço do começo

    return new Promise((resolve, reject) => {
      // Criar cada arquivo dentro de suas pastas caso elas não existam
      fs.outputFile(FILE_NAME, FILE_CONTENT).then(resolve).catch(reject)
    })
  })

  // Verificar se todos os arquivos foram criados
  await Promise.all(promises)
    .then(() => {
      console.log('✅  Novos arquivos criados com sucesso!'.green)
    })
    .catch(err => {
      console.error('❌  Erro ao criar os arquivos'.red, err)
    })
}