/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '[🌹] ᴜsᴀ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ ᴇɴ ᴇʟ ɴᴜᴍᴇʀᴏ ᴘʀɪɴᴄɪᴘᴀʟ'}, {quoted: m});
  }
  const chatId = m.isGroup ? [m.chat, m.sender] : [m.sender];
  const sessionPath = './LoboSession/';
  try {
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      for (const id of chatId) {
        if (file.includes(id.split('@')[0])) {
          await fs.unlink(path.join(sessionPath, file));
          filesDeleted++;
          break;
        }
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '*[❗] No se encontró ningún archivo que incluya la ID del chat*'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `[🌹] 𝐹𝐼𝑙𝑒𝑠 𝑒𝑙𝑖𝑚𝑖𝑛𝑑𝑎𝑠 ${filesDeleted} 𝑑𝑒 𝑠𝑒𝑠𝑠𝑖𝑜𝑛.`}, {quoted: m});
    }
  } catch (err) {
    console.error('Error al leer la carpeta o los archivos de sesión:', err);
    await conn.sendMessage(m.chat, {text: '[🌹]𝐸𝑟𝑟𝑜𝑟 𝑎𝑙 𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑟 𝑙𝑎 𝑠𝑒𝑠𝑠𝑖𝑜𝑛'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `[📍] 𝐿𝑖𝑠𝑡𝑜 𝑎ℎ𝑜𝑟𝑎 𝑚𝑒 𝑙𝑒𝑒𝑠.\n\n\n𝑠𝑖 𝐿𝑜𝑏𝑜-𝐵𝑜𝑡-𝐿𝑖𝑡𝑒🐈🌻 𝑁𝑜 𝑟𝑒𝑠𝑝𝑜𝑛𝑑𝑒 ℎ𝑎𝑔𝑎 𝑢𝑛 𝑠𝑝𝑎𝑚\n*—◉ Ejemplo:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, {quoted: m});
};
handler.help = ['fixmsgespera'];
handler.tags = ['fix'];
handler.command = /^(fixmsgespera|ds)$/i;
export default handler;
