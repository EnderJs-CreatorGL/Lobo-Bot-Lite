/* Codigo hecho por @Fabri115 y mejorado por Ender */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '*[❗] Utiliza este comando directamente en el número principal del Bot.*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: '*[❗] Iniciando proceso de eliminación de todos los archivos de sesión, excepto el archivo creds.json...*'}, {quoted: m});
  const sessionPath = './LoboSession/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(m.chat, {text: '*[❗] La carpeta LoboBotSession no existe o está vacía.*'}, {quoted: m});
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
      await conn.sendMessage(m.chat, {text: '*[❗] No se encontró ningún archivo para eliminar en la carpeta LoboBotSession.*'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `*[❗] Se eliminaron ${filesDeleted} archivos de sesión, excepto el archivo creds.json.*`}, {quoted: m});
    }
  } catch (err) {
    console.error('Error al leer la carpeta o los archivos de sesión:', err);
    await conn.sendMessage(m.chat, {text: '*[❗] Ocurrió un error al eliminar los archivos de sesión.*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: ` 🪁𝐿𝑖𝑠𝑡𝑜 𝐸𝑗𝑒𝑐𝑢𝑐𝑖𝑜𝑛 𝑝𝑒𝑟𝑓𝑒𝑐𝑡𝑎\n\n*[🌐] Si el Bot no le responde a sus comandos por favor haga un pequeño spam*\n\n*—◉ Ejemplo:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, {quoted: m});
};
handler.help = ['del_reg_in_session_owner'];
handler.tags = ['owner'];
handler.command = /^(del_reg_in_session_owner|lobodel|dellobo|clearallsession)$/i;
handler.rowner = true
export default handler;
