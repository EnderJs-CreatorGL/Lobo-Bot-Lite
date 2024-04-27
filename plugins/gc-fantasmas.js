const handler = async (m, {conn, text, participants}) => {
  const member = participants.map((u) => u.id);
  if (!text) {
    var sum = member.length;
  } else {
    var sum = text;
  }
  let total = 0;
  const sider = [];
  for (let i = 0; i < sum; i++) {
    const users = m.isGroup ? participants.find((u) => u.id == member[i]) : {};
    if ((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) {
      if (typeof global.db.data.users[member[i]] !== 'undefined') {
        if (global.db.data.users[member[i]].whitelist == false) {
          total++;
          sider.push(member[i]);
        }
      } else {
        total++;
        sider.push(member[i]);
      }
    }
  }
  if (total == 0) return conn.reply(m.chat, `[🪁] 𝑁𝑜 𝑠𝑒 𝑒𝑛𝑐𝑢𝑒𝑛𝑡𝑟𝑎𝑛 𝐹𝑎𝑛𝑡𝑎𝑠𝑚𝑎𝑠 𝑒𝑛 𝑒𝑙 𝑔𝑟𝑢𝑝𝑜. `, m);
  m.reply(`*[ ⚠ 𝐴𝑛𝑎𝑙𝑖𝑠𝑎𝑛𝑑𝑜 𝐹𝑢𝑙𝑙 ⚠ ]*\n\n*𝙶𝚁𝚄𝙿𝙾:* ${await conn.getName(m.chat)}\n*𝙼𝙸𝙴𝙼𝙱𝚁𝙾𝚂 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾:* ${sum}\n\n[🎭𝐹𝑎𝑛𝑡𝑎𝑠𝑚𝑎𝑠 🎭]\n${sider.map((v) => '  ⚡ @' + v.replace(/@.+/, '')).join('\n')}\n\n𝐴𝑛𝑎𝑙𝑖𝑠𝑖𝑠 𝑐𝑜𝑚𝑝𝑙𝑒𝑡𝑎𝑑𝑜 𝑎𝑙 100%.`, null, {mentions: sider});
};
handler.command = /^(verfantasmas|fantasmas|sider)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
