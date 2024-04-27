const handler = async (m, {conn}) => {
  try {
    const pp = imagen6;
    const img = await(await fetch('https://github.com/EnderJs-CreatorGL.png')).buffer();
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const str = `╭────[✓𝐿𝑜𝑏𝑜-𝐵𝑜𝑡-𝐿𝑖𝑡𝑒✓]
│
│ *➤ ʜᴏʟᴀ ${taguser}*
│
│ => 🍁 𝑇𝑖𝑒𝑚𝑝𝑜 𝑑𝑒 𝐸𝑗𝑒𝑐𝑢𝑐𝑖𝑜𝑛: ${uptime} ✓
│ => 🪁 𝑈𝑠𝑜 𝑃𝑢𝑏𝑙𝑖𝑐 ✓
│ => 🌹 𝐶𝑟𝑒𝑎𝑑𝑜𝑟: ᴛᴀʟʟʏᴄʟᴇʀᴋ ᴇɴᴅᴇʀ  ✓
│ => 📍 ʀᴇᴘᴏsɪᴛᴏʀɪᴏ ᴏғᴄ: https://github.com/EnderJs-CreatorGL/Lobo-Bot-Lite
╰────────────────`.trim();
    if (m.isGroup) {
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": global.md`, "sourceUrl": global.md`}}}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl":global.md, "sourceUrl": global.md}}}, {quoted: fkontak2});
    }
  } catch {
  }
};
handler.help = ['estado'];
handler.tags = ['main'];
handler.command = /^(estado|status|estate|state|stado|stats|runtime|uptime)$/i;
export default handler;
function clockString(ms) {
  const d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [`\n│ => 🎭 ` + d, ' 𝐷𝑎𝑦(s) ✓', `\n│ => 🎰𝑇𝑖𝑒𝑚𝑝𝑜 ` + h, ' 𝑇𝑖𝑚𝑒(s) ✓ ', `\n│ => 🧸 ` + m, '𝑀𝑖𝑛𝑢𝑡𝑜(s) ✓', `\n│ => 🚀 ` + s, ' 𝑆𝑒𝑔𝑢𝑛𝑑𝑜(s)✓ '].map((v) => v.toString().padStart(2, 0)).join('');
}
