//Comando por: diegojadibot

let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
            //const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

const pp = './storage/logos/Menu2.jpg'

let pajero = `${name} *es un ${[`10%`, `20%`, `30%`, `40%`, `50%`, `60%`, `70%`, `80%`, `90%`, `100%`].getRandom()} de pajero*\n\n> Text: ${[`Jajja Pornub💋`, `Muy Pajero 💋`, `Pajerooo 💋`, `Parese Gay Pajeandote 💋`, `Un pornub jaj 💋`, `Se pajea 💋`].getRandom()}                                        `

conn.sendMessage(m.chat, {text: pajero, mentions: [m.sender]}, {quoted: m})

//conn.reply(m.chat, `*❌️ Error, Intente Mas Tarde*`, m, fake, )

}
handler.help = ['di']
handler.tags = ['decir']
handler.command = /^(pornub|porn|pajero)$/i
export default handler