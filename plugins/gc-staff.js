let handler = async (m, { conn, participants, groupMetadata, args, usedPrefix, text, command }) => {
  if (!text) return m.reply(`[❗]𝗜𝗻𝗴𝗿𝗲𝘀𝗮 𝗲𝗹 𝘁𝗲𝘅𝘁𝗼 𝗽𝗮𝗿𝗮 𝗹𝗹𝗮𝗺𝗮𝗿 𝗮𝗹 𝘀𝘁𝗮𝗳𝗳 𝗱𝗲𝗹 𝗴𝗿𝘂𝗽𝗼`)
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `${pesan}_`

let textoA = 
`*⊱ ──── 《.⋅ 𝗦𝗧𝗔𝗙𝗙 𝗚𝗥𝗨𝗣𝗢 ⋅.》 ──── ⊰*
☆ ${oi}
*⊱ ──── 《.⋅ 𝗟𝗢𝗕𝗢-𝗕𝗢𝗧-𝗠𝗗 ⋅.》 ──── ⊰*`

let textoB = 
`${listAdmin}

`.trim()
await conn.sendFile(m.chat, pp, 'error.jpg', textoA + textoB, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
//await conn.sendButton(m.chat, textoA, textoB, pp, [[smsConMenu(), `.menu`]], m, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.command = /^(staff|Staffs|STAFF)$/i
handler.group = true
export default handler
