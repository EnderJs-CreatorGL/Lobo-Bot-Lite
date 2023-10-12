let handler = (m) => m;
handler.all = async function (m) {
  

  if (/^HacheJota|GB|gb|Ender|ender|ENDER$/i.test(m.text)) {
    var hj = `OWNER @${global.suittag} 𝚄𝙽 𝙷𝚄𝙼𝙰𝙽𝙾 𝚃𝙴 𝙰 𝙸𝙽𝚅𝙾𝙲𝙰𝙳𝙾`;

    m.reply(hj, m.chat, { mentions: conn.parseMention(hj)});
    //sem prefixo
    /*conn.reply(
      m.chat,
      `OWNER @${global.suittag} 𝚄𝙽 𝙷𝚄𝙼𝙰𝙽𝙾 𝚃𝙴 𝙰 𝙸𝙽𝚅𝙾𝙲𝙰𝙳𝙾`,
      m
    );*/ //wm, null, [['Menu', '#menu']], m) botones :V
  }
  return !0;
};
export default handler;
