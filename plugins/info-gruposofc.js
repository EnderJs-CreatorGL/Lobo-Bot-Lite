const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `𝐇𝐨𝐥𝐚 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 👋, 𝐓𝐞 𝐢𝐧𝐯𝐢𝐭𝐨 𝐚 𝐮𝐧𝐢𝐫𝐭𝐞 𝐚 𝐥𝐨𝐬 𝐠𝐫𝐮𝐩𝐨𝐬 𝐎𝐅𝐂 𝐝𝐞 🌹ʟᴏʙᴏ-ʙᴏᴛ-ʟɪᴛᴇ🌹 :D

➤ 𝐆𝐫𝐮𝐩𝐨𝐬 𝐨𝐟𝐢𝐜𝐢𝐚𝐥𝐞𝐬 𝐝𝐞𝐥 𝐋𝐨𝐛𝐨:

🌹 𝗚𝗿𝘂𝗽𝗼 𝗟𝗼𝗯𝗼𝗕𝗼𝘁
 
༄ ${gp1} ༆

🌹 𝗖𝗮𝗻𝗮𝗹 𝗟𝗼𝗯𝗼𝗕𝗼𝘁
༄ ${gp2} ༄

🌹 𝗖𝗮𝗻𝗮𝗹 𝗖𝗼𝗺𝘂𝗻𝗶𝘁𝘆 𝗕𝗼𝘁𝘀
༄ ${channel2} ༄
`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/Ender-GB-Isis777/Lobo-Bot-Lite`},
    'mimetype': `application/${document}`,
    'fileName': `「 ᴡʜᴀᴛsᴘᴘ-ʙᴏᴛ 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': global.md,
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'ʟᴏʙᴏ-ʙᴏᴛ-ʟɪᴛᴇ ᴄʜʀᴏɴᴏ🥳',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'global.md'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
