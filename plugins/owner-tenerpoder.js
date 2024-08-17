const handler = async (m, {conn, isAdmin, groupMetadata }) => {
  if (isAdmin) return m.reply('🔰 *¡Tu ya eres adm jefe!*');
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  await m.react(done)
   m.reply('🔰 *¡Listo jefe ya eres adm!*');
    let nn = conn.getName(m.sender);
  } catch {
    m.reply('💠 Ocurrio un error.');
  }
};
handler.tags = ['owner', 'gc'];
handler.help = ['tenerpoder'];
handler.command = ['tenerpoder', 'autoadmin'];
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;