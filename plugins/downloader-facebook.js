import Scraper from '@SumiFX/Scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('🌳 *Ingrese un enlace de facebook*\n\n`Ejemplo:`\n' + `> *${usedPrefix + command}* https://fb.watch/kAOXy3wf2L/?mibextid=Nif5oz`)

try {
let { title, SD, HD } = await Scraper.fbdl(args[0])
await conn.sendMessage(m.chat, { video: { url: HD || SD }, caption: `*🍭 Titulo ∙* ${title}` }, { quoted: m})
} catch {
}}
handler.help = ['facebook <url fb>']
handler.tags = ['downloader']
handler.command = ['fb', 'fbdl', 'facebookdl', 'facebook']
//handler.register = true 
//handler.limit = 1
export default handler