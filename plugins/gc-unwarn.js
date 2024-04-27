const handler = async (m, {conn, text, command, usedPrefix}) => {
  const pp = './src/warn.jpg';
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
  else who = m.chat;
  const user = global.db.data.users[who];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const warntext = `[🌹] ᴍᴇɴᴄɪᴏɴᴀ ᴀ ʟᴀ ᴘᴇʀsᴏɴᴀ\n\n—◉ ᴇᴊᴇᴍᴘʟᴏ:\n*${usedPrefix + command} @${global.suittag}*`;
  if (!who) throw m.reply(warntext, m.chat, {mentions: conn.parseMention(warntext)});
  if (m.mentionedJid.includes(conn.user.jid)) return;
  if (user.warn == 0) throw '[📍] ᴇʟ ᴜsᴜᴀʀɪᴏ ᴛɪᴇɴᴇ 0 ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀs';
  user.warn -= 1;
  await m.reply(`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `✔️ *@${who.split`@`[0]}*`} 𝑆𝑒 𝑙𝑒 𝑒𝑙𝑖𝑚𝑖𝑛𝑜 𝑢𝑛𝑎 𝑎𝑑𝑣𝑒𝑟𝑡𝑒𝑛𝑐𝑖𝑎 /n𝐴𝑑𝑣𝑒𝑟𝑡𝑒𝑛𝑐𝑖𝑎𝑠${user.warn}/3*`, null, {mentions: [who]});
};
handler.command = /^(unwarn|delwarn|deladvertir|deladvertencia|delwarning)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
