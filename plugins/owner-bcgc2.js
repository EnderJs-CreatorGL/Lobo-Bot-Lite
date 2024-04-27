const handler = async (m, {conn, text, participants, isAdmin, isOwner, usedPrefix, command}) => {
  const users = participants.map((u) => u.id).filter((v) => v !== conn.user.jid);
  const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map((v) => v[0]);
  const fproducto = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? {remoteJid: '17608914335@s.whatsapp.net'} : {})}, message: {'productMessage': {'product': {'productImage': {'mimetype': 'image/jpeg', 'jpegThumbnail': imagen1}, 'title': `ᴄᴏᴍᴜɴɪᴄᴀᴅᴏ ᴏғɪᴄɪᴀʟ ᴀ ɢʀᴜᴘᴏs`, 'description': 'ʙʏ ʜᴀᴄʜɪᴋᴏ ﹣ ʙᴏᴛ', 'currencyCode': 'USD', 'priceAmount1000': '1000000000', 'retailerId': 'Ghost', 'productImageCount': 1}, 'businessOwnerJid': `0@s.whatsapp.net`}}};
  if (!m.quoted) throw `Responde un mensaje con el comando *${usedPrefix + command}* para mandar el aviso.`;
  for (const id of groups) {
    await conn.sendMessage(id, {forward: m.quoted.fakeObj, mentions: (await conn.groupMetadata(`${id}`)).participants.map((v) => v.id)}, {quoted: fproducto});
  }
  m.reply(`[🌹] ᴇᴊᴇᴄᴜᴛᴇ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ ᴀ ʟᴀ ᴘᴇʀғᴇᴄᴄɪᴏɴ ${groups.length} ɢʀᴜᴘᴏs ᴛᴏᴛᴀʟᴇs`);
};
handler.help = ['bcgc2'];
handler.tags = ['owner'];
handler.command = /^(bcgc2)$/i;
handler.owner = true;
export default handler;
