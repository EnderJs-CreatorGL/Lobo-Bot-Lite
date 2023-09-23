import cheerio from 'cheerio';
import axios from 'axios';
const handler = async (m, {conn, text, __dirname, usedPrefix, command}) => {
  if (!global.db.data.chats[m.chat].modohorny && m.isGroup) throw '[❗] 𝐄𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 +18 𝐞𝐬𝐭𝐚 𝐩𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨, 𝐚𝐜𝐭𝐢𝐯𝐚𝐫𝐥𝐨 𝐮𝐬𝐚𝐧𝐝𝐨 #enable modohorny';
  if (!text) throw '[❗] 𝐘 𝐥𝐚 𝐜𝐚𝐭𝐞𝐠𝐨𝐫𝐢𝐚 𝐡𝐞𝐧𝐭𝐚𝐲 ?';
  const searchResults = await searchHentai(text);
  let teks = searchResults.result.map((v, i) => `
${i+1}. *_${v.title}_*
↳ 📺 _𝐕𝐢𝐬𝐭𝐚𝐬:_ ${v.views}
↳ 🎞️ _𝐋𝐢𝐧𝐤:_ ${v.url}`).join('\n\n');
  let randomThumbnail;
  if (searchResults.result.length > 0) {
    const randomIndex = Math.floor(Math.random() * searchResults.result.length);
    randomThumbnail = searchResults.result[randomIndex].thumbnail;
  } else {
    randomThumbnail = 'https://pictures.hentai-foundry.com/e/Error-Dot/577798/Error-Dot-577798-Zero_Two.png';
    teks = '[❗] 𝐅𝐚𝐥𝐥𝐨, 𝐦𝐚𝐥 𝐞𝐬𝐜𝐫𝐢𝐭𝐨 𝐨 𝐩𝐫𝐮𝐞𝐛𝐞 𝐨𝐭𝐫𝐚 𝐜𝐚𝐭𝐞𝐠𝐨𝐫𝐢𝐚';
  }
  conn.sendFile(m.chat, randomThumbnail, 'error.jpg', teks, m);
};
handler.command = /^(hentaisearch|searchhentai)$/i;
export default handler;
async function searchHentai(search) {
  return new Promise((resolve, reject) => {
    axios.get('https://hentai.tv/?s=' + search).then(async ({data}) => {
      const $ = cheerio.load(data);
      const result = {};
      const res = [];
      result.coder = 'rem-comp';
      result.result = res;
      result.warning = 'It is strictly forbidden to reupload this code, copyright © 2022 by rem-comp';
      $('div.flex > div.crsl-slde').each(function(a, b) {
        const _thumbnail = $(b).find('img').attr('src');
        const _title = $(b).find('a').text().trim();
        const _views = $(b).find('p').text().trim();
        const _url = $(b).find('a').attr('href');
        const hasil = {thumbnail: _thumbnail, title: _title, views: _views, url: _url};
        res.push(hasil);
      });
      resolve(result);
    }).catch((err) => {
      console.log(err);
    });
  });
}
