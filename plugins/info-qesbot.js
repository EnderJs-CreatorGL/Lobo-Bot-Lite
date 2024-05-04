/*import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'*/
let handler = async (m, { conn, usedPrefix, command}) => {
  

let bot = `¿𝗤𝗨𝗘 𝗘𝗦 𝗨𝗡 𝗕𝗢𝗧 𝗗𝗘 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣?

𝗨𝗻 𝗯𝗼𝘁 𝗱𝗲 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗲𝘀 𝘂𝗻𝗮 𝗶𝗻𝘁𝗲𝗹𝗶𝗴𝗲𝗻𝗰𝗶𝗮 𝗮𝗿𝘁𝗶𝗳𝗶𝗰𝗶𝗮𝗹 𝗾𝘂𝗲 𝗳𝘂𝗻𝗰𝗶𝗼𝗻𝗮 𝗮 𝘁𝗿𝗮𝘃𝗲𝘀 𝗱𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼 𝗽𝗿𝗲𝗱𝗲𝘁𝗲𝗿𝗺𝗶𝗻𝗮𝗱𝗼𝘀 𝗽𝗼𝗿 𝗹𝗼𝘀 𝗱𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿𝗲𝘀 , 𝗲𝘀𝘁𝗼𝘀 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀 𝘀𝗶𝗿𝘃𝗲𝗻 𝗽𝗮𝗿𝗮 𝗶𝗻𝘁𝗲𝗿𝗮𝗰𝘁𝘂𝗮𝗿 𝗰𝗼𝗻 𝗲𝗹 𝗯𝗼𝘁 𝘆 𝘀𝘂𝘀 𝗳𝘂𝗻𝗰𝗶𝗼𝗻𝗮𝗹𝗶𝗱𝗮𝗱𝗲𝘀  𝗰𝗼𝗺𝗼 𝗮𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝗿 𝘂𝗻 𝗴𝗿𝘂𝗽𝗼 𝘆 𝘁𝗿𝗮𝗯𝗮𝗷𝗼𝘀 𝗼 𝘁𝗮𝗿𝗲𝗮𝘀 ,  𝗟𝗼𝘀 𝗯𝗼𝘁𝘀 𝘁𝗶𝗲𝗻𝗲𝗻 𝗹𝗮 𝗰𝗮𝗽𝗮𝘀𝗶𝗱𝗮𝗱 𝗱𝗲 𝗵𝗮𝗰𝗲𝗿 𝘃𝗮𝗿𝗶𝗮𝘀 𝗰𝗼𝘀𝗮𝘀 𝗮𝗹𝗮 𝘃𝗲𝘀 , 𝗟𝗼𝗯𝗼-𝗕𝗼𝘁-𝗟𝗶𝘁𝗲 𝗰𝗿𝗲𝗮𝗱𝗼 𝗽𝗼𝗿 𝗘𝗻𝗱𝗲𝗿 𝗟𝗗 𝗲𝘀 𝘂𝗻 𝗯𝗼𝘁 𝗾𝘂𝗲 𝘁𝗶𝗲𝗻𝗲 𝘂𝗻 𝗺𝗲𝗻𝘂 𝘃𝗮𝗿𝗶𝗮𝗱𝗼 𝘆 𝗽𝗮𝗿𝗮 𝘃𝗲𝗿𝗹𝗼 𝗲𝘀𝗰𝗿𝗶𝗯𝗲 .𝗺𝗲𝗻𝘂

𝗚𝗶𝘁𝗛𝘂𝗯
${md}
`.trim()
await conn.sendFile(m.chat, imagen1, 'gata.mp4', bot)
}
handler.customPrefix = /Que es un bot de whatsapp|En que ayuda un bot|para que sirve un bot|Que es un bot|queesunbot/i
handler.command = new RegExp
handler.register = true
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
