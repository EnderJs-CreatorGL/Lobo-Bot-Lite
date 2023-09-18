import {spawn} from 'child_process';
const handler = async (m, {conn, isROwner, text}) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js';
  if (conn.user.jid == conn.user.jid) {
    // conn.readMessages([m.key])
    await m.reply('🔄 𝚁𝙴𝙸𝙽𝙸𝙲𝙸𝙰𝙽𝙳𝙾 𝙰 𝙷𝙰𝙲𝙷𝙸𝙺𝙾-𝙱𝙾𝚃\n 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁𝙵𝚂𝚅𝙾𝚁');
    process.send('reset');
  } else throw 'eh';
};
handler.help = ['restart'];
handler.tags = ['owner'];
handler.command = ['restart', 'reiniciar'];
handler.rowner = true;
export default handler;
