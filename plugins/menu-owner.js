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
    const str = `┏━━━━━━━━━━━━━━━━
┃ ⏤͟͟͞͞𝗟𝗢𝗕𝗢-𝗕𝗢𝗧-𝗠𝗗
┗━━━━━━━━━━━
┣⟣☯︎ 𝙴𝙽 𝙶𝚁𝚄𝙿𝙾𝚂: 𝙾𝚆𝙽𝙴𝚁
┣⟣☯︎ 𝙾𝚆𝙽𝙴𝚁: 𝙻𝙳 𝙻𝙾𝙱𝙾 𝙳𝙸𝙾𝚂
┣⟣☯︎ 𝙽𝚄𝙼𝙴𝚁𝙾: +505 7639 0682
┣⟣☯︎ 𝙵𝙴𝙲𝙷𝙰: ${date}
┣⟣☯︎ 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}
┣⟣☯︎ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}
┗━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃⏤͟͟͞͞𝙊𝙒𝙉𝙀𝙍𝙎 𝙔 𝗦𝗧𝗔𝗙𝗙
┗━━━━━━━━━━━━
    ✪ ⃟🍭𝙊𝙒𝙉𝙀𝙍𝙎 - 𝗦𝗧𝗔𝗙𝗙
┣🗂  > 𝚏𝚞𝚗𝚌𝚒𝚘𝚗
┣🗂  => 𝚏𝚞𝚗𝚌𝚒𝚘𝚗
┣🗂  $ 𝚏𝚞𝚗𝚌𝚒𝚘𝚗
┣🗂  𝐬𝐞𝐭𝐩𝐫𝐞𝐟𝐢𝐱 𝚙𝚛𝚎𝚏𝚒𝚓𝚘
┣🗂  𝐚𝐥𝐭𝐞𝐫𝐚𝐫 𝚗𝚞𝚖𝚎𝚛𝚘
┣🗂  𝐫𝐞𝐬𝐞𝐭𝐩𝐫𝐞𝐟𝐱
┣🗂  𝘁𝗲𝗻𝗲𝗿𝗽𝗼𝗱𝗲𝗿
┣🗂  𝐜𝐡𝐞𝐭𝐚𝐫
┣🗂  𝐬𝐚𝐥𝐢𝐫(𝐨𝐮𝐭 𝐛𝐨𝐭)
┣🗂  𝐜𝐚𝐣𝐚𝐟𝐮𝐞𝐫𝐭𝐞
┣🗂  𝐛𝐥𝐨𝐜𝐤𝐥𝐢𝐬𝐭
┣🗂  𝐛𝐥𝐨𝐜𝐤 @𝚝𝚊𝚐 / 𝚗𝚞𝚖𝚎𝚛𝚘
┣🗂  𝐮𝐧𝐛𝐥𝐨𝐜𝐤 @𝚝𝚊𝚐 / 𝚗𝚞𝚖𝚎𝚛𝚘
     ✪ ⃟🍧 𝙊𝙒𝙉𝙀𝙍𝙎-𝗦𝗧𝗔𝗙𝗙-𝘽𝙊𝙏
┣🌹  𝘁𝗿𝘂𝗲 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝
┣🌷  𝗳𝗮𝗹𝘀𝗲 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝
┣🌹  𝘁𝗿𝘂𝗲 𝚊𝚞𝚝𝚘𝚛𝚎𝚊𝚍
┣🌷  𝗳𝗮𝗹𝘀𝗲 𝚊𝚞𝚝𝚘𝚛𝚎𝚊𝚍
┣🌹  𝘁𝗿𝘂𝗲 𝚙𝚞𝚋𝚕𝚒𝚌
┣🌷  𝗳𝗮𝗹𝘀𝗲 𝚙𝚞𝚋𝚕𝚒𝚌
┣🌹  𝘁𝗿𝘂𝗲 𝚙𝚌𝚘𝚗𝚕𝚢
┣🌷  𝗳𝗮𝗹𝘀𝗲 𝚙𝚌𝚘𝚗𝚕𝚢
┣🌹  𝘁𝗿𝘂𝗲 𝚐𝚌𝚘𝚗𝚕𝚢
┣🌷  𝗳𝗮𝗹𝘀𝗲 𝚐𝚌𝚘𝚗𝚕𝚢
┣🌹  𝘁𝗿𝘂𝗲 𝚊𝚗𝚝𝚒𝚌𝚊𝚕𝚔
┣🌷  𝗳𝗮𝗹𝘀𝗲 𝚊𝚗𝚝𝚒𝚌𝚊𝚕𝚕
┣🌹  𝘁𝗿𝘂𝗲 𝚊𝚗𝚝𝚒𝚙𝚛𝚒𝚟𝚊𝚍𝚘
┣🌷  𝗳𝗮𝗹𝘀𝗲 𝚊𝚗𝚝𝚒𝚙𝚛𝚒𝚟𝚊𝚍𝚘
┣🌹  𝘁𝗿𝘂𝗲 𝚖𝚘𝚍𝚎𝚓𝚊𝚍𝚒𝚋𝚘𝚝
┣🌷  𝗳𝗮𝗹𝘀𝗲 𝚖𝚘𝚍𝚎𝚓𝚊𝚍𝚒𝚋𝚘𝚝
┣🌹  𝘁𝗿𝘂𝗲 𝚊𝚞𝚍𝚒𝚘𝚜_𝚋𝚘𝚝
┣🌷  𝗳𝗮𝗹𝘀𝗲 𝚊𝚞𝚍𝚒𝚘𝚜_𝚋𝚘𝚝
┣🌹  𝘁𝗿𝘂𝗲 𝚊𝚗𝚝𝚒𝚜𝚙𝚊𝚖
┣🌷  𝗳𝗮𝗹𝘀𝗲 𝙸𝚗𝚌𝚕𝚞𝚢𝚎
     ✪ ⃟🍭𝙊𝙒𝙉𝙀𝙍𝙎-𝗦𝗧𝗔𝗙𝗙-𝙂𝙍𝙐𝙋𝙊𝙎
┣📕  𝐦𝐬𝐠 𝚝𝚎𝚡𝚝𝚘
┣📕  𝐫𝐞𝐮𝐧𝐢𝐨𝐧(𝐥𝐥𝐚𝐦𝐚𝐝𝐚 𝐨𝐰𝐧𝐞𝐫𝐬)
┣📕  𝗽𝗿𝗼𝗵𝗶𝗯𝗶𝗿𝗰𝗵𝗮𝘁
┣📕  𝗱𝗲𝘀𝗽𝗿𝗼𝗵𝗶𝗯𝗶𝗿𝗰𝗵𝗮𝘁
┣📕  𝗱𝗮𝘁𝗮0 @𝚝𝚊𝚐
┣📕  𝗽𝗿𝗼𝗵𝗶𝗯𝗶𝗿𝘂𝘀𝗲𝗿 @𝚝𝚊𝚐
┣📕  𝗱𝗲𝘀𝗽𝗿𝗼𝗵𝗶𝗯𝗶𝗿𝘂𝘀𝗲𝗿 @𝚝𝚊𝚐
┣📕  𝐝𝐚𝐫𝐝𝐢𝐚𝐦𝐚𝐧𝐭𝐞𝐬 @𝚝𝚊𝚐 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┣📕  𝐚𝐧̃𝐚𝐝𝐢𝐫𝐱𝐩 @𝚝𝚊𝚐 𝚌𝚊𝚗𝚝𝚒𝚍𝚊𝚍
┣📕  𝐛𝐜 𝚝𝚎𝚡𝚝𝚘
┣📕  𝐛𝐜𝐜𝐡𝐚𝐭𝐬 𝚝𝚎𝚡𝚝𝚘
┣📕  𝐛𝐜𝐠𝐜 𝚝𝚎𝚡𝚝𝚘
┣📕  𝐛𝐜𝐠𝐜𝟐 𝚊𝚞𝚍𝚒𝚘
┣📕  𝐛𝐜𝐠𝐜𝟐 𝚟𝚒𝚍𝚎𝚘
┣📕  𝐛𝐜𝐠𝐜𝟐 𝚒𝚖𝚊𝚐𝚎𝚗
┣📕  𝐛𝐜𝐛𝐨𝐭 𝚝𝚎𝚡𝚝𝚘
┣📕  𝐜𝐥𝐞𝐚𝐫𝐭𝐩𝐩
┣📕  𝐝𝐞𝐥𝐥𝐨𝐛𝐨/𝐥𝐨𝐛𝐨𝐝𝐞𝐥
┣📕  𝐫𝐞𝐬𝐭𝐚𝐫𝐭
┣📕  𝐮𝐩𝐝𝐚𝐭𝐞
┣📕  𝐛𝐚𝐧𝐥𝐢𝐬𝐭
┣📕  𝐚𝐝𝐝𝐩𝐫𝐞𝐦 @𝚝𝚊𝚐𝚝𝚒𝚎𝚖𝚙𝚘
┣📕  𝐚𝐝𝐝𝐩𝐫𝐞𝐦𝟐 @𝚝𝚊𝚐 𝚝𝚒𝚎𝚖𝚙𝚘
┣📕  𝐚𝐝𝐝𝐩𝐫𝐞𝐦𝟑 @𝚝𝚊𝚐 𝚝𝚒𝚎𝚖𝚙𝚘
┣📕  𝐚𝐝𝐝𝐩𝐫𝐞𝐦𝟒 @𝚝𝚊𝚐 𝚝𝚒𝚎𝚖𝚙𝚘
┣📕  𝐝𝐞𝐥𝐩𝐫𝐞𝐦 @𝚝𝚊𝚐
┣📕  𝐥𝐢𝐬𝐭𝐜𝐦𝐝
┣📕  𝐬𝐞𝐭𝐩𝐩𝐛𝐨𝐭 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗
┣📕  𝐚𝐝𝐝𝐜𝐦𝐝 𝚝𝚎𝚡𝚝𝚘 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚜𝚝𝚒𝚌𝚔𝚎𝚛/𝚒𝚖𝚊𝚐𝚎𝚗
┣📕  𝐝𝐞𝐥𝐜𝐦𝐝 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚜𝚝𝚒𝚌𝚔𝚎𝚛 /𝚒𝚖𝚊𝚐𝚎𝚗 𝚌𝚘𝚗 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚘 𝚝𝚎𝚡𝚝𝚘 𝚊𝚜𝚒𝚐𝚗𝚊𝚍𝚘
┣📕  𝐬𝐚𝐯𝐞𝐢𝐦𝐚𝐠𝐞
┣📕  𝐯𝐢𝐞𝐰𝐢𝐦𝐚𝐠𝐞
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
    conn.reply(m.chat, '[❗] 𝗘𝗿𝗿𝗼𝗿, 𝗽𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁𝗲𝗹𝗼 𝗮𝗹 𝘀𝘁𝗮𝗳𝗳', m);
  }
};
handler.command = /^(wtodo|ownermenu|wstaff)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
