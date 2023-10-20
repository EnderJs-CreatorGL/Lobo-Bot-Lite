let handler = (m) => m;
handler.all = async function (m) {
  

  if (/^Endergb|GB|gb|ender|Ender|ENDER$/i.test(m.text)) {
    var GB = `ᴏᴡɴᴇʀ  @${global.suittag} ᴛᴇ ᴀ ɪɴᴠᴏᴄᴀᴅᴏ`;

    m.reply(GB, m.chat, { mentions: conn.parseMention(GB)});
    //sem prefixo
    /*conn.reply(
      m.chat,
      `ᴏᴡɴᴇʀ @${global.suittag} ᴛᴇ ᴀ ɪɴᴠᴏᴄᴀᴅᴏ`,
      m
    );*/ //wm, null, [['Menu', '#menu']], m) botones :V
  }
  return !0;
};
export default handler;
