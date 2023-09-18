const handler = async (m, {conn, text, command}) => {
  const id = text ? text : m.chat;
  await conn.reply(id, '𝐇𝐀𝐂𝐇𝐈𝐊𝐎 𝐀𝐁𝐀𝐍𝐃𝐎𝐍𝐀 𝐄𝐋 𝐆𝐑𝐔𝐏𝐎b𝐀𝐒𝐓𝐀 𝐏𝐑𝐎𝐍𝐓𝐎 👋');
  await conn.groupLeave(id);
};
handler.command = /^(out|leavegc|leave|salirdelgrupo)$/i;
handler.group = true;
handler.rowner = true;
export default handler;
