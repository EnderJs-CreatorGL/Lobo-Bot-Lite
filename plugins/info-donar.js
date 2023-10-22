/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import fs from 'fs';
const handler = async (m, {conn, usedPrefix, command}) => {
  const name = await conn.getName(m.sender);
  const donar =`
┏ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━
┇          「 𝑨𝑷𝑶𝒀𝑨𝑹 」
┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━
┃ ¿ 𝙷𝙾𝙻𝙰 𝙲𝙾𝙼𝙾 𝙴𝚂𝚃𝙰𝚂 ? ${name}
┃
┃𝙿𝚄𝙴𝙳𝙴𝚂 𝙰𝙿𝙾𝚈𝙰𝚁 𝙴𝙻 𝙿𝚁𝙾𝚈𝙴𝙲𝚃𝙾 𝙳𝙴 
┃ (𝙻𝙾𝙱𝙾-𝙱𝙾𝚃-𝙼𝙳) 𝙳𝙾𝙽𝙰𝙽𝙳𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 
┃𝙿𝙰𝚁𝙰 𝙴𝙹𝙴𝙲𝚄𝚃𝙰𝚁 𝙴𝙻 𝙱𝙾𝚃, 𝙿𝚄𝙴𝙳𝙴𝚂 𝙳𝙾𝙽𝙰𝚁𝙻𝙾
┃ 𝙰𝙻 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝚁 𝙲𝙾𝙽 : wa.me/50558124470
┗ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━
`.trim();
  const aa = {quoted: m, userJid: conn.user.jid};
  const res = generateWAMessageFromContent(m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: '0', contextInfo: {mentionedJid: conn.parseMention()}}}, aa);
  conn.relayMessage(m.chat, res.message, {});
};
handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^dona(te|si)|donar|apoyar$/i;
export default handler;
