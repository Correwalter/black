let handler = async (m, { conn }) => {
m.reply(`
  *_BlackBot_*
*Bot activo* ✅
*Bot uso público* ✅
  pon #menu para ver la lista de comandos 
`)
}
handler.command = /^(estado)$/i
module.exports = handler
