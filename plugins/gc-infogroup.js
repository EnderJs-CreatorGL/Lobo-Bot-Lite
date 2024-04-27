const handler = async (m, {conn, participants, groupMetadata}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const {antiToxic, antiTraba, antidelete, antiviewonce, isBanned, welcome, detect, detect2, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del} = global.db.data.chats[m.chat];
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const text = `*「 𝐼𝑛𝑓𝑜𝑟𝑚𝑎𝑐𝑖𝑜𝑛 𝐺𝑟𝑢𝑝𝑎𝑙 」*\n
*📍𝙸𝙳𝙴𝙽𝚃𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾:* 
${groupMetadata.id}

*𝙽𝙾𝙼𝙱𝚁𝙴:* 
${groupMetadata.subject}

*📍𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* 
${groupMetadata.desc?.toString() || '𝚂𝙸𝙽 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽'}

*📍𝚃𝙾𝚃𝙰𝙻 𝙳𝙴 𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴𝚂:*
${participants.length} Participantes

*📍𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾:* 
@${owner.split('@')[0]}

*📍𝙰𝙳𝙼𝙸𝙽𝚂 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾:*
${listAdmin}

📍ᴏᴘᴄɪᴘɴᴇs ɢʀᴜᴘᴀʟᴇs📍
 𝑊𝑒𝑙𝑐𝑜𝑚𝑒: ${welcome ? '𝗦𝗶' : '𝗡𝗼'}
 𝐷𝑒𝑡𝑒𝑐𝑡𝑎𝑟1: ${detect ? '𝗦𝗶' : '𝗡𝗼'} 
 𝐷𝑒𝑡𝑒𝑐𝑡𝑎𝑟2: ${detect2 ? '𝗦𝗶' : '𝗡𝗼'} 
 𝐴𝑛𝑡𝑖𝑙𝑖𝑛𝑘1: ${antiLink ? '𝗦𝗶' : '𝗡𝗼'} 
 𝐴𝑛𝑡𝑖𝑙𝑖𝑛𝑘2: ${antiLink2 ? '𝗦𝗶' : '𝗡𝗼'} 
 𝑀𝑜𝑑𝑜 𝐻𝑜𝑟𝑛𝑦: ${modohorny ? '𝗦𝗶' : '𝗡𝗼'} 
 𝐴𝑢𝑡𝑜𝑠𝑡𝑖𝑐𝑘𝑒𝑟𝑠: ${autosticker ? '𝗦𝗶' : '𝗡𝗼'} 
 𝐴𝑢𝑑𝑖𝑜𝑠: ${audios ? '𝗦𝗶' : '𝗡𝗼'} 
 𝐴𝑛𝑡𝑖𝑣𝑖𝑒𝑤𝑜𝑛𝑐𝑒: ${antiviewonce ? '𝗦𝗶' : '𝗡𝗼'} 
 𝐴𝑛𝑡𝑖𝑑𝑒𝑙𝑒𝑡𝑒: ${antidelete ? '𝗦𝗶' : '𝗡𝗼'} 
 𝐴𝑛𝑡𝑖𝑡𝑜𝑥𝑖𝑐𝑜: ${antiToxic ? '𝗦𝗶' : '𝗡𝗼'} 
 𝐴𝑛𝑡𝑖𝑡𝑟𝑎𝑏𝑎: ${antiTraba ? '𝗦𝗶' : '𝗡𝗼'} 
 𝑀𝑜𝑑𝑜𝑎𝑑𝑚𝑖𝑛: ${modoadmin ? '𝗦𝗶' : '𝗡𝗼'} 
`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['infogrup'];
handler.tags = ['group'];
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i;
handler.group = true;
export default handler;
