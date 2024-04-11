let handler = async(m, { conn, command, text }) => {

  let users = m.sender.split`@`[0]
  if ( users == 5217294888993 || users == 50558124470) try {
  if (!text) return m.reply(`[❗]¡𝗖𝘂𝗮𝗹 𝗲𝘀 𝗲𝗹 𝗠𝗼𝘁𝗶𝘃𝗼 𝗽𝗮𝗿𝗮 𝗹𝗮 𝗿𝗲𝘂𝗻𝗶𝗼𝗻 𝗱𝗲𝗹 𝘀𝘁𝗮𝗳𝗳!`)
    if (text.length < 10) return m.reply(`¡𝗠𝗼𝘁𝗶𝘃𝗼 𝗺𝘂𝘆 𝗰𝗼𝗿𝘁𝗼 , 𝗺𝗶𝗻𝗶𝗺𝗼 10 𝗰𝗮𝗿𝗮𝗰𝘁𝗲𝗿𝗲𝘀!`)

    let texto = `[🍧] 𝗘𝗹 𝗼𝘄𝗻𝗲𝗿 @${m.sender.split`@`[0]} 𝗔 𝗦𝗼𝗹𝗶𝗰𝗶𝘁𝗮𝗱𝗼 𝗹𝗮 𝗽𝗿𝗲𝘀𝗲𝗻𝗰𝗶𝗮 𝗱𝗲𝗹 𝗦𝘁𝗮𝗳𝗳 𝗽𝗼𝗿 𝗲𝗹 𝗺𝗼𝘁𝗶𝘃𝗼: ¡${text}¡𝗗𝗶𝗿𝗶𝗴𝗲𝘁𝗲 𝗮𝗹 𝗴𝗿𝘂𝗽𝗼 𝗱𝗲𝗹 𝗦𝘁𝗮𝗳𝗳

𝙎𝘁𝗮𝗳𝗳 𝗟𝗼𝗯𝗼-𝘽𝙤𝙩-𝗟𝗶𝘁𝗲 [🐺]`
m.reply('[🍨]𝗣𝗲𝗿𝗳𝗲𝗰𝘁𝗼, 𝘀𝗲 𝗲𝘀𝘁𝗮 𝗲𝗻𝘃𝗶𝗮𝗻𝗱𝗼 𝗲𝗹 𝗺𝗲𝗻𝘀𝗮𝗷𝗲 𝗮 𝗹𝗼𝘀 𝗼𝘄𝗻𝗲𝗿𝘀(𝗦𝘁𝗮𝗳𝗳) 𝗱𝗲 𝗟𝗼𝗯𝗼-𝗕𝗼𝘁-𝗟𝗶𝘁𝗲')
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                        conn.sendPayment(data.jid, '999999999', texto, m)}
  } catch (e) { await conn.reply(m.chat, '𝗖𝗼𝗺𝗮𝗻𝗱𝗼 𝗻𝗼 𝗳𝘂𝗻𝗰𝗶𝗼𝗻𝗮𝗹', m)
               console.log(e)
               } else {
    await m.reply('¡𝗧𝘂 𝗻𝗼 𝘁𝗶𝗲𝗻𝗲𝘀 𝗽𝗲𝗿𝗺𝗶𝘀𝗼 𝗽𝗮𝗿𝗮 𝘂𝘀𝗮𝗿 𝗲𝘀𝘁𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼!')}
                        
                           // conn.reply(data.jid, text, m, { mentions: [m.sender] })
                    

}
handler.tags = ['owner']
handler.command = handler.help =['reunionstaff']
handler.rowner = true

export default handler
