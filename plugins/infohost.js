let handler = async (m, { conn }) => {
m.reply(`
*Bot activo* ✅
*Bot uso público* ✅
`)
}
handler.command = /^(estado)$/i
module.exports = handler
