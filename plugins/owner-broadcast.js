// codigo adaptado por: https://github.com/Ender-GB-Isis777 & https://github.com/AzamiJs

import {randomBytes} from 'crypto';

const handler = async (m, {conn, command, participants, usedPrefix, text}) => {
  if (!text) return '[❗❗] 𝗖𝘂𝗮𝗹 𝗺𝗲𝗻𝘀𝗮𝗷𝗲 𝗯𝗼𝘆 𝗮 𝘁𝗿𝗮𝗻𝘀𝗺𝗶𝘁𝗶𝗿 𝗼𝘄𝗻𝗲𝗿';
  const fkontak = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${conn.user.jid.split('@')[0]}:${conn.user.jid.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
  const cc4 = text ? m : m.quoted ? await m.getQuotedObj() : false || m;
  const teks4 = text ? text : cc4.text;
  const groups2 = Object.keys(await conn.groupFetchAllParticipating());
  const chats2 = Object.keys(global.db.data.users).filter((user) => user.endsWith('@s.whatsapp.net'));
  await conn.reply(m.chat, '[💖] 𝗣𝗲𝗿𝗳𝗲𝗰𝘁𝗼, 𝗘𝗻𝘃𝗶𝗲 𝗲𝗹 𝗺𝗲𝗻𝘀𝗮𝗷𝗲 𝗮 𝘁𝗼𝗱𝗼𝘀 𝗹𝗼𝘀 𝗰𝗵𝗮𝘁𝘀.\n\n𝐸𝑠𝑝𝑜𝑠𝑖𝑏𝑙𝑒 𝑞𝑢𝑒 𝑒𝑙 𝑢𝑠𝑎𝑟 𝑒𝑠𝑡𝑒 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 𝐿𝑜𝑏𝑜 𝑠𝑒𝑎 𝑒𝑛𝑣𝑖𝑎𝑑𝑜 𝑎 𝑠𝑜𝑝𝑜𝑟𝑡𝑒.', m);
  const start2 = new Date().getTime();
  const usersTag2 = participants.map((u) => conn.decodeJid(u.id));
  let totalPri2 = 0;
  for (let i = 0; i < groups2.length; i++) {
    const group = groups2[i];
    const delay = i * 4000; // 4 seg
    setTimeout(async () => {
      await conn.reply(group, `╔══❰ 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 𝗠𝗲𝗻𝘀𝗮𝗷𝗲 ❱══╗\n\n` + teks4, {mentions: usersTag2}, {quoted: fkontak});
    }, delay);
  }
  for (const user of chats2) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 segundos
    await conn.reply(user, `╔══❰ 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 𝗠𝗲𝗻𝘀𝗮𝗷𝗲 ❱══╗\n\n` + teks4, fkontak, null);
    totalPri2++;
    if (totalPri2 >= 500000) {
      break;
    }
  }
  const end2 = new Date().getTime();
  const totalPrivate2 = chats2.length;
  const totalGroups2 = groups2.length;
  const total2 = totalPrivate2 + totalGroups2;
  let time2 = Math.floor((end2 - start2) / 1000);
  if (time2 >= 60) {
    const minutes = Math.floor(time2 / 60);
    const seconds = time2 % 60;
    time2 = `${minutes} minutos y ${seconds} segundos`;
  } else {
    time2 = `${time2} segundos`;
  }
  await m.reply(`𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙰:
\`\`\`𝙲𝙷𝙰𝚃 𝙿𝚁𝙸𝚅𝙰𝙳𝙾 >> ${totalPrivate2}\`\`\`
\`\`\`𝙲𝙷𝙰𝚃 𝙶𝚁𝚄𝙿𝙾𝚂  >>   ${totalGroups2}\`\`\`
\`\`\`𝙲𝙷𝙰𝚃𝚂 𝚃𝙾𝚃𝙰𝙻𝙴𝚂  >>   ${total2}\`\`\`\n\n*𝚃𝙸𝙴𝙼𝙿𝙾 𝚃𝙾𝚃𝙰𝙻 𝙳𝙴 𝙴𝙽𝚅𝙸𝙾 ${time2}*\n${totalPri2 >= 500000 ? `\n*𝐍𝐎𝐓𝐀: 𝙴𝚂 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝚀𝚄𝙴 𝚃𝙴𝙽𝙶𝙰 𝙵𝙰𝙻𝙻𝙾𝚂 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚈 𝙽𝙾 𝚂𝙴 𝙴𝙽𝚅𝙸𝙴 𝙰 𝚃𝙾𝙳𝙾𝚂 𝙻𝙾𝚂 𝙲𝙷𝙰𝚃𝚂, 𝙳𝙸𝚂𝙲𝚄𝙻𝙿𝙴 𝙿𝙾𝚁 𝙴𝙻 𝙼𝙾𝙼𝙴𝙽𝚃𝙾*` : ''}`);
};
handler.help = ['broadcast', 'bc'].map((v) => v + ' <teks>');
handler.tags = ['owner'];
handler.command = /^(comunicar|comunicado|broadcastall|bc)$/i;

handler.owner = true;

export default handler;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

const randomID = (length) => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length);

/* import fs from 'fs'
let handler = async (m, { conn, text } ) => {
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chatsall) { conn.sendButton(id, `*╔══❰ 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 𝗠𝗲𝗻𝘀𝗮𝗷𝗲 ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, '𝗠𝗲𝗻𝘀𝗮𝗷𝗲 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 𝗱𝗲𝗹 𝗦𝘁𝗮𝗳𝗳\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 𝗢𝘄𝗻𝗲𝗿 🤖', '.owner'],['💎 𝗗𝗼𝗻𝗮𝗿 💎', '.donasi']], false, {
contextInfo: { externalAdReply: {
title: 'ᴄᴏᴍᴜɴɪᴄᴀᴅᴏ ᴏғɪᴄɪᴀʟ ᴀ ᴛᴏᴅᴏs ʟᴏs ᴄʜᴀᴛs',
body: 'ʙʏ ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ',
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`,
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
}
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙰 𝚃𝙾𝙳𝙾𝚂 𝙻𝙾𝚂 𝙲𝙷𝙰𝚃𝚂*\n\n*𝐍𝐎𝐓𝐀: 𝙴𝚂 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝚀𝚄𝙴 𝚃𝙴𝙽𝙶𝙰 𝙵𝙰𝙻𝙻𝙾𝚂 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚈 𝙽𝙾 𝚂𝙴 𝙴𝙽𝚅𝙸𝙴 𝙰 𝚃𝙾𝙳𝙾𝚂 𝙻𝙾𝚂 𝙲𝙷𝙰𝚃𝚂, 𝙳𝙸𝚂𝙲𝚄𝙻𝙿𝙴 𝙿𝙾𝚁 𝙴𝙻 𝙼𝙾𝙼𝙴𝙽𝚃𝙾*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.rowner = true
export default handler*/
