const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text;
    m.reply('[🧸] 𝗠𝗲𝗻𝘀𝗮𝗷𝗲 𝗰𝗼𝗻𝗳𝗶𝗴𝘂𝗿𝗮𝗱𝗼 𝗲𝘅𝗶𝘁𝗼');
  } else throw `[❗] 𝗜𝗻𝗴𝗿𝗲𝘀𝗮 𝗲𝗹 𝗺𝗲𝗻𝘀𝗮𝗷𝗲 𝗱𝗲 𝗯𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗮 𝗽𝗿𝗶𝗺𝗲𝗿𝗼, 𝘂𝘀𝗲:\n*- @user (mención)*\n*- @group (nombre de grupo)*\n*- @desc (description de grupo)*`;
};
handler.help = ['setwelcome <text>'];
handler.tags = ['group'];
handler.command = ['setwelcome'];
handler.admin = true;
export default handler;
