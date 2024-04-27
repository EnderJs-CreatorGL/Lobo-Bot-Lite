const handler = async (m, {conn, participants, usedPrefix, command}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '[🌹] 𝗔𝗰𝘁𝗶𝘃𝗮 𝗲𝗹 𝗧𝗿𝘂𝗲 𝗿𝗲𝘀𝘁𝗿𝗶𝗰𝘁 𝗽𝗿𝗶𝗺𝗲𝗿𝗼.';
  const kicktext = `[🌹] 𝗞𝗶𝗰𝗸2 𝗮 𝗤𝘂𝗶𝗲𝗻 𝗲𝗹𝗶𝗺𝗶𝗻𝗼?\n\n*—◉ 𝗘𝗷𝗲𝗺𝗽𝗹𝗼:*\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
  if (m.mentionedJid.includes(conn.user.jid)) return;
  const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  const owr = m.chat.split`-`[0];
  await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
};
handler.command = /^(kick2|echar2|hechar2|sacar2)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
