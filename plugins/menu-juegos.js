import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const url = global.md
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┏━━━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝗟𝗢𝗕𝗢-𝗕𝗢𝗧-𝗠𝗗
┗━━━━━━━━━━━
┣⟣☯︎ 𝙴𝙽 𝙶𝚁𝚄𝙿𝙾𝚂: 𝙾𝚆𝙽𝙴𝚁
┣⟣☯︎ 𝙾𝚆𝙽𝙴𝚁: 𝙻𝙳 𝙻𝙾𝙱𝙾 𝙳𝙸𝙾𝚂 
┣⟣☯︎ 𝙽𝚄𝙼𝙴𝚁𝙾: +505 7639 0682
┣⟣☯︎ 𝙵𝙴𝙲𝙷𝙰: ${date}
┣⟣☯︎ 𝚃𝙸𝙴𝙼𝙿𝙾 ${uptime}
┣⟣☯︎ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}
┗━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝙅𝙐𝙀𝙂𝙊𝙎
┗━━━━━━━━━━
┣🎪  𝐌𝐚𝐭𝐞𝐬 𝙽𝚘𝚘𝚋 𝚎𝚊𝚜𝚢 𝚖𝚎𝚍𝚒𝚞𝚖  𝚑𝚊𝚛𝚍 𝚎𝚡𝚝𝚛𝚎𝚖𝚎 𝚒𝚖𝚙𝚘𝚜𝚜𝚒𝚋𝚕𝚎 𝚒𝚖𝚙𝚘𝚜𝚜𝚒𝚋𝚕𝚎𝟸
┣🎪  𝐅𝐚𝐤𝐞 𝚃𝚎𝚡𝚝𝚘𝟷 @𝚝𝚊𝚐 𝚝𝚎𝚡𝚝𝚘𝟸
┣🎪  𝐏𝐩𝐭 𝙿𝚊𝚙𝚎𝚛 𝚙𝚒𝚎𝚍𝚛𝚊 𝚝𝚒𝚔𝚎𝚛𝚊
┣🎪  𝐏𝐫𝐨𝐬𝐭𝐢𝐭𝐮𝐭𝐨 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪  𝐏𝐫𝐨𝐬𝐭𝐢𝐭𝐮𝐭𝐚 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪  𝐆𝐚𝐲𝟐  𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪  𝐋𝐞𝐬𝐛𝐢𝐚𝐧𝐚 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪  𝐏𝐚𝐣𝐞𝐫𝐨 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪  𝐏𝐚𝐣𝐞𝐫𝐚 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪  𝐏𝐮𝐭𝐨 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪  𝐏𝐮𝐭𝐚 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪  𝐌𝐚𝐧𝐜𝐨 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪  𝐌𝐚𝐧𝐜𝐚 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪  𝐑𝐚𝐭𝐚 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪  𝐋𝐨𝐯𝐞 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪  𝐃𝐨𝐱𝐞𝐚𝐫 𝙽𝚘𝚖𝚋𝚛𝚎 @𝚝𝚊𝚐
┣🎪  𝐏𝐫𝐞𝐠𝐮𝐧𝐭𝐚 𝚃𝚎𝚡𝚝𝚘
┣🎪  𝐒𝐮𝐢𝐭𝐩𝐯𝐩 @𝚝𝚊𝚐
┣🎪  𝐒𝐥𝐨𝐭 𝙰𝚙𝚞𝚎𝚜𝚝𝚊
┣🎪  𝐓𝐭𝐭 𝙽𝚘𝚖𝚋𝚛𝚎 𝚜𝚊𝚕𝚊
┣🎪  𝐃𝐞𝐥𝐭𝐭𝐭
┣🎪  𝐀𝐜𝐞𝐫𝐭𝐢𝐣𝐨
┣🎪  𝐒𝐢𝐦𝐢 𝚃𝚎𝚡𝚝𝚘
┣🎪  𝐓𝐨𝐩 𝚃𝚎𝚡𝚝𝚘
┣🎪  𝐓𝐨𝐩𝐠𝐚𝐲𝐬
┣🎪  𝐓𝐨𝐩𝐨𝐭𝐚𝐤𝐮𝐬
┣🎪  𝐅𝐨𝐫𝐦𝐚𝐫𝐩𝐚𝐫𝐞𝐣𝐚
┣🎪  𝐕𝐞𝐫𝐝𝐚𝐝
┣🎪  𝐑𝐞𝐭𝐨
┣🎪  𝐂𝐚𝐧𝐜𝐢𝐨𝐧
┣🎪  𝐏𝐢𝐬𝐭𝐚
┣🎪  𝐀𝐤𝐢𝐧𝐚𝐭𝐨𝐫
┣🎪  𝐖𝐨𝐫𝐝𝐟𝐢𝐧𝐝
┗━━━━━━━━━━━━━━━━┛`.trim();
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
    conn.reply(m.chat, '[❗] 𝗘𝗿𝗿𝗼𝗿, 𝗿𝗲𝗽𝗼𝗿𝘁𝗲𝗹𝗼 𝗮𝗹 𝘀𝘁𝗮𝗳𝗳', m);
  }
};
handler.command = /^(menujuegos|game|juegos)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
