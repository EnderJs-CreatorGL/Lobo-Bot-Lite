import { webp2mp4 } from '../lib/webp2mp4.js'
import { ffmpeg } from '../lib/converter.js'

var handler = async (m, { conn, usedPrefix, command }) => {

if (!m.quoted) throw `[❗]𝗥𝗲𝘀𝗽𝗼𝗻𝗱𝗲 𝘂𝘀𝗮𝗻𝗱𝗼 ${usedPrefix + command} 𝗽𝗮𝗿𝗮 𝗰𝗼𝗻𝘃𝗲𝗿𝘁𝗶𝗿 𝗮 𝘃𝗶𝗱𝗲𝗼`
let mime = m.quoted.mimetype || ''
if (!/webp|audio/.test(mime)) throw `[❗]𝗥𝗲𝘀𝗽𝗼𝗻𝗱𝗲 𝘂𝘀𝗮𝗻𝗱𝗼 ${usedPrefix + command} 𝗣𝗮𝗿𝗮 𝗰𝗼𝗻𝘃𝗲𝗿𝘁𝗶𝗿 𝗮 𝘃𝗶𝗱𝗲𝗼`
let media = await m.quoted.download()
let out = Buffer.alloc(0)
if (/webp/.test(mime)) {
out = await webp2mp4(media)
} else if (/audio/.test(mime)) {
out = await ffmpeg(media, [
'-filter_complex', 'color',
'-pix_fmt', 'yuv420p',
'-crf', '51',
'-c:a', 'copy',
'-shortest'
], 'mp3', 'mp4')

}
await conn.sendFile(m.chat, out, 'error.mp4', '𝗘𝘅𝗶𝘁𝗼 𝘃𝗶𝗱𝗲𝗼 𝗱𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝗱𝗼🎥', m, 0, { thumbnail: out })

}
handler.help = ['tovideo']
handler.tags = ['transformador']
handler.command = ['tovideo']

handler.limit = true

export default handler
