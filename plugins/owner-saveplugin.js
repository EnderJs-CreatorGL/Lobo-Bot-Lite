import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, `𝗠𝗲𝗻𝗰𝗶𝗼𝗻𝗲 𝗲𝗹 𝗰𝗼𝗱𝗶𝗴𝗼 𝗮 𝗴𝘂𝗮𝗿𝗱𝗮𝗿☆`)
    if (!m.quoted.text) return conn.reply(m.chat, `𝗠𝗲𝗻𝗰𝗶𝗼𝗻𝗲 𝗲𝗹 𝗰𝗼𝗱𝗶𝗴𝗼 𝗮 𝗴𝘂𝗮𝗿𝗱𝗮𝗿☆`)
    let path = `plugins/${text}.js`
    await fs.writeFileSync(path, m.quoted.text)
    await conn.reply(m.chat, `Guardado en ${path}`)
}
handler.help = ['saveplugin'].map(v => v + ' <nombre>')
handler.tags = ['owner']
handler.command = ["salvar", "saveplugin"]

handler.rowner = true
export default handler
