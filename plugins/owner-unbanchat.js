const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('[💖]𝐶ℎ𝑎𝑡 𝑑𝑒𝑠𝑝𝑟𝑜ℎ𝑖𝑏𝑖𝑑𝑜 𝑐𝑜𝑛 𝑒𝑥𝑖𝑡𝑜, 𝑦𝑎 𝑝𝑢𝑒𝑑𝑒𝑛 𝑢𝑠𝑎𝑟 𝐿𝑜𝑏𝑜-𝐵𝑜𝑡-𝐿𝑖𝑡𝑒🐈🌻');
};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^desprohibirchat|dschat$/i;
handler.rowner = true;
export default handler;
