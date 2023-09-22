const handler = async (m, {text}) => {
  const user = global.db.data.users[m.sender];
  user.afk = + new Date;
  user.afkReason = text;
  m.reply(`[🚫] 𝐄𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 ${conn.getName(m.sender)} 𝐄𝐬𝐭𝐚𝐫𝐚 𝐎𝐟𝐥𝐢𝐧𝐞 (𝙰𝙵𝙺), 𝐍𝐨 𝐥𝐨 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐞𝐧\n\n—◉ 𝐌𝐨𝐭𝐢𝐯𝐨 𝐨𝐟𝐥𝐢𝐧𝐞 (𝙰𝙵𝙺)${text ? ': ' + text : ''}
`);
};
handler.help = ['afk [alasan]'];
handler.tags = ['main'];
handler.command = /^afk$/i;
export default handler;
