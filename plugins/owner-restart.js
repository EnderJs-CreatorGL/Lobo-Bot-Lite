import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
//await conn.sendMessage(m.chat, { que: { texto: 'Isaac Roba Codigo', key: m.key } })
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (conn.user.jid == conn.user.jid) {
    const { key } = await conn.sendMessage(m.chat, {text: `⏳️⏳️`}, {quoted: m});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `⏳️⏳️⏳️⏳️`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `🚀🚀🚀🚀🚀🚀`, edit: key});
await conn.sendMessage(m.chat, {text: `🚩 *REINICIANDO* 🚩`, edit: key});
    process.send('reset')
  } else throw 'eh'
}
handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['data000','datos0', 'restart', 'reiniciar'] 
handler.rowner = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
