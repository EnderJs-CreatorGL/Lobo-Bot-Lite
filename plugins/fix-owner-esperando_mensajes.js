/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '[🌹]𝐸𝑗𝑒𝑐𝑢𝑡𝑎 𝑒𝑙 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 𝑒𝑛 𝑒𝑙 𝐿𝑜𝑏𝑜-𝐵𝑜𝑡-𝐿𝑖𝑡𝑒 𝑃𝑟𝑖𝑛𝑐𝑖𝑝𝑎𝑙'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: '[🌹] 𝑆𝑒 𝐸𝑠𝑡𝑎 𝑒𝑗𝑒𝑐𝑢𝑡𝑎𝑛𝑑𝑜 𝑒𝑙 𝑝𝑟𝑜𝑐𝑒𝑠𝑜 𝑑𝑒 𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑐𝑖𝑜𝑛 𝐹𝑖𝑙𝑒𝑠'}, {quoted: m});
  const sessionPath = './LoboSession/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(m.chat, {text: '[🌹] 𝑁𝑜 𝑠𝑒 𝑒𝑛𝑐𝑢𝑒𝑛𝑡𝑟𝑎 𝑙𝑎 𝑐𝑎𝑟𝑝𝑒𝑡𝑎 (𝑈𝑛𝑑𝑒𝑓𝑖𝑛𝑒𝑑) '}, {quoted: m});
    }
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '[🌹] 𝑁𝑜 𝑠𝑒 𝑒𝑛𝑐𝑢𝑒𝑛𝑡𝑟𝑎 𝑙𝑎 𝑐𝑎𝑟𝑝𝑒𝑡𝑎 (𝑈𝑛𝑑𝑒𝑓𝑖𝑛𝑒𝑑)'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `[🌹] 𝑆𝑒 𝑎 𝐸𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝐿𝑜𝑠 𝐹𝑖𝑙𝑒𝑠 𝑑𝑒 𝑚𝑎𝑛𝑒𝑟𝑎 𝑝𝑒𝑟𝑓𝑒𝑐𝑡𝑎 ${filesDeleted} 𝑚𝑒𝑛𝑜𝑠 𝐶𝑟𝑒𝑑𝑒𝑛𝑐𝑖𝑎𝑙𝑒𝑠 𝑑𝑒𝑙 𝐵𝑜𝑡.`}, {quoted: m});
    }
  } catch (err) {
    console.error('Error al leer la carpeta o los archivos de sesión:', err);
    await conn.sendMessage(m.chat, {text: '[🌹] 𝐸𝑗𝑐𝑢𝑐𝑖𝑜𝑛 𝑓𝑎𝑙𝑙𝑖𝑑𝑎'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `📍𝐿𝑖𝑠𝑡𝑜 𝐸𝑗𝑒𝑐𝑢𝑐𝑖𝑜𝑛 𝑝𝑒𝑟𝑓𝑒𝑐𝑡𝑎📍\n\n*[🌐] 𝑆𝑖 𝑒𝑙 𝐿𝑜𝑏𝑜-𝐵𝑜𝑡-𝐿𝑖𝑡𝑒 𝑛𝑜 𝑟𝑒𝑝𝑜𝑛𝑑𝑒, 𝐻𝑎𝑔𝑎 𝑢𝑛 𝑠𝑝𝑎𝑚\n\n*—◉ Ejemplo:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, {quoted: m});
};
handler.help = ['del_reg_in_session_owner'];
handler.tags = ['owner'];
handler.command = /^(del_reg_in_session_owner|lobodel|dellobo|clearallsession)$/i;
handler.rowner = true
export default handler;
