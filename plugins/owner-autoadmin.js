/* Creditos a https://github.com/unptoadrih15/UPABOT-MD */

const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) return;
  if (isAdmin) throw '[💖] 𝐎𝐖𝐍𝐄𝐑, 𝐔𝐒𝐓𝐄𝐃 𝐘𝐀 𝐄𝐒 𝐀𝐃𝐌𝐈𝐍 𝐃𝐄 𝐄𝐒𝐓𝐄 𝐆𝐑𝐔𝐏𝐎🌷.';
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await m.reply('[🥀] 𝐋𝐎 𝐒𝐈𝐄𝐍𝐓𝐎, 𝐍𝐎 𝐅𝐔𝐈 𝐂𝐀𝐏𝐀𝐙 𝐃𝐄 𝐃𝐀𝐑𝐋𝐄 𝐀𝐃𝐌𝐈𝐍🍂');
  }
};
handler.command = /^autoadmin$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
