const handler = async (m, {conn, text, command, usedPrefix}) => {
  if (m.mentionedJid.includes(conn.user.jid)) return;
  const pp = './src/warn.jpg';
  let who;
  if (m.isGroup) {
    who = m.mentionedJid[0] ?
      m.mentionedJid[0] :
      m.quoted ?
      m.quoted.sender :
      text;
  } else who = m.chat;
  const user = global.db.data.users[who];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const dReason = 'Sin motivo';
  const msgtext = text || dReason;
  const sdms = msgtext.replace(/@\d+-?\d* /g, '');
  const warntext = `[🌹] 𝑅𝑒𝑠𝑝𝑜𝑛𝑑𝑒 𝑎𝑙 𝑢𝑠𝑢𝑎𝑟𝑖𝑜 𝑝𝑎𝑟𝑎 𝑒𝑗𝑒𝑐𝑢𝑡𝑎𝑟 𝑒𝑙 𝑐𝑜𝑚𝑎𝑛𝑑𝑜\n\n—◉ 𝐸𝑗𝑒𝑚𝑝𝑙𝑜:\n*${
    usedPrefix + command
  } @${global.suittag}*`;
  if (!who) {
    throw m.reply(warntext, m.chat, {mentions: conn.parseMention(warntext)});
  }
  user.warn += 1;
  await m.reply(
      `${
      user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`
      }[🌹] 𝐴𝑑𝑣𝑒𝑟𝑡𝑒𝑛𝑐𝑖𝑎 !\n𝑀𝑜𝑡𝑖𝑣𝑜: ${sdms}\n𝐴𝑑𝑣𝑒𝑟𝑡𝑒𝑛𝑐𝑖𝑎𝑠 ${
        user.warn
      }/3`,
      null,
      {mentions: [who]},
  );
  if (user.warn >= 3) {
    if (!bot.restrict) {
      return m.reply(
          '[🌹] 𝐴𝑐𝑡𝑖𝑣𝑎 𝑒𝑙 𝑡𝑟𝑢𝑒 𝑟𝑒𝑠𝑡𝑟𝑖𝑐𝑡 𝑝𝑟𝑖𝑚𝑒𝑟𝑜.',
      );
    }
    user.warn = 0;
    await m.reply(
        `𝐿𝑖𝑚𝑖𝑡𝑒 𝑎𝑙𝑐𝑎𝑛𝑧𝑎𝑑𝑜!!\n*@${
          who.split`@`[0]
        }* 𝑌𝑎 𝑠𝑢𝑝𝑒𝑟𝑎𝑠𝑡𝑒𝑠 𝑙𝑎𝑠 𝑎𝑑𝑣𝑒𝑟𝑡𝑒𝑛𝑐𝑖𝑎𝑠, 𝐼𝑛𝑖𝑐𝑖𝑎𝑛𝑑𝑜 𝑒𝑗𝑒𝑐𝑢𝑐𝑖𝑜𝑛 𝑑𝑒 𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑐𝑖𝑜𝑛. 🌹`,
        null,
        {mentions: [who]},
    );
    await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
  }
  return !1;
};

handler.command = /^(advertir|advertencia|warn|warning)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
