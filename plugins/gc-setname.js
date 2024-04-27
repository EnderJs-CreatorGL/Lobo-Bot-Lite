import Presence from '@whiskeysockets/baileys';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw `[🧸] ɴᴏᴍʙʀᴇ ᴀ ᴇᴊᴇᴄᴜᴛᴀʀ.`;
  try {
    const text = args.join` `;
    if (!args || !args[0]) {
    } else {
      conn.groupUpdateSubject(m.chat, text);
    }
  } catch (e) {
    throw '[🌹] ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ, ᴍᴀs ᴅᴇ 25 ᴄᴀʀᴀᴄᴛᴇʀᴇs.';
  }
};
handler.help = ['setname <text>'];
handler.tags = ['group'];
handler.command = /^(setname)$/i;
handler.group = true;
handler.admin = true;
export default handler;
