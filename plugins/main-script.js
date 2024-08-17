import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {

let git = `🔰 Github: ${global.md}`

await conn.reply(m.chat, git, m)

await m.react('🐢')

}
handler.help = ['sc']
handler.tags = ['main']
handler.command = ['sc', 'script', 'github']
export default handler