let handler = async(m, { conn, command, text }) => {

  if ( users == 5217294888993 || users == 5217294888993) try {
    
  if (!text) return m.reply(`*⚠️ POR FAVOR COLOQUE SU MOTIVO PARA ESTA REUNIÓN*`)
    if (text.length < 10) return m.reply(`*⚠️ EL MOTIVO ES MUY CORTO, MINIMO 10 CARÁCTERES*`)
let users = m.sender.split`@`[0]
    let texto = `[🖥️] 𝗘𝗹 𝗼𝘄𝗻𝗲𝗿 @${m.sender.split`@`[0]} 𝗔 𝗦𝗼𝗹𝗶𝗰𝗶𝘁𝗮𝗱𝗼 𝗹𝗮 𝗽𝗿𝗲𝘀𝗲𝗻𝗰𝗶𝗮 𝗱𝗲𝗹 𝗦𝘁𝗮𝗳𝗳 𝗽𝗼𝗿 𝗲𝗹 𝗺𝗼𝘁𝗶𝘃𝗼 ${text}, 𝗗𝗶𝗿𝗶𝗴𝗲𝘁𝗲 𝗮𝗹 𝗴𝗿𝘂𝗽𝗼 𝗱𝗲𝗹 𝗦𝘁𝗮𝗳𝗳

𝙎𝘁𝗮𝗳𝗳 𝗟𝗼𝗕𝗼-𝘽𝙤𝙩-𝙈𝘿 [🐺]`
m.reply('[💻]𝗣𝗲𝗿𝗳𝗲𝗰𝘁𝗼, 𝘀𝗲 𝗲𝘀𝘁𝗮 𝗲𝗻𝘃𝗶𝗮𝗻𝗱𝗼 𝗲𝗹 𝗺𝗲𝗻𝘀𝗮𝗷𝗲 𝗮 𝗹𝗼𝘀 𝗼𝘄𝗻𝗲𝗿𝘀(𝗦𝘁𝗮𝗳𝗳) 𝗱𝗲 𝗟𝗼𝗕𝗼-𝗕𝗼𝘁-𝗠𝗗')
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                        conn.sendPayment(data.jid, '999999999', texto, m)}
  } catch (e) { await conn.reply(m.chat, 'este comando no funciona', m)
               console.log(e)
               } else {
    await m.reply('no puedes usar este comando')}
                        
                           // conn.reply(data.jid, text, m, { mentions: [m.sender] })
                    

}
handler.tags = ['owner']
handler.command = handler.help =['reunionstaff']
handler.rowner = true

export default handler
