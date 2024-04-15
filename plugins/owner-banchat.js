const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('[🌼]𝗖𝗵𝗮𝘁 𝗯𝗮𝗻𝗲𝗮𝗱𝗼 𝗰𝗼𝗻 𝗲𝘅𝗶𝘁𝗼,𝗻𝗼 𝗽𝗼𝗱𝗿𝗮𝗻 𝘂𝘀𝗮𝗿 ʟᴏʙᴏ-ʙᴏᴛ-ʟɪᴛᴇ🥀');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^prohibirchat$/i;
handler.rowner = true;
export default handler;
