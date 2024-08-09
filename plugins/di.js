/*
🍧 Codigo Realizado Por : 
• OfcDiego (https://github.com/OfcDiego)
*/

let handler = async(m, { conn, text, usedPrefix, command }) => {

let user = conn.getName(who)

//const img = './media/amorverdadero.js'

let amor = `*${user} Busca Una Pareja Que Lo/a Mantenga 💞*`

conn.reply(m.chat, amor, m, fake, )

}
handler.help = ['amorverdadero']
handler.tags = ['fun']
handler.command = ['buscarnovia', 'buscarnovio', 'buscarnv', 'encontraramor', 'econtrarelamor', 'amorverdadero']
handler.register = true
export default handler