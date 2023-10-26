import { webp2png } from '../lib/webp2mp4.js'

var handler = async (m, { conn, usedPrefix, command }) => {

const notStickerMessage = `[❗] 𝗥𝗲𝘀𝗽𝗼𝗻𝗱𝗲 𝗮𝗹 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 𝘂𝘀𝗮𝗻𝗱𝗼 ${usedPrefix + command} 𝗽𝗮𝗿𝗮 𝗰𝗼𝗻𝘃𝗲𝗿𝘁𝗶𝗿 𝗮 𝗶𝗺𝗮𝗴𝗲𝗻`
if (!m.quoted) throw notStickerMessage 
const q = m.quoted || m
let mime = q.mediaType || ''
if (!/sticker/.test(mime)) throw notStickerMessage
let media = await q.download()
let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'error.png', null, m)

}
handler.help = ['toimg']
handler.tags = ['transformador']
handler.command = ['toimg', 'jpg', 'jpge', 'png']

handler.limit = true

export default handler
