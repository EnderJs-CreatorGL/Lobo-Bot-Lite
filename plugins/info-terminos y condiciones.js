/*import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'*/
let handler = async (m, { conn, usedPrefix, command}) => {
  

let Terminos = `*_Toda la informacion que se mencione aqui no excluye a la Propietario(Owner) del Bot, y Propietarios Acredores al uso de LOBO-BOT-MD_*
*_No Somos responsables del desconocimiento que tenga por parte de esta informacion._* 


*TERMINOS DE PRIVACIDAD*
_- Somos consciente del constante uso que le pueda dar al Bot, y tambien Garantizamos que la informaciin como (imagenes, videos, enlaces, ubicacion, Audios, Stickers, Gif, Contactos que Usted Proporcione en torno a Numero(s) Oficial(es) No son ni seran Compartido Con Nadie, ni se usaran dicho Datos fuera del entorno del BOT._

_- Lo que realice con el BOT queda solo en Usted ya que en Numero(s) Oficial(es) El Chat se Borra cada 24 Horas, segun el tiempo de Mensajes Temporales de WhatsApp._

_- Es posible que en Numero(s) Oficial(es) el Bot no este Activado las 24 Horas de los 7 dias de la Semana, eso no implica que no lo este o que Propietarios NO OFICIALES puedan Hacerlo._

_- El chat anonimo del comando #start, valga la redundancia no mostrará ningun dato de los Usuarios por parte de GataBot. Eso no implica que las personas que hagan uso de esta funcion puedan dar a conocer sus datos. en Numero(s) Oficial(es)._

_- Los Datos que Obtenga Lobo-bot-MD en Cuentas Oficiales de Usuarios(as), Grupos y Ajustes del Mismo puede verse Reiniciado, Modificado, y/o Retificado con el fin de que el Bot este en optimas Condiciones para su Uso. (Usuarios(as) Pueden Pedir Compensacion Por el numero wa.me/50558124470 o por el comando #Reporte. Debe de Presentar Pruebas)._

_- NO somos responsable si Hay alteraciones de este Bot no siendo Numero(s) Oficial(es) y tengan de uso un Repositorio de GitHub que no corresponda al Oficial, o que implementen Usuarios de Terceros integraciones que comprometan a los(as) Usuarios(as) al utilizar Versiones no Oficiales._

_- La funcion Sub Bot Garantiza la seguridad de sus Datos aplicada a Cuentas Oficiales._


*TERMINOS DE USO* 
_- La informacion que haya en este Bot y el/la usuario/a Haga uso de las Mismas asumirán saber los Terminos y Condiciones de tal forma que no habrá incovenientes al hacer un uso Particular de las Funciones del Bot._

_- El Bot contiene Material que solo puede ser visible para mayores de 18 Años, NO somos responsable si no cumple con la edad minima para usar el Material para Adultos._

_- Las imagenes, Videos y Audios que tenga este Bot son de uso Publico, Pero se considerarse Falta de Respeto al realizar Ediciones en el Material ya exitente que porte Nombre del Bot o informacion relevante._

_- Al hacer uso de una solicitud para ingreso de grupo con Una Cuenta Oficial, es recomendable que el grupo no cuente con temas de Odio, virus, contenido indebido, temas de discriminacion u campaña sin fundamentos._

_- Si ha recibido un Comunicado Oficial siendo Numero(s) Oficial(es) Mantener el Respeto de la misma manera si recibe un Mensaje sin haber usado un Comando Mantener el Respeto ya que puede en este ultimo caso ser una Persona Real._

_- Las Cuentas Oficiales de Lobo-bot-MD no se hacen responsable del Uso que usted haga con la funci贸n "Sub Bot"._


*CONDICIONES DE USO*
_- NO haga ni intente Llamar o hacer Videollamada al Bot siendo Numero(s) Oficial(es) ya que obstaculiza el funcionamiento del BOT._

_- NO usar el Bot siendo Numero(s) Oficial(es) para llevar a cabo alguna accion hostil que pueda verse comprometida el Funcionamiento del BOT._

_- NO use el comando de SPAM repetidamente, ya que Provocar un Mal funcionamiento en el BOT, tampoco envie al BOT mensajes que puedan comprometer el Funcionamiento de la misma._

_- Al hacer uso de ciertos comandos que tengan como objetivo socavar la incomodidad, intranquilidad, molestia u otro termino tajante, se tomarian las respectivas sanciones o llamados de alerta para prevalecer la integridad de los/las Usuarios(as) y funcionamiento de Lobo-Bot-MD._


*ESTE ES EL REPOSITORIO OFICIAL*
${md}


*DONAR AL CREADOR NUMEROS PARA EL BOT*
~ _Si te Agrada y valoras el Trabajo que he realizado, puedes ayudarme en Donar para que pueda continuar en este Proyecto_
wa.me/50558124470

*~ Muchas Gracias Por tomarte el tiempo en informate sobre Lobo-bot-MD*`.trim()
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
