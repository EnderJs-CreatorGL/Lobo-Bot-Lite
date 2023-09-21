const handler = async (m, {conn, text, usedPrefix, command}) => {
  global.db.data.sticker = global.db.data.sticker || {};
  if (!m.quoted) throw '[❗] 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐚 𝐚𝐥 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐨 𝐩𝐚𝐥𝐚𝐛𝐫𝐚 𝐩𝐚𝐫𝐚 𝐚𝐠𝐫𝐞𝐠𝐚𝐫';
  if (!m.quoted.fileSha256) throw '[❗] 𝐒𝐨𝐥𝐨 𝐩𝐮𝐞𝐝𝐨 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐨 𝐢𝐦𝐚𝐠𝐞𝐧';
  if (!text) throw `[❗] 𝐌𝐚𝐥 𝐮𝐬𝐚𝐝𝐨 !\n\n𝐔𝐬𝐮 𝐝𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨:\n*—◉ ${usedPrefix + command} <texto> <responder a sticker o imagen>\n\n𝐄𝐣𝐞𝐦𝐩𝐥𝐨 𝐝𝐞𝐥 𝐮𝐬𝐨:\n*—◉ ${usedPrefix + command} <#menu> <responder a sticker o imagen>`;
  const sticker = global.db.data.sticker;
  const hash = m.quoted.fileSha256.toString('base64');
  if (sticker[hash] && sticker[hash].locked) throw '[❗] 𝐒𝐨𝐥𝐨 𝐞𝐥 𝐨𝐰𝐧𝐞𝐫 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨';
  sticker[hash] = {text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false};
  m.reply(`[ ✒️ ] 𝐏𝐞𝐫𝐟𝐞𝐜𝐭𝐨, 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐞 𝐠𝐮𝐚𝐫𝐝𝐨 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐚𝐦𝐞𝐧𝐭𝐞`);
};
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset'];
handler.rowner = true;
export default handler;
