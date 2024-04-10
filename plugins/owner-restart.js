import {spawn} from 'child_process';
const handler = async (m, {conn, isROwner, text}) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js';
  if (conn.user.jid == conn.user.jid) {
    // conn.readMessages([m.key])
    await m.reply('[🌹] 𝗘𝗷𝗲𝗰𝘂𝘁𝗮𝗻𝗱𝗼 𝗢𝗿𝗱𝗲𝗻 𝗲𝘀𝗽𝗲𝗿𝗲 𝘂𝗻𝗼𝘀 𝘀𝗲𝗴𝘂𝗻𝗱𝗼𝘀 𝗟𝗼𝗯𝗼-𝗕𝗼𝘁-𝗟𝗶𝘁𝗲🌼 ... ');
    process.send('reset');
  } else throw 'eh';
};
handler.help = ['restart'];
handler.tags = ['owner'];
handler.command = ['data000', 'datos0'];
handler.rowner = true;
export default handler;
