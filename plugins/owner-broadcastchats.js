import fs from 'fs';
const handler = async (m, {conn, text} ) => {
  const delay = (time) => new Promise((res) => setTimeout(res, time));
  const chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map((v) => v[0]);
  if (!text) throw '[❕]𝗖𝘂𝗮𝗹 𝗲𝘀 𝗲𝗹 𝗺𝗲𝗻𝘀𝗮𝗷𝗲 𝗾𝘂𝗲 𝗾𝘂𝗶𝗲𝗿𝗲 𝗾𝘂𝗲 𝘁𝗿𝗮𝗻𝘀𝗺𝗶𝘁𝗲 𝗢𝘄𝗻𝗲𝗿. ';
  const cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m;
  const teks = text ? text : cc.text;
  for (const i of chats) {
    await delay(500);
    conn.relayMessage(i,
        {liveLocationMessage: {
          degreesLatitude: 35.685506276233525,
          degreesLongitude: 139.75270667105852,
          accuracyInMeters: 0,
          degreesClockwiseFromMagneticNorth: 2,
          caption: '[❕𝗠𝗲𝗻𝘀𝗮𝗷𝗲 𝗢𝗳𝗶𝗰𝗶𝗮𝗹❕]\n\n' + teks + '\n\n☆𝗠𝗲𝗻𝘀𝗮𝗷𝗲 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 𝗱𝗲𝗹 𝗦𝘁𝗮𝗳𝗳☆',
          sequenceNumber: 2,
          timeOffset: 3,
          contextInfo: m,
        }}, {}).catch((_) => _);
  }
  m.reply(`[💖] 𝗣𝗲𝗿𝗳𝗲𝗰𝘁𝗼, 𝗺𝗲𝗻𝘀𝗮𝗷𝗲 𝗲𝗻𝘃𝗶𝗮𝗱𝗼 𝗮  ${chats.length} 𝗖𝗵𝗮𝘁𝘀\n\n𝐸𝑠𝑝𝑜𝑠𝑖𝑏𝑙𝑒 𝑞𝑢𝑒 𝑒𝑙 𝑢𝑠𝑜 𝑑𝑒 𝑒𝑠𝑡𝑒 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 𝑒𝑛𝑣𝑖𝑒 𝑎 𝐿𝑜𝑏𝑜 𝑎 𝑠𝑜𝑝𝑜𝑟𝑡𝑒.`);
};
handler.help = ['broadcastchats', 'bcchats'].map((v) => v + ' <teks>');
handler.tags = ['owner'];
handler.command = /^(broadcastchats?|bcc(hats?)?)$/i;
handler.rowner = true;
export default handler;


/* import fs from 'fs'
let handler = async (m, { conn, text } ) => {
let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chats) {
conn.sendButton(id, `*╔══❰❕ 𝗠𝗲𝗻𝘀𝗮𝗷𝗲 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 ❕❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, '☆𝗠𝗲𝗻𝘀𝗮𝗷𝗲 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 𝗱𝗲𝗸 𝗦𝘁𝗮𝗳𝗳☆\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 𝙾𝚆𝙽𝙴𝚁 🤖', '.owner'],['💎 𝙳𝙾𝙽𝙰𝚁 💎', '.donasi']], false, {
contextInfo: { externalAdReply: {
title: 'ᴄᴏᴍᴜɴɪᴄᴀᴅᴏ ᴏғɪᴄɪᴀʟ ᴀ ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs',
body: 'ʙʏ ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ',
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`,
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`[💖] 𝗣𝗲𝗿𝗳𝗲𝗰𝘁𝗼, 𝗺𝗲𝗻𝘀𝗮𝗷𝗲 𝗲𝗻𝘃𝗶𝗮𝗱𝗼 𝗮 ${chats.length} \n\n𝐸𝑠𝑝𝑜𝑠𝑖𝑏𝑙𝑒 𝑞𝑢𝑒 𝑒𝑙 𝑢𝑠𝑜 𝑑𝑒 𝑒𝑠𝑡𝑒 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 𝑒𝑛𝑣𝑖𝑒 𝑎 𝐿𝑜𝑏𝑜 𝑎 𝑠𝑜𝑝𝑜𝑟𝑡𝑒.')
handler.help = ['broadcastchats', 'bcchats'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastchats?|bcc(hats?)?)$/i
handler.rowner = true
export default handler*/

