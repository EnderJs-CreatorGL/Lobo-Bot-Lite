import db from '../lib/database.js'
import { createHash } from 'crypto'
import fs from 'fs'
import fetch from 'node-fetch'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) return m.reply(`🔰 Ya estás registrado.\n\n*¿Quiere volver a registrarse?*\n\nUse este comando para eliminar su registro.\n*${usedPrefix}unreg* <Número de serie>`)
  if (!Reg.test(text)) return m.reply(`🛑 Formato incorrecto.\n\nUso del comamdo: *${usedPrefix + command} nombre.edad*\nEjemplo : *${usedPrefix + command} ${name2}.16*`)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return m.reply('⚠️ El nombre no puede estar vacío.')
  if (!age) return m.reply('⚠️ La edad no puede estar vacía.')
  if (name.length >= 100) return m.reply('⚠️ El nombre es demasiado largo.' )
  age = parseInt(age)
  if (age > 100) return m.reply('🐈 Wow el abuelo quiere jugar al bot.')
  if (age < 5) return m.reply('🎀  hay un abuelo bebé jsjsj. ')
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let reg = '🔰 L O B O - R E G I S T R O 🔰\n\n'
      reg += `🛑 *Nombre* : ${name}\n`
      reg += `💥 *Edad* : ${age} años`
      /*reg += `🌷 *Numero de serie*\n`
      reg += `${sn}`*/
await conn.sendMini(m.chat, wm, author, reg, imagen1, imagen1, channel, m)
await m.react('🔥')
m.reply(`${sn}`)
}
handler.help = ['reg'].map(v => v + ' *<nombre.edad>*')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler