import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '[🌹] 𝐸𝑡𝑖𝑞𝑢𝑒𝑡𝑎 𝑎𝑙 𝑢𝑠𝑒𝑟 @𝚝𝚊𝚐';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '[🌹] 𝐶𝑎𝑛𝑡𝑖𝑑𝑎𝑑 𝑎 𝑎𝑛̃𝑎𝑑𝑖𝑟';
  if (isNaN(txt)) throw '[🌹] 𝑆𝑜𝑙𝑜 𝑛𝑢𝑚𝑒𝑟𝑜𝑠!';
  const dmt = parseInt(txt);
  let limit = dmt;
  const pjk = Math.ceil(dmt * pajak);
  limit += pjk;
  if (limit < 1) throw '[🌹] 𝐶𝑎𝑛𝑡𝑖𝑑𝑎𝑑 𝑚𝑖𝑛𝑖𝑚𝑎 1 𝐸𝑋𝑃';
  const users = global.db.data.users;
  users[who].limit += dmt;
  m.reply(`≡ *💎 𝙰𝙽̃𝙰𝙳𝙸𝙳𝙾*
┌──────────────
▢ ✨𝐵𝑎𝑢𝑐ℎ𝑒: ${dmt}
└──────────────`);
};
handler.command = ['añadirdiamantes', 'addd', 'dard', 'dardiamantes'];
handler.rowner = true;
export default handler;
