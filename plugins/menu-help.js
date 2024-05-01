import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
    let fkon = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.reply(m.chat, '•𝘈𝘭𝘭𝘮𝘦𝘯𝘶•', m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '🌟 𝗕𝘂𝗲𝗻𝗼𝘀 𝗱𝗶𝗮𝘀!!', body: 'bienvenido', sourceUrl: global.md, thumbnail: imagen1 }}})
//m.react('🐺');
    await conn.sendMessage(m.chat, { react: { text: '💖', key: m.key } })
  let txt =`╭─ׅ─ׅ┈ ─๋︩︪─☁️⚡️☁️─ׅ─ׅ┈ ─๋︩︪─╮
┃֪࣪ Lᴏʙᴏ-Bᴏᴛ-Lɪᴛᴇ 🌻
┃֪࣪ 𝐍𝐮𝐞𝐯𝐨 𝐌𝐞𝐧𝐮 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 💫
╰─ׅ─ׅ┈ ─๋︩︪─☁️⚡️☁️─ׅ─ׅ┈ ─๋︩︪─╯

     ╭─ׅ─ׅ┈ ─๋︩︪─☁️⚡️☁️─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🪷 Mᴇɴᴜs Dɪsᴘᴏɴɪʙʟᴇs 🪷
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☁️⚡️☁️─ׅ─ׅ┈ ─๋︩︪─╯
╔╼𝅄━ִⷪ𝅄ͭ━ִ𝆺𝅥🌳   ۫ 𝆺𝅥⋆ ִ ۫ 𝆺𝅥 ִ🌳 ۫ ⊹━ִꙵ𝅄━ִⷪ𝅄╾࣪╗
┃֪࣪📔 .allmenu
┃֪࣪🎨 .menujuegos
┃֪࣪🌳 .menuowner
┃֪࣪🧱 .cajafuerte
┃֪࣪💖 .colaboradores
┃֪࣪🛡️ .terminos
┃֪࣪📝 .reglas 
╚╼𝅄━ִ𝅄━ִ𝆺𝅥 𝆭🌳 ۫ 𝆺𝅥⋆ ִ ۫ 𝆺𝅥 ִ🌳 ۫ ⊹━ִ𝅄━ִ?

     ╭─ׅ─ׅ┈ ─๋︩︪─☁️⚡️☁️─ׅ─ׅ┈ ─๋︩︪─╮
╭╼🍁 Iɴғᴏʀᴍᴀᴄɪᴏɴ 🍁
┃֪࣪  ╰─ׅ─ׅ┈ ─๋︩︪─☁️⚡️☁️─ׅ─ׅ┈ ─๋︩︪─╯
╔╼𝅄━ִⷪ𝅄ͭ━ִ𝆺𝅥⚡️   ۫ 𝆺𝅥⋆ ִ ۫ 𝆺𝅥 ִ⚡️ ۫ ⊹━ִꙵ𝅄━ִⷪ𝅄╾࣪╗
┃֪࣪🌻 Para Contactar Al Creador
┃֪࣪🌻 Utilice #owner
┃֪࣪🌻 Sea Respetuso.
╚╼𝅄━ִ𝅄━ִ𝆺𝅥 𝆭⚡️ ۫ 𝆺𝅥⋆ ִ ۫ 𝆺𝅥 ִ⚡️ ۫ ⊹━ִ𝅄━ִ?
 `;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '•𝐿𝑜𝑏𝑜-𝐵𝑜𝑡-𝐿𝑖𝑡𝑒🐈🌻•', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🐺');
  } catch {
    conn.reply(m.chat, '[⛔] 𝗙𝗮𝗹𝗹𝗼, 𝗘𝗹 𝗺𝗲𝗻𝘂 𝘁𝗶𝗲𝗻𝗲 𝘂𝗻 𝗲𝗿𝗿𝗼𝗿 𝗽𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁𝗮𝗹𝗼 𝗮𝗹 𝘀𝘁𝗮𝗳𝗳.', m);
  }
};
handler.help = ['Help'];
handler.tags = ['Help'];
handler.command = /^(Ayuda|help|Menu|Menu)$/i;
handler.register = true
export default handler;