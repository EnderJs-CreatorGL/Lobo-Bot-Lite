const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('[⛔] 𝗖𝗵𝗮𝘁 𝗯𝗮𝗻𝗲𝗮𝗱𝗼 𝗰𝗼𝗻 𝗲𝘅𝗶𝘁𝗼\n\n—◉ 𝗻𝗼 𝗽𝗼𝗱𝗿𝗮𝗻 𝘂𝘀𝗮𝗿 𝗟𝗢𝗕𝗢-𝗕𝗢𝗧-𝗠𝗗');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^banchat$/i;
handler.rowner = true;
export default handler;
