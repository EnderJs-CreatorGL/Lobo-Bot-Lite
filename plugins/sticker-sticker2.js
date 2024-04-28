import {sticker} from '../lib/sticker.js';
import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
import {webp2png} from '../lib/webp2mp4.js';
const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  let stiker = false;
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 10) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙳𝚄𝚁𝙰𝚁 𝙼𝙰𝚂 𝙳𝙴 10 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂*');
      const img = await q.download?.();
      if (!img) throw `[🍭] 𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘 𝗔𝗟 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗣𝗔𝗥𝗔 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗥 𝗔 𝗦𝗧𝗜𝗖𝗞𝗘𝗥, 𝗘𝗝𝗘𝗠𝗣𝗟𝗢: ${usedPrefix + command}*`;
      let out;
      try {
        stiker = await sticker(img, false, global.packname, global.author);
      } catch (e) {
        console.error(e);
      } finally {
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img);
          else if (/image/g.test(mime)) out = await uploadImage(img);
          else if (/video/g.test(mime)) out = await uploadFile(img);
          if (typeof out !== 'string') out = await uploadImage(img);
          stiker = await sticker(false, out, global.packname, global.author);
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author);
      else return m.reply('[🌹] 𝐸𝑟𝑟𝑜𝑟 𝐼𝑛𝑔𝑟𝑒𝑠𝑎 𝑒𝑛𝑙𝑎𝑐𝑒 𝑣𝑎𝑙𝑖𝑑𝑜 𝑒𝑛 𝑗𝑝𝑔, 𝐸𝑗𝑒𝑚𝑝𝑙𝑜: #s https://telegra.ph/file/0dc687c61410765e98de2.jpg*');
    }
  } catch (e) {
    console.error(e);
    if (!stiker) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
    else throw '[🌹] 𝐸𝑟𝑟𝑜𝑟 𝑗𝑝𝑔. 𝐼𝑛𝑔𝑟𝑒𝑠𝑎 𝑒𝑛𝑙𝑎𝑐𝑒 𝑣𝑎𝑙𝑖𝑑𝑜.';
  }
};
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>'];
handler.tags = ['sticker'];
handler.command = /^(sfull|s2|sticker2|stickergif2|stickerwm2|stiker2)$/i;
export default handler;

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'));
};
