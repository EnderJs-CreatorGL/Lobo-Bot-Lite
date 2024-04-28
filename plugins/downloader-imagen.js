import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `[🌹] 𝐸𝑟𝑟𝑜𝑟 𝑀𝑎𝑙 𝑢𝑠𝑎𝑑𝑜 𝐸𝑗𝑒𝑚𝑝𝑙𝑜:${usedPrefix + command} Minecraft`;
  //if (m.text.includes('gore') || m.text.includes('cp')|| m.text.includes('porno')|| m.text.includes('Gore')|| m.text.includes('rule')|| m.text.includes('CP')|| m.text.includes('Rule34')) return m.reply('[🌹] 𝑃𝑟𝑜ℎ𝑖𝑏𝑖𝑑𝑜 𝑒𝑙 𝑢𝑠𝑜 𝑑𝑒𝑙 𝑐𝑜𝑚𝑎𝑛𝑑𝑜.');
  const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
  conn.sendFile(m.chat, link, 'error.jpg', `🔎 *𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙳𝙴:* ${text}\n🔗 *𝙻𝙸𝙽𝙺* ${link}\n🌎 *𝙱𝚄𝚂𝙲𝙰𝙳𝙾𝚁:* Google`, m);
};
handler.help = ['gimage <query>', 'imagen <query>'];
handler.tags = ['internet', 'tools'];
handler.command = /^(gimage|image|imagen)$/i;
export default handler;
