const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text;
    m.reply('[🎭] 𝑀𝑒𝑛𝑠𝑎𝑗𝑒 𝑃𝑢𝑒𝑠𝑡𝑜 𝑝𝑒𝑟𝑓𝑒𝑐𝑡𝑎𝑚𝑒𝑛𝑡𝑒.');
  } else throw `[🪁]𝐼𝑛𝑔𝑟𝑒𝑠𝑎 𝑒𝑙 𝑚𝑒𝑛𝑠𝑎𝑗𝑒 𝑝𝑟𝑖𝑚𝑒𝑟𝑜\n*- @user (mención)*`;
};
handler.help = ['setbye <text>'];
handler.tags = ['group'];
handler.command = ['setbye'];
handler.admin = true;
export default handler;
