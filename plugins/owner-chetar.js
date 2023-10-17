const handler = async (m, { conn }) => {
    const user = global.db.data.users[m.sender];
        conn.sendMessage(m.chat, {text: `[🍬] @${m.sender.split('@')[0]} 𝗢𝘄𝗻𝗲𝗿 𝗮𝗵𝗼𝗿𝗮 𝘁𝗼𝗱𝗼 𝗲𝘀 𝗶𝗹𝗶𝗺𝗶𝘁𝗮𝗱𝗼, 𝘀𝗶𝗶𝗶𝗶.`, mentions: [m.sender]}, {quoted: m});
      global.db.data.users[m.sender].money = Infinity;
    global.db.data.users[m.sender].limit = Infinity;
  global.db.data.users[m.sender].level = Infinity;
 global.db.data.users[m.sender].exp = Infinity;
};
handler.help = ['cheat'];
handler.tags = ['owner'];
handler.command = /^(infinito|chetar)$/i;
handler.rowner = true;
handler.fail = null;
export default handler;
