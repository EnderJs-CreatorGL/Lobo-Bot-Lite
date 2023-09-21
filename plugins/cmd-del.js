const handler = async (m, {conn, usedPrefix, text, command}) => {
  let hash = text;
  if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex');
  if (!hash) throw `[❗] 𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚𝐥 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐨 𝐢𝐦𝐚𝐠𝐞𝐧 𝐩𝐫𝐢𝐦𝐞𝐫𝐨, 𝐏𝐚𝐫𝐚 𝐨𝐛𝐭𝐞𝐧𝐞𝐫 𝐞𝐥 𝐜𝐨𝐝𝐞 𝐚𝐬𝐢𝐠𝐧𝐚𝐝𝐨 𝐮𝐬𝐞 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${usedPrefix}listcmd*`;
  const sticker = global.db.data.sticker;
  if (sticker[hash] && sticker[hash].locked) throw '[❗] 𝐒𝐨𝐥𝐨 𝐞𝐥 𝐨𝐰𝐧𝐞𝐫 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫';
  delete sticker[hash];
  m.reply(`[ ✒️ ] 𝐏𝐞𝐫𝐟𝐞𝐜𝐭𝐨, 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐞𝐥𝐢𝐦𝐢𝐧𝐚𝐝𝐨 𝐞𝐱𝐢𝐭𝐨𝐬𝐚𝐦𝐞𝐧𝐭𝐞`);
};
handler.command = ['delcmd'];
handler.rowner = true;
export default handler;
