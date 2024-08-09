/*
🍧 Codigo Realizado Por : 
• OfcDiego (https://github.com/OfcDiego)
*/

let handler = async(m, { conn, text, command, usedPrefix }) => {

//Envia para que escriba el nombre de las 2 personas, no pongas esto: .amorverdadero Alejandro y Maria pon solo: .amorverdadero Alejandro Maria
if (!text) return conn.reply(m.chat, `⚜️ Te faltó el nombre de 2 personas...\n🚩 Ejemplo: ${usedPrefix + command} Alejandro Maria`, m, fake, )
let [text1, ...text2] = text.split(' ')

//Son 2 nombres..
text2 = (text2 || []).join(' ')
if (!text2) return conn.reply(m.chat, `⚜️ Son 2 nombres por favor...\n🚩 Ejemplo: ${usedPrefix + command} Alejandro Maria`, m, fake, )

//Text de donde envia el mensaje.
let amor = `*${text1} Busca A: ${text2} Para Que L@ Mantenga* 🥺`

//Envia el mensaje!
conn.reply(m.chat, amor, m, fake, )

}
handler.help = ['amorverdadero']
handler.tags = ['fun']
handler.command = ['buscarnovia', 'buscarnovio', 'buscarnv', 'encontraramor', 'econtrarelamor', 'amorverdadero']
handler.register = true
export default handler
