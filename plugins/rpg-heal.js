import {join} from 'path';
import {promises} from 'fs';
const handler = async (m, {conn, args, usedPrefix, __dirname}) => {
  const imgr = flaaa.getRandom();
  const _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch((_) => ({}))) || {};
  const user = global.db.data.users[m.sender];
  if (user.health >= 100) return conn.reply(m.chat, `𝗧𝘂 𝘃𝗶𝗱𝗮 𝗲𝘀𝘁𝗮 𝗮𝗹 𝗺𝗮𝘅𝗶𝗺𝗼 ❤️*\n\n𝗦𝗮𝗹𝘂𝗱: ${user.health}`, m);
  /* conn.sendButton(m.chat, `𝗧𝘂 𝘃𝗶𝗱𝗮 𝗲𝘀𝘁𝗮 𝗮𝗹 𝗺𝗮𝘅𝗶𝗺𝗼 ❤️`, wm, imgr + `𝗦𝗮𝗹𝘂𝗱: ${user.health}`, [
[`🏕️ 𝙰𝚅𝙴𝙽𝚃𝚄𝚁𝙰𝚁`, `${usedPrefix}adventure`]], m)*/
  const heal = 40 + (user.cat * 4);
  const count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((90 - user.health) / heal)))) * 1;
  if (user.potion < count) {
    return conn.reply(m.chat, `*${htki} 𝗡𝗼 𝗵𝗮𝘆 𝗽𝗼𝗰𝗶𝗼𝗻𝗲𝘀  ${htka}\n\n𝗥𝗲𝗾𝘂𝗶𝗲𝗿𝗲𝘀 ${count - user.potion} 𝗣𝗼𝗰𝗶𝗼𝗻 🥤 𝗽𝗮𝗿𝗮 𝗰𝘂𝗿𝗮𝗿
𝗦𝗮𝗹𝘂𝗱 » ${user.health} ❤️
𝗣𝗼𝗰𝗶𝗼𝗺 » ${user.potion} 🥤
𝗖𝗼𝗺𝗽𝗿𝗮 𝗽𝗼𝗰𝗶𝗼𝗻𝗲𝘀 𝗼 𝗽𝗶𝗱𝗲 𝗮 𝗮𝗹𝗴𝘂𝗶𝗲𝗻 𝗾𝘂𝗲 𝘁𝗲 𝗱𝗼𝗻𝗲`, m);
  }
  /* conn.sendButton(m.chat,`${htki} 𝗡𝗼 𝗵𝗮𝘆 𝗽𝗼𝗰𝗶𝗼𝗻𝗲𝘀  ${htka}`,
`𝗥𝗲𝗾𝘂𝗶𝗲𝗿𝗲𝘀 ${count - user.potion} 𝗽𝗼𝗰𝗶𝗼𝗻 🥤 𝗣𝗮𝗿𝗮 𝗰𝘂𝗿𝗮𝗿
𝗦𝗮𝗹𝘂𝗱 » ${user.health} ❤️
𝗣𝗼𝗰𝗶𝗼𝗻 » ${user.potion} 🥤
𝗖𝗼𝗺𝗽𝗿𝗮 𝗽𝗼𝗰𝗶𝗼𝗻𝗲𝘀 𝗼 𝗽𝗶𝗱𝗲 𝗮 𝗮𝗹𝗴𝘂𝗶𝗲𝗻 𝗾𝘂𝗲 𝘁𝗲 𝗱𝗼𝗻𝗲`.trim(), imgr + 'POCION BAJA', [
[`𝗖𝗼𝗺𝗽𝗿𝗮 𝗱𝗲 𝗽𝗼𝗰𝗶𝗼𝗻 🥤`, `${usedPrefix}buy potion ${count - user.potion}`],
[`𝗛𝗲𝗹𝗽/𝗔𝘆𝘂𝗱𝗮 📣`, `${usedPrefix}pedirayuda 𝗔𝗹𝗴𝘂𝗶𝗲𝗻 𝗺𝗲 𝗽𝘂𝗲𝗱𝗲 𝗮𝘆𝘂𝗱𝗮𝗿 𝗰𝗼𝗻  ${count - user.potion} 𝗗𝗲 𝗽𝗼𝗰𝗶𝗼𝗻𝗲𝘀 🥤
» 𝗔𝘆𝘂𝗱𝗮 𝘁𝗿𝗮𝗻𝘀𝗳𝗶𝗿𝗶𝗲𝗻𝗱𝗼:
*${usedPrefix}transfer potion ${count - user.potion}* @${conn.getName(m.sender)}`]], m)*/
  user.potion -= count * 1; // 1 potion = count (1)
  user.health += heal * count;
  conn.reply(m.chat, `━┈━《 🔮 𝐒𝐀𝐋𝐔𝐃 𝐑𝐄𝐂𝐀𝐑𝐆𝐀𝐃𝐀 🔮》━┈━\n\n𝙴𝚇𝙸𝚃𝙾𝚂𝙰𝙼𝙴𝙽𝚃𝙴 𝚄𝚂𝙾 ${count} 𝙳𝙴 𝙿𝙾𝙲𝙸𝙾𝙽 🥤 𝙿𝙰𝚁𝙰 𝚁𝙴𝙲𝚄𝙿𝙴𝚁𝙰𝚁 𝚂𝚄 𝚂𝙰𝙻𝚄𝙳\n\𝚗𝚂𝙰𝙻𝚄𝙳 » ${user.health} ❤\n\nSALUD COMPLETADA`, m);
};
/* conn.sendButton(m.chat, `━┈━《 🔮 𝐒𝐀𝐋𝐔𝐃 𝐑𝐄𝐂𝐀𝐑𝐆𝐀𝐃𝐀 🔮》━┈━`, `𝙴𝚇𝙸𝚃𝙾𝚂𝙰𝙼𝙴𝙽𝚃𝙴 𝚄𝚂𝙾 ${count} 𝙳𝙴 𝙿𝙾𝙲𝙸𝙾𝙽 🥤 𝙿𝙰𝚁𝙰 𝚁𝙴𝙲𝚄𝙿𝙴𝚁𝙰𝚁 𝚂𝚄 𝚂𝙰𝙻𝚄𝙳\n\𝚗𝚂𝙰𝙻𝚄𝙳 » ${user.health} ❤️`, imgr + 'SALUD COMPLETADA', [
[`𝙰𝚅𝙴𝙽𝚃𝚄𝚁𝙰𝚁 🏕️`, `${usedPrefix}adventure`]], m)*/
handler.help = ['heal'];
handler.tags = ['rpg'];
handler.command = /^(heal|curar)$/i;
export default handler;
function isNumber(number) {
  if (!number) return number;
  number = parseInt(number);
  return typeof number == 'number' && !isNaN(number);
}
