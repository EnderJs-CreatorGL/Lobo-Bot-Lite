var handler = async (m, { conn }) => {

if (!text) throw `Prueba de tag`

conn.reply(m.chat, `prueba`)
}

handler.command = /^(Follar)/i

export default handler

