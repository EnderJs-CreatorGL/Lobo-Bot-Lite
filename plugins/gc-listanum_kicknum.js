
const handler = async (m, {conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin}) => {
  if (!args[0]) return m.reply(`[🌹] ʙᴜsᴄᴀ ᴇʟ ᴘʀᴇғɪᴊᴏ ᴅᴇ sᴜ ᴘᴀɪs:ᴇᴊᴇᴍᴘʟᴏ: ${usedPrefix + command} 52`);
  if (isNaN(args[0])) return m.reply(`[🌹] ɪɴɢʀᴇsᴀ ᴇʟ ᴘʀᴇғɪᴊᴏ ᴅᴇʟ ᴘᴀɪs:ᴇᴊᴇᴍᴘʟᴏ: ${usedPrefix + command} 52`);
  const lol = args[0].replace(/[+]/g, '');
  const ps = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol));
  const bot = global.db.data.settings[conn.user.jid] || {};
  if (ps == '') return m.reply(`[🌹] ɴᴏ sᴇ ᴇɴᴄᴏɴᴛʀᴏ ɴᴀᴅɪᴇ ᴄᴏɴ ᴛᴀʟ ɴᴜᴍᴇʀᴏ +${lol}`);
  const numeros = ps.map((v)=> '⭔ @' + v.replace(/@.+/, ''));
  const delay = (time) => new Promise((res)=>setTimeout(res, time));
  switch (command) {
    case 'listanum':
      conn.reply(m.chat, `ʟɪsᴛᴀ +${lol} ǫᴜᴇ ᴇsᴛᴀɴ ᴇɴ ᴇsᴛᴇ ɢʀᴜᴘᴏ:\n\n` + numeros.join`\n`, m, {mentions: ps});
      break;
    case 'kicknum':
      if (!bot.restrict) return m.reply('[🌹] ᴀᴄᴛɪᴠᴀ ᴇʟ ʀᴇsᴛʀɪɴɢɪʀ ᴘʀɪᴍᴇʀᴏ');
      if (!isBotAdmin) return m.reply('[🌹] ɴᴏ sᴏʏ ᴀᴅᴍɪɴ , ɴᴏ ᴘᴜᴇᴅᴏ ᴇᴊᴇᴄᴜᴛᴀʀ ʟᴀ ᴀᴄᴄɪᴏɴ.');
      conn.reply(m.chat, `[🌹] ᴇɴᴄᴏɴᴛʀᴀᴅᴏs, ᴇᴊᴇᴄᴜᴛᴀɴᴅᴏ ᴀᴄᴄɪᴏɴ ᴄᴀᴅᴀ 10 sᴇɢᴜɴᴅᴏs.`, m);
      const ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net';
      const users = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol));
      for (const user of users) {
        const error = `@${user.split('@')[0]} ʏᴀ ʜᴀ sɪᴅᴏ ᴇʟɪᴍɪɴᴀᴅᴏ ᴏ ʜᴀ ᴀʙᴀɴᴅᴏɴᴀᴅᴏ ᴇʟ ɢʀᴜᴘᴏ*`;
        if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) {
          await delay(2000);
          const responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
          if (responseb[0].status === '404') m.reply(error, m.chat, {mentions: conn.parseMention(error)});
          await delay(10000);
        } else return m.reply('*[❗] 𝙴𝚁𝚁𝙾𝚁*');
      }
      break;
  }
};
handler.command = /^(listanum|kicknum)$/i;
handler.group = handler.botAdmin = handler.admin = true;
handler.fail = null;
export default handler;
