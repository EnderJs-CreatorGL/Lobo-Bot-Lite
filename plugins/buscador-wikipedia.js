import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
async function wikipedia(querry) {
  try {
    const link = await axios.get(`https://es.wikipedia.org/wiki/${querry}`);
    const $ = cheerio.load(link.data);
    const judul = $('#firstHeading').text().trim();
    const thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`;
    const isi = [];
    $('#mw-content-text > div.mw-parser-output').each(function(rayy, Ra) {
      const penjelasan = $(Ra).find('p').text().trim();
      isi.push(penjelasan);
    });
    for (const i of isi) {
      const data = {
        status: link.status,
        result: {
          judul: judul,
          thumb: 'https:' + thumb,
          isi: i}};
      return data;
    }
  } catch (err) {
    const notFond = {
      status: link.status,
      Pesan: eror};
    return notFond;
  }
}
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `[❗️] 𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐦𝐚𝐥 𝐮𝐬𝐚𝐝𝐨!!\n𝐔𝐬𝐨 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐨:\n*${usedPrefix + command} 𝐏𝐚𝐥𝐚𝐛𝐫𝐚 𝐜𝐥𝐚𝐯𝐞 𝐚 𝐛𝐮𝐬𝐜𝐚𝐫\n\n𝐄𝐣𝐞𝐦𝐩𝐥𝐨:\n*${usedPrefix + command} 𝐄𝐬𝐭𝐫𝐞𝐥𝐥𝐚𝐬`;
  wikipedia(`${text}`).then((res) => {
    m.reply(`*𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝙻𝙰 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝙳𝙰:*\n\n` + res.result.isi);
  }).catch(() => {
    m.reply('[❗️] 𝐍𝐨 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐞 𝐧𝐚𝐝𝐚 𝐫𝐞𝐥𝐚𝐜𝐢𝐨𝐧𝐚𝐝𝐨! 𝐭𝐚𝐥𝐯𝐞𝐬 𝐚 𝐞𝐬𝐜𝐫𝐢𝐭𝐨 𝐮𝐧𝐚 𝐩𝐚𝐥𝐚𝐛𝐫𝐚 𝐦𝐚𝐥.');
  });
};
handler.help = ['wikipedia'].map((v) => v + ' <apa>');
handler.tags = ['internet'];
handler.command = /^(wiki|wikipedia)$/i;
export default handler;
