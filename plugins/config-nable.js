let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
case 'welcome':
    case 'bv':
    case 'bienvenida':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break

case 'detect':
    case 'config':
    case 'configuracion':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.detect = isEnable
      break

case 'reaccion':
    case 'reaction':
    case 'emojis':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.reaction = isEnable
      break

case 'antispam':
    case 'antispamosos':
    case 'antisoporte':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      bot.antiSpam = isEnable
      break

case 'antilink':
    case 'antilinks':
    case 'antienlaces':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.antiLink = isEnable
      break

default:
      if (!/[01]/.test(command)) return conn.reply(m.chat, `
*🔰 Ingresa una opción para habilitar o deshabilitar*

• *Tipo:* welcome

• *Tipo:* reaccion 

• *Tipo:* antispam 

• *Tipo:* detect 

• *Tipo:* antilink`, m)
      throw false
  }
  conn.reply(m.chat, `🔰 La función *${type}* se *${isEnable ? 'activó' : 'desactivó'}* ${isAll ? 'para Yaemori' : isUser ? '' : 'para este chat'}`, m, rcanal)
}

handler.help = ['on', 'off']
handler.tags = ['staff', 'lobo']
handler.command = ['enable', 'disable', 'on', 'off', '1', '0']

export default handler