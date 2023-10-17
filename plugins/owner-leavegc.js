const handler = async (m, {conn, text, command}) => {
  const id = text ? text : m.chat;
  await conn.reply(id, '𝗟𝗢𝗕𝗢-𝗕𝗢𝗧-𝗠𝗗 𝗦𝗘 𝗗𝗘𝗦𝗣𝗜𝗗𝗘 𝗔𝗦𝗧𝗔 𝗟𝗨𝗘𝗚𝗢 Ｏ(≧∇≦)Ｏ 👋');
  await conn.groupLeave(id);
};
handler.command = /^(salir|abandonar|autokick|grupoban)$/i;
handler.group = true;
handler.rowner = true;
export default handler;
