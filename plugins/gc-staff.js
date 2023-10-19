let handler = async (m, { conn, participants, groupMetadata, args, usedPrefix, text, command }) => {
  if (!text) return m.reply(`{lenguage)['smsAvisoMG']()}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊 𝙋𝙊𝙍 𝘾𝙐𝘼𝙇 𝙌𝙐𝙄𝙀𝙍𝙀 𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝘼 𝙇𝘼 𝙋𝙍𝙀𝙎𝙀𝙉𝘾𝙄𝘼 𝘿𝙀𝙇 𝙇𝙊𝙎 𝘼𝘿𝙈𝙄𝙉𝙎`)
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `${smsAddB5()} _${pesan}_`

let textoA = 
`*⊱ ──── 《.⋅ 🐺 ⋅.》 ──── ⊰*
ෆ ${smsAddB3()}
ෆ ${oi}
*⊱ ──── 《.⋅ ${vs} ⋅.》 ──── ⊰*`

let textoB = 
`${listAdmin}

⛔ ${smsAddB4()} ⛔`.trim()
await conn.sendFile(m.chat, pp, 'error.jpg', textoA + textoB, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
//await conn.sendButton(m.chat, textoA, textoB, pp, [[smsConMenu(), `.menu`]], m, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.command = /^(staff|@admins|STAFF)$/i
handler.group = true
export default handler
