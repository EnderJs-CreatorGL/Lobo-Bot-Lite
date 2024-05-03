const handler = async (m, {conn, text, command}) => {
  const id = text ? text : m.chat;
  await conn.reply(id, '•𝐹𝑢𝑒 𝑢𝑛 𝑔𝑢𝑠𝑡𝑜 𝑒𝑠𝑡𝑎𝑟 𝑎𝑞𝑢𝑖, 𝐴𝑠𝑡𝑎 𝑝𝑟𝑜𝑛𝑡𝑜 𝐵𝑦 𝐿𝑜𝑏𝑜-𝐵𝑜𝑡-𝐿𝑖𝑡𝑒🐈🌻');
  await conn.groupLeave(id);
};
handler.command = /^(abandonar|autokick|grupoban)$/i;
handler.group = true;
handler.rowner = true;
export default handler;
