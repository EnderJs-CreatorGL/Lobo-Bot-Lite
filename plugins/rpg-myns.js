import {createHash} from 'crypto';
const handler = async function(m, {conn, text, usedPrefix}) {
  const sn = createHash('md5').update(m.sender).digest('hex');
  m.reply(`┏┅ ━━━━━━━━━━━━ ☆┅☆ ━
┃ 𝗡𝘂𝗺𝗲𝗿𝗼 𝗱𝗲 𝗿𝗲𝘀𝗴𝗶𝘀𝘁𝗿𝗼🪁: 
┃ ${sn}
┗┅✦ ━━━━━━━━━━━━ ┅ ━`.trim());
};
handler.help = ['myns'];
handler.tags = ['xp'];
handler.command = /^(myns|seriedata)$/i;
handler.register = true;
export default handler;
