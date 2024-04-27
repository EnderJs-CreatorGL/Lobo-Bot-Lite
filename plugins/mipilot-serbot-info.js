import ws from 'ws';
async function handler(m, {usedPrefix}) {
  const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn.user)])];
  const message = users.map((v) => '[🌹] wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado\n(${v.name})\n\n`).join('\n');
  const replyMessage = (message.length === 0) ? '[🌟] 𝑁𝑜 ℎ𝑎𝑦 𝑆𝑢𝑏 𝐵𝑜𝑡𝑠 𝑎𝑐𝑡𝑖𝑣𝑜𝑠 𝑎𝑠𝑡𝑎 𝑒𝑙 𝑀𝑜𝑚𝑒𝑛𝑡𝑜, 𝑈𝑠𝑎𝑟 (𝑆𝑒𝑟𝑏𝑜𝑡) 𝑃𝑎𝑟𝑎 𝑐𝑜𝑛𝑣𝑒𝑟𝑡𝑖𝑟𝑡𝑒 𝑒𝑛 𝑢𝑛𝑜.' : message;
  await m.reply( '[📍] 𝐿𝑖𝑠𝑡𝑎 𝑑𝑒 𝑙𝑜𝑠 𝑆𝑢𝑏 𝐵𝑜𝑡𝑠 𝐿𝑜𝑏𝑜-𝐵𝑜𝑡-𝐿𝑖𝑡𝑒 𝑒𝑛 𝑇𝑖𝑒𝑚𝑝𝑜 𝑟𝑒𝑎𝑙 (𝑆𝑒 𝑎𝑚𝑎𝑏𝑙𝑒).\n\n[🌹] 𝐸𝑙 𝑆𝑡𝑎𝑓𝑓 𝐺𝑙𝑜𝑏𝑎𝑙 𝑑𝑒 𝐿𝑜𝑏𝑜-𝐵𝑜𝑡-𝐿𝑖𝑡𝑒 𝑁𝑜 𝑠𝑒 𝑟𝑒𝑠𝑝𝑜𝑛𝑠𝑎𝑏𝑖𝑙𝑖𝑠𝑎 𝑝𝑜𝑟 𝑒𝑙 𝑚𝑎𝑙 𝑢𝑠𝑜 𝑑𝑒 𝑙𝑜𝑠 𝑆𝑢𝑏 𝐵𝑜𝑡𝑠.');
  await m.reply(replyMessage.trim());
}
handler.command = handler.help = ['listjadibot', 'bots', 'subsbots'];
handler.tags = ['jadibot'];
export default handler;
