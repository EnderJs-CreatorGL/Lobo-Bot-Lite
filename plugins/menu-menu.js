import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  let txt = `𝗛𝗼𝗹𝗮👋, 𝗘𝗹 𝗺𝗲𝗻𝘂 𝗱𝗲 (𝗟𝗼𝗯𝗼) 𝗲𝘀𝘁𝗮 𝘀𝗶𝗲𝗻𝗱𝗼 𝗺𝗼𝗱𝗶𝗳𝗶𝗰𝗮𝗱𝗼 , 𝗺𝘂𝘆 𝗽𝗿𝗼𝗻𝘁𝗼 𝗲𝘀𝘁𝗮𝗿𝗮 𝗱𝗶𝘀𝗽𝗼𝗻𝗶𝗯𝗹𝗲💖`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen4, "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: m});
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|comandos|menú|help|cmd)$/i;
export default handler;
