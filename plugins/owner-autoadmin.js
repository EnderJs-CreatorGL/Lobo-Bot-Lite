/* Creditos a https://github.com/unptoadrih15/UPABOT-MD */

const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) return;
  if (isAdmin) throw '[💻] 𝐎𝐰𝐧𝐞𝐫, 𝐔𝐬𝐭𝐞𝐝 𝐲𝐚 𝐞𝐬 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫 𝐝𝐞 𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨 𝐬𝐢𝐢𝐢.';
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await m.reply('[❗] 𝐈𝐦𝐩𝐨𝐬𝐢𝐛𝐥𝐞 𝐝𝐚𝐫𝐥𝐞 𝐩𝐨𝐝𝐞𝐫 𝐞𝐧 𝐞𝐥 𝐠𝐫𝐮𝐩𝐨');
  }
};
handler.command = /^autoadmin$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
