/* Created By https://github.com/ALBERTO9883 */
import fs from 'fs';
import fetch from 'node-fetch';
import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {text, usedPrefix, command, conn}) => {
  if (!text) throw `[❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐚 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞𝐥 𝐩𝐚𝐪𝐮𝐞𝐭𝐞 𝐚 𝐛𝐮𝐬𝐜𝐚𝐫`;
  try {
    const res2 = await googleImage(text);
    const sfoto = res2.getRandom();
    const json = await fetch(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkeysapi}&query=${text}`);
    const jsons = await json.json();
    const {stickers} = jsons.result[0];
    const res = jsons.result.map((v, index) => `🌅 • Resultado: ${1 + index}\n*🥗 • Nombre:* ${v.title}\n*🐢 • Autor:* ${v.author}\n*🍂 • Url:* ${v.url}`).join`\n\n───\n\n`;
    await conn.sendFile(m.chat, sfoto, 'error.jpg', res, m);
  } catch {
    await m.reply('[❗] 𝐅𝐚𝐥𝐥𝐨, 𝐢𝐧𝐭𝐞𝐧𝐭𝐞 𝐝𝐞 𝐧𝐮𝐞𝐯𝐨');
  }
};
handler.command = ['stickersearch2', 'searchsticker2', 'stickerssearch2', 'searchstickers2'];
export default handler;
