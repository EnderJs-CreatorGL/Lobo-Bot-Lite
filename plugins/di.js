/*
🍧 Codigo Realizado Por : 
• OfcDiego (https://github.com/OfcDiego)
*/

let handler = async(m, { conn, text, command, usedPrefix }) => {

//envia para que escriba el nombre de las 2 personas, no pongas esto: .amorverdadero Alejandro y Maria pon solo: .amorverdadero Alejandro Maria
if (!text) return conn.reply(m.chat, `⚜️ Te faltó el nombre de 2 personas...\n🚩 Ejemplo: ${usedPrefix + command} Alejandro Maria`, m, fake, )
let [text1, ...text2] = text.split(' ')

//son 2 nombres..
text2 = (text2 || []).join(' ')
if (!text2) return conn.reply(m.chat, `⚜️ Son 2 nombres por favor...\n🚩 Ejemplo: ${usedPrefix + command} Alejandro Maria`, m, fake, )

//text de donde viene.
let amor = `*${text1} Busca A: ${text2} Para Que L@ Mantenga* 🥺`

//Enviar el mensaje!
conn.reply(m.chat, amor, m, fake, )

//sirve por si algo ponen "@", para que se pueda ver la mention!, esta funcion está desactivada con "//", por si algo ponle "//" al de arriba y el de abajo le quitas lo "//"
//m.reply(amor, null, { mentions: conn.parseMention(amor) })

}
handler.help = ['amorverdadero']
handler.tags = ['fun']
handler.command = ['buscarnovia', 'buscarnovio', 'buscarnv', 'encontraramor', 'econtrarelamor', 'amorverdadero']
handler.register = true
export default handler