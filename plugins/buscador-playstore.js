import gplay from "google-play-scraper";

let handler = async (m, { conn, text }) => {
  if (!text) throw "[❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐥𝐚 𝐚𝐩𝐩𝐬 𝐚 𝐛𝐮𝐬𝐜𝐚𝐫";
  let res = await gplay.search({ term: text });
  if (!res.length) throw `[❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐚 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐥𝐚 𝐚𝐩𝐩𝐬 𝐚 𝐛𝐮𝐬𝐜𝐚𝐫`;
  let opt = {
    contextInfo: {
      externalAdReply: {
        title: res[0].title,
        body: res[0].summary,
        thumbnail: (await conn.getFile(res[0].icon)).data,
        sourceUrl: res[0].url,
      },
    },
  };
  await console.log(res);
  res = res.map(
    (v) =>
      `*🔍 Resultado:* ${v.title}
       *✍️ Desarrollador:* ${v.developer}
       *💸 Precio:* ${v.priceText}
       *📈 Puntuacion:* ${v.scoreText}
        *⛓️ Link:* ${v.url}`
  ).join`\n\n`;
  m.reply(res, null, opt);
};
handler.help = ['playstore <aplicacion>'];
handler.tags = ['internet'];
handler.command = /^(playstore)$/i;
export default handler;
