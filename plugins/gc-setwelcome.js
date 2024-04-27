const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text;
    m.reply('[🎭] 𝑀𝑒𝑛𝑠𝑎𝑗𝑒 𝑝𝑢𝑒𝑠𝑡𝑜 𝑝𝑒𝑟𝑓𝑒𝑐𝑡𝑎𝑚𝑒𝑛𝑡𝑒');
  } else throw `[🪁] 𝐸𝑠𝑐𝑟𝑖𝑏𝑒 𝑒𝑙 𝑚𝑒𝑛𝑠𝑎𝑗𝑒 𝑝𝑟𝑖𝑚𝑒𝑟𝑜, 𝑢𝑠𝑒:\n*- @user (mención)*\n*- @group (nombre de grupo)*\n*- @desc (description de grupo)*`;
};
handler.help = ['setwelcome <text>'];
handler.tags = ['group'];
handler.command = ['setwelcome'];
handler.admin = true;
export default handler;
