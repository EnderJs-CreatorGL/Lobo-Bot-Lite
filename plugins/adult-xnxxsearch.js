import fetch from 'node-fetch';
const handler = async (m, {text, usedPrefix, command}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `[❗] 𝐄𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐚𝐫𝐚 +18 𝐞𝐬𝐭𝐚𝐧 𝐩𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨𝐬, 𝐚𝐜𝐭𝐢𝐯𝐚𝐥𝐨 𝐮𝐬𝐚𝐧𝐝𝐨 ${usedPrefix}enable modohorny`;   
  if (!text) throw `[❗] 𝐌𝐚𝐥 𝐮𝐬𝐚𝐝𝐨, 𝐄𝐣𝐞𝐦𝐩𝐥𝐨: ${usedPrefix + command} 𝐜𝐨𝐧 𝐦𝐢 𝐩𝐫𝐢𝐦𝐚`;
  try {
    const vids_ = {
      from: m.sender,
      urls: [],
    };
    if (!global.videoListXXX) {
      global.videoListXXX = [];
    }
    if (global.videoListXXX[0]?.from == m.sender) {
      global.videoListXXX.splice(0, global.videoListXXX.length);
    }
    const res = await xnxxsearch(text);
    const json = res.result;
    let cap = `🔍 𝐑𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨𝐬: ${text.toUpperCase()}\n\n`;
    let count = 1;
    for (const v of json) {
      const linkXXX = v.link;
      vids_.urls.push(linkXXX);
      cap += `*[${count}]*\n• 🎬 𝐓𝐢𝐭𝐮𝐥𝐨: ${v.title}\n• 🔗 𝐋𝐢𝐧𝐤: ${v.link}\n• ❗ 𝐈𝐧𝐟𝐨: ${v.info}`;
      cap += '\n\n' + '••••••••••••••••••••••••••••••••' + '\n\n';
      count++;
    }
    m.reply(cap);
    global.videoListXXX.push(vids_);
  } catch {
  }
};
handler.help = ['xnxxsearch'].map((v) => v + ' <query>');
handler.tags = ['downloader', 'premium'];
handler.command = /^xnxxsearch|xnxxs$/i;
export default handler;

async function xnxxsearch(query) {
  return new Promise((resolve, reject) => {
    const baseurl = 'https://www.xnxx.com';
    fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'}).then((res) => res.text()).then((res) => {
      const $ = cheerio.load(res, {xmlMode: false});
      const title = [];
      const url = [];
      const desc = [];
      const results = [];
      $('div.mozaique').each(function(a, b) {
        $(b).find('div.thumb').each(function(c, d) {
          url.push(baseurl + $(d).find('a').attr('href').replace('/THUMBNUM/', '/'));
        });
      });
      $('div.mozaique').each(function(a, b) {
        $(b).find('div.thumb-under').each(function(c, d) {
          desc.push($(d).find('p.metadata').text());
          $(d).find('a').each(function(e, f) {
            title.push($(f).attr('title'));
          });
        });
      });
      for (let i = 0; i < title.length; i++) {
        results.push({title: title[i], info: desc[i], link: url[i]});
      }
      resolve({code: 200, status: true, result: results});
    }).catch((err) => reject({code: 503, status: false, result: err}));
  });
}


