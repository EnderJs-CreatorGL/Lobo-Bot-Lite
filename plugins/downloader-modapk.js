import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `[🌹] 𝑁𝑜𝑚𝑏𝑟𝑒 𝑑𝑒 𝑙𝑎 𝐴𝑝𝑝.`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `📲 *Descargador de Aptoide* 📲\n\n📌 *Nombre:* ${data5.name}\n📦 *Package:* ${data5.package}\n🕒 *Última actualización:* ${data5.lastup}\n📥 *Tamaño:* ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '[🌹] 𝐴𝑟𝑐ℎ𝑖𝑣𝑜 𝑚𝑢𝑦 𝑝𝑒𝑠𝑎𝑑𝑜.'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `[🌹] 𝐸𝑟𝑟𝑜𝑟 𝑁𝑢𝑙𝑙 (𝐵𝑢𝑠𝑞𝑢𝑒𝑑𝑎 𝑓𝑎𝑙𝑙𝑖𝑑𝑎).`;
  }    
};
handler.command = /^(apk|descargar)$/i;
export default handler;
