const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('[🌼]𝐶ℎ𝑎𝑡 𝑝𝑟𝑜ℎ𝑖𝑏𝑖𝑑𝑜 𝑐𝑜𝑛 𝑒𝑥𝑖𝑡𝑜,𝑌𝑎 𝑛𝑜 𝑝𝑢𝑒𝑑𝑒𝑛 𝑢𝑠𝑎𝑟 𝐿𝑜𝑏𝑜-𝐵𝑜𝑡-𝐿𝑖𝑡𝑒🐈🌻');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^prohibirchat|pschat$/i;
handler.rowner = true;
export default handler;
