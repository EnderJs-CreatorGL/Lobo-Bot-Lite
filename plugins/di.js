/*
🍧 Codigo Realizado Por : 
• OfcDiego (https://github.com/OfcDiego)
*/

let handler = async(m, { conn, text }) => {

let user = conn.getName(who)

if (!text) return conn.reply(m.chat, '⚜️ Te faltó el nombre...', m, fake, )
let [text1, ...text2] = text.split(' ')

text2 = (text2 || []).join(' ')
if (!text2) return conn.reply(m.chat, `⚜️ Son 2 nombres por favor...`, m, fake, )

let amor = `*${text1} Busca A: ${text2} Para Que L@ Mantenga 💞*`

conn.reply(m.chat, amor, m, fake, )

}
handler.help = ['amorverdadero']
handler.tags = ['fun']
handler.command = ['buscarnovia', 'buscarnovio', 'buscarnv', 'encontraramor', 'econtrarelamor', 'amorverdadero']
handler.register = true
export default handler