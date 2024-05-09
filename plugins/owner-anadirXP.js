import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '[🌹] 𝑀𝑒𝑛𝑐𝑖𝑜𝑛𝑎 𝑎 𝑒𝑙 𝑢𝑠𝑢𝑎𝑟𝑖𝑜 𝑜 𝑡𝑎𝑔𝑢𝑒𝑎𝑙𝑜 @𝚝𝚊𝚐';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '[🌹] 𝑀𝑒𝑛𝑐𝑖𝑜𝑛𝑎 𝑒𝑙 𝐸𝑋𝑃 𝑎 𝑎𝑛̃𝑎𝑑𝑖𝑟';
  if (isNaN(txt)) throw '[🌹] 𝑁𝑜 𝑠𝑒 𝑎𝑑𝑚𝑖𝑡𝑒𝑛 𝑠𝑖𝑚𝑏𝑜𝑙𝑜𝑠 , 𝑆𝑜𝑙𝑜 𝑛𝑢𝑚𝑒𝑟𝑜𝑠!';
  const xp = parseInt(txt);
  let exp = xp;
  const pjk = Math.ceil(xp * pajak);
  exp += pjk;
  if (exp < 1) throw '[🌹] 𝑀𝑖𝑛𝑖𝑚𝑜 𝑎 𝑎𝑛̃𝑎𝑑𝑖𝑟 𝑒𝑠 1 𝐸𝑋𝑃';
  const users = global.db.data.users;
  users[who].exp += xp;
  m.reply(`≡ *𝚇𝙿 𝙰𝙽̃𝙰𝙳𝙸𝙳𝙾*
┌──────────────
▢ ✨𝐵𝑎𝑢𝑐ℎ𝑒: ${xp}
└──────────────`);
};
handler.command = ['añadirxp', 'addexp'];
handler.rowner = true;
export default handler;
