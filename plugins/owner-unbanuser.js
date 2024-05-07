const handler = async (m, {conn, text}) => {
  if (!text) throw '[⛔] 𝐎𝐰𝐧𝐞𝐫, 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐞 𝐚𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐩𝐚𝐫𝐚 𝐝𝐞𝐬𝐛𝐚𝐧𝐞𝐚𝐫.';
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '[⛔] 𝐎𝐰𝐧𝐞𝐫, 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐞 𝐚𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐩𝐚𝐫𝐚 𝐝𝐞𝐬𝐛𝐚𝐧𝐞𝐚𝐫.';
  const users = global.db.data.users;
  users[who].banned = false;
  conn.reply(m.chat, `[💖] 𝐏𝐞𝐫𝐟𝐞𝐜𝐭𝐨, 𝐞𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐟𝐮𝐞 𝐝𝐞𝐬𝐛𝐚𝐧𝐞𝐚𝐝𝐨 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨, 𝐞𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐲𝐚 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐿𝑜𝑏𝑜-𝐵𝑜𝑡-𝐿𝑖𝑡𝑒🐈🌻.`, m);
};
handler.help = ['unbanuser'];
handler.tags = ['owner'];
handler.command = /^desprohibiruser|duser$/i;
handler.rowner = true;
export default handler;
