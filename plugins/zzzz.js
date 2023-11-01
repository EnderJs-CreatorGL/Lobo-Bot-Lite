var handler = async (m, { conn }) => {

conn.reply(m.chat, `prueba`)
}

handler.command = /^(Follar)/i

export default handler

