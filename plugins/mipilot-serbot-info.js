import ws from 'ws';
async function handler(m, {usedPrefix}) {
  const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn.user)])];
  const message = users.map((v) => '📄 wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado\n(${v.name})\n\n`).join('\n');
  const replyMessage = (message.length === 0) ? '𝙽𝙾 𝙷𝙰𝚈 𝙱𝙾𝚃𝚂 𝙰𝙲𝚃𝙸𝚅𝙾𝚂 𝙳𝙴 𝙼𝙾𝙼𝙴𝙽𝚃𝙾, 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴.' : message;
  await m.reply( '*—◉ 𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝚂𝚄𝙱𝙱𝙾𝚃𝚂 (𝚂𝙴𝚁𝙱𝙾𝚃/𝙹𝙰𝙳𝙸𝙱𝙾𝚃) 𝙰𝙲𝚃𝙸𝚅𝙾𝚂 💻*\n\n*◉ 𝙿𝚄𝙴𝙳𝙴𝚂 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝚁𝙻𝙾𝚂 𝙿𝙰𝚁𝙰 𝙿𝙴𝙳𝙸𝚁 𝚀𝚄𝙴 𝚂𝙴 𝚄𝙽𝙰𝙽 𝙰 𝚃𝚄 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙴 𝚁𝙴𝚂𝙿𝙴𝚃𝚄𝙾𝚂𝙾!!*\n\n*[❗] 𝙴𝙻 𝚂𝚃𝙰𝙵𝙵 𝙶𝙻𝙾𝙱𝙰𝙻  𝚂𝙴 𝙳𝙴𝚂𝙻𝙸𝙽𝙳𝙰 𝙳𝙴 𝚃𝙾𝙳𝙰 𝚁𝙴𝚂𝙿𝙾𝙽𝚂𝙰𝙱𝙸𝙻𝙸𝙳𝙰𝙳 𝙾 𝚂𝚄𝙲𝙴𝚂𝙾 𝙾𝙲𝚄𝚁𝚁𝙸𝙳𝙾 𝙲𝙾𝙽 𝚁𝙴𝚂𝙿𝙴𝙲𝚃𝙾 𝙰𝙻 𝙱𝙾𝚃 𝙾 𝚂𝚄𝙱𝙱𝙾𝚃𝚂*');
  await m.reply(replyMessage.trim());
}
handler.command = handler.help = ['listjadibot', 'bots', 'subsbots'];
handler.tags = ['jadibot'];
export default handler;
