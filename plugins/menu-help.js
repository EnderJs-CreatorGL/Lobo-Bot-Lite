import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
    let fkon = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.reply(m.chat, '𝐸𝑗𝑒𝑐𝑢𝑡𝑎𝑛𝑑𝑜 𝑎𝑐𝑐𝑖𝑜̀𝑛,𝐸𝑛𝑣𝑖𝑎𝑛𝑑𝑜📍. . .', m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '🌟 𝗕𝘂𝗲𝗻𝗼𝘀 𝗱𝗶𝗮𝘀!!', body: 'bienvenido', sourceUrl: global.md, thumbnail: imagen1 }}})
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
 `.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '[❕] 𝗔𝗹𝗴𝗼 𝘀𝗮𝗹𝗶𝗼 𝗺𝗮𝗹, 𝗽𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁𝗲𝗹𝗼 𝗮𝗹 𝗦𝘁𝗮𝗳𝗳', m);
  }
};
handler.command = /^(help|menu|botmenu)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
