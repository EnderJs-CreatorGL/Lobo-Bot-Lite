/*import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'*/
let handler = async (m, { conn, usedPrefix, command}) => {
  

let Terminos = `
🖋️𝗜𝗻𝗳𝗼:
seguir al pie de la letra los terminos y condiciones del bot,
El equipo de Staff no se hace responsable del mal uso del bot.

🛡️𝗧𝗲𝗿𝗺𝗶𝗻𝗼𝘀 𝗱𝗲 𝗽𝗿𝗶𝘃𝗮𝗰𝗶𝗱𝗮𝗱:
_- Somos consciente del constante uso que le pueda dar al Bot, y tambien Garantizamos que la informaciin como (imagenes, videos, enlaces, ubicacion, Audios, Stickers, Gif, Contactos que Usted Proporcione en torno a Numero(s) Oficial(es) No son ni seran Compartido Con Nadie, ni se usaran dicho Datos fuera del entorno del BOT._

_- Lo que realice con el BOT queda solo en Usted ya que en Numero(s) Oficial(es) El Chat se Borra cada 24 Horas, segun el tiempo de Mensajes Temporales de WhatsApp._

_- Es posible que en Numero(s) Oficial(es) el Bot no este Activado las 24 Horas de los 7 dias de la Semana, eso no implica que no lo este o que Propietarios NO OFICIALES puedan Hacerlo._

_- El chat anonimo del comando #start, valga la redundancia no mostrará ningun dato de los Usuarios por parte de Lobo-Bot-MD. Eso no implica que las personas que hagan uso de esta funcion puedan dar a conocer sus datos. en Numero(s) Oficial(es)._

_- Los Datos que Obtenga Lobo-bot-MD en Cuentas Oficiales de Usuarios(as), Grupos y Ajustes del Mismo puede verse Reiniciado, Modificado, y/o Retificado con el fin de que el Bot este en optimas Condiciones para su Uso. (Usuarios(as) Pueden Pedir Compensacion Por el numero wa.me/50558124470 o por el comando #Reporte. Debe de Presentar Pruebas)._

_- NO somos responsable si Hay alteraciones de este Bot no siendo Numero(s) Oficial(es) y tengan de uso un Repositorio de GitHub que no corresponda al Oficial, o que implementen Usuarios de Terceros integraciones que comprometan a los(as) Usuarios(as) al utilizar Versiones no Oficiales._

_- La funcion Sub Bot Garantiza la seguridad de sus Datos aplicada a Cuentas Oficiales._


🍷𝐺𝑖𝑡ℎ𝑢𝑏 𝐿𝑜𝑏𝑜-𝐵𝑜𝑡-𝐿𝑖𝑡𝑒
${md}

🪁𝗦𝗶 𝘁𝗲 𝗮 𝗴𝘂𝘀𝘁𝗮𝗱𝗼 𝗲𝗹 𝗯𝗼𝘁, 𝗽𝘂𝗲𝗱𝗲𝘀 𝗱𝗼𝗻𝗮𝗿:
~ _Si te Agrada y valoras el Trabajo que he realizado, puedes ayudarme en Donar Numeros para que pueda continuar en este Proyecto_
wa.me/50558124470

🧸𝑇𝑒 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑠𝑡𝑒 𝑠𝑜𝑏𝑟𝑒 𝐿𝑜𝑏𝑜-𝐵𝑜𝑡-𝐿𝑖𝑡𝑒`.trim()
await conn.sendFile(m.chat, imagen1, 'gata.mp4', Terminos)
}
handler.customPrefix = /terminos|t茅rminos|t茅rminos, condiciones y privacidad|terminos, condiciones y privacidad|t茅rminos y condiciones y privacidad|terminosycondicionesyprivacidad|terminosycondiciones|terminos y condiciones y privacidad|terminos y condiciones|terminos y condiciones|terminos de uso|Terminos de uso|Termin贸 se uso|t茅rminos de uso|T茅rminos de uso|T茅rminos y condiciones/i
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
