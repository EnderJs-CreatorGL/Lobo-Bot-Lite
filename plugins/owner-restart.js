import {spawn} from 'child_process';
const handler = async (m, {conn, isROwner, text}) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js';
  if (conn.user.jid == conn.user.jid) {
    // conn.readMessages([m.key])
    await m.reply('[🐺] 𝗠𝗲 𝗲𝘀𝘁𝗼𝘆 𝗿𝗲𝗶𝗻𝗶𝗰𝗶𝗮𝗻𝗱𝗼,𝗲𝘀𝗽𝗲𝗿𝗲 𝘂𝗻𝗼𝘀 𝘀𝗲𝗴𝘂𝗻𝗱𝗼𝘀 𝗽𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 ... ');
    process.send('reset');
  } else throw 'eh';
};
handler.help = ['restart'];
handler.tags = ['owner'];
handler.command = ['restart', 'reiniciar'];
handler.rowner = true;
export default handler;
