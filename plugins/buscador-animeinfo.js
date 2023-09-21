import translate from '@vitalets/google-translate-api';
import {Anime} from '@shineiichijo/marika';
const client = new Anime();
const handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) return m.reply(`[❗] 𝐄𝐬𝐩𝐞𝐫𝐚, 𝐢𝐧𝐠𝐫𝐞𝐬𝐚 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞𝐥 𝐚𝐧𝐢𝐦𝐞 𝐚 𝐛𝐮𝐬𝐜𝐚𝐫`);
  try {
    const anime = await client.searchAnime(text);
    const result = anime.data[0];
    const resultes = await translate(`${result.background}`, {to: 'es', autoCorrect: true});
    const resultes2 = await translate(`${result.synopsis}`, {to: 'es', autoCorrect: true});
    const AnimeInfo = `
🎀 • *Título:* ${result.title}
🎋 • *Formato:* ${result.type}
📈 • *Estado:* ${result.status.toUpperCase().replace(/\_/g, ' ')}
🍥 • *Episodios totales:* ${result.episodes}
🎈 • *Duración: ${result.duration}*
✨ • *Basado en:* ${result.source.toUpperCase()}
💫 • *Estrenado:* ${result.aired.from}
🎗 • *Finalizado:* ${result.aired.to}
🎐 • *Popularidad:* ${result.popularity}
🎏 • *Favoritos:* ${result.favorites}
🎇 • *Clasificación:* ${result.rating}
🏅 • *Rango:* ${result.rank}
♦ • *Trailer:* ${result.trailer.url}
🌐 • *URL:* ${result.url}
🎆 • *Background:* ${resultes.text}
❄ • *Ringkasan:* ${resultes2.text}`;
    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `[❗] 𝐄𝐫𝐫𝐨 𝐝𝐞𝐭𝐞𝐜𝐭𝐚𝐝𝐨, 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐫 𝐝𝐞 𝐧𝐮𝐞𝐯𝐨`;
  }
};
handler.command = /^(anime|animeinfo)$/i;
export default handler;
