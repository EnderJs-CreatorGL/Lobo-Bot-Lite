const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`;
  let teks = `©sᴏʟɪᴄɪᴛᴀɴᴅᴏ ʟᴀ ᴘʀᴇsᴇɴᴄɪᴀ ɢʀᴜᴘᴀʟ ®\n\n➪ ${oi}\n\n➪ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`;
  for (const mem of participants) {
    teks += `┣§ @${mem.id.split('@')[0]}\n`;
  }
  teks += `└ ™𝘓𝘰𝘣𝘰-𝘉𝘰𝘵-𝘓𝘪𝘵𝘦🐈🌻™\n\n▌│█║▌║▌║║▌║▌║▌║█`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|llamar|todos|vengan)$/i;
handler.admin = true;
handler.group = true;
export default handler;
