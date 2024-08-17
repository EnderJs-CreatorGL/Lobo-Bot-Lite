var handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `*Escriba su reporte*`, m, fake, )
if (text.length < 10) return conn.reply(m.chat, `*Mínimo 10 caracteres para hacer el reporte*`, m, )
if (text.length > 1000) return conn.reply(m.chat, `*Máximo 1000 caracteres para hacer el reporte.*`, m, )

const ayuda = `• User: Wa.me/${m.sender.split`@`[0]}\n• *Mensaje:* ${text}`
    await conn.reply(global.owner[0][0] + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : ayuda, m, { mentions: conn.parseMention(ayuda) })

  // await conn.reply('120363302952896907@g.us', ayuda, m)

}
handler.help = ['reporte', 'request']
handler.tags = ['owner']
handler.command = ['ayuda', 'reporte', 'report']

handler.register = true

export default handler