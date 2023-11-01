import {canLevelUp, xpRange} from '../lib/levelling.js';
import {levelup} from '../lib/canvas.js';

const handler = async (m, {conn}) => {
  const name = conn.getName(m.sender);
  const user = global.db.data.users[m.sender];
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    const {min, xp, max} = xpRange(user.level, global.multiplier);
    throw `
┌───⊷ 𝗡𝗶𝘃𝗲𝗹/𝗟𝗲𝘃𝗲𝗹 [√]
Δ ☆𝗡𝗢𝗠𝗕𝗥𝗘 : *${name}*
Δ ☆𝗡𝗜𝗩𝗘𝗟 : *${user.level}*
Δ ☆𝗘𝗫𝗣𝗘𝗥𝗧𝗢 : *${user.exp - min}/${xp}*
└──────────────

Te falta *${max - user.exp}* de *XP* para subir de nivel
`.trim();
  }
  const before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
  if (before !== user.level) {
    const teks = `🎊 Bien hecho ${conn.getName(m.sender)}    Nivel:`;
    const str = `
┌─⊷𝗡𝗶𝘃𝗲𝗹 𝘂𝗽 [√]
Δ ☆𝗔𝗡𝗧𝗘𝗥𝗜𝗢𝗥 𝗟𝗘𝗩𝗘𝗟 : *${before}*
Δ ☆𝗔𝗖𝗧𝗨𝗔𝗟 𝗟𝗘𝗩𝗘𝗟 : *${user.level}*
└──────────────

*_Cuanto más interactúes con los bots, mayor será tu nivel_*
`.trim();
    try {
      const img = await levelup(teks, user.level);
      conn.sendFile(m.chat, img, 'levelup.jpg', str, m);
    } catch (e) {
      m.reply(str);
    }
  }
};

handler.help = ['levelup'];
handler.tags = ['xp'];

handler.command = ['nivel', 'lvl', 'levelup', 'level'];

export default handler;
