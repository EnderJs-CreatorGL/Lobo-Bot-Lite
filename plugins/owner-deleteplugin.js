import { tmpdir } from 'os'
import path, { join } from 'path'
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch
} from 'fs'
let handler = async (m, { conn, usedPrefix: _p, command, __dirname, args, text }) => {

let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) return conn.reply(m.chat, `𝗠𝗲𝗻𝗰𝗶𝗼𝗻𝗲 𝗲𝗹 𝗽𝗹𝘂𝗴𝗶𝗻 𝗮 𝗲𝗹𝗶𝗺𝗶𝗻𝗮𝗿 𝗱𝗲 𝗹𝗮 𝗯𝗮𝘀𝗲 𝗱𝗲 𝗟𝗼𝗯𝗼-𝗟𝗶𝘁𝗲☆`)
    if (!ar1.includes(args[0])) return conn.reply(m.chat,  `𝗘𝗿𝗿𝗼𝗿, 𝗡𝗼 𝘀𝗲 𝗲𝗻𝗰𝗼𝗻𝘁𝗿𝗼 𝗲𝗹 𝗽𝗹𝘂𝗴𝗶𝗻☆\n•••••••••••••••••••••••••••••••••••••••••••••••••••••••\n\n${ar1.map(v => ' ' + v).join`\n`}`)
const file = join(__dirname, '../plugins/' + args[0] + '.js')
unlinkSync(file)
conn.reply(m.chat, `🐺 *"plugins/${args[0]}.js" 𝗘𝗹𝗶𝗺𝗶𝗻𝗮𝗱𝗼 𝗽𝗲𝗿𝗳𝗲𝗰𝘁𝗮𝗺𝗲𝗻𝘁𝗲 𝗱𝗲 𝗹𝗮 𝗯𝗮𝘀𝗲 𝗱𝗲 𝗟𝗼𝗯𝗼-𝗟𝗶𝘁𝗲☆`)

}
handler.help = ['deleteplugin <nombre>']
handler.tags = ['owner']
handler.command = /^(deleteplugin|dp|deleteplu)$/i

handler.rowner = true

export default handler
