export function before(m) {
  const user = global.db.data.users[m.sender];
  if (user.afk > -1) {
    m.reply(`
  [⛔] 𝐘𝐚 𝐧𝐨 𝐞𝐬𝐭𝐚𝐬 𝐢𝐧𝐚𝐜𝐭𝐢𝐯𝐨 (𝙰𝙵𝙺)${user.afkReason ? ' 𝐃𝐞𝐬𝐩𝐮𝐞𝐬 𝐝𝐞 𝐞𝐬𝐭𝐚𝐫 𝐢𝐧𝐚𝐜𝐭𝐢𝐯𝐨 (𝙰𝙵𝙺) 𝐏𝐨𝐫 𝐦𝐨𝐭𝐢𝐯𝐨: ' + user.afkReason : ''}
  
  —◉𝐓𝐢𝐞𝐦𝐩𝐨 𝐎𝐟𝐥𝐢𝐧𝐞  (𝙰𝙵𝙺): ${(new Date - user.afk).toTimeString()}
  `.trim());
    user.afk = -1;
    user.afkReason = '';
  }
  const jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
  for (const jid of jids) {
    const user = global.db.data.users[jid];
    if (!user) {
      continue;
    }
    const afkTime = user.afk;
    if (!afkTime || afkTime < 0) {
      continue;
    }
    const reason = user.afkReason || '';
    m.reply(`[❗] 𝐍𝐨 𝐥𝐨 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐞𝐬 [❗]
    
—◉ 𝐄𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐪𝐮𝐞 𝐞𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬𝐭𝐞 𝐞𝐬𝐭𝐚 𝐎𝐟𝐥𝐢𝐧𝐞 (𝙰𝙵𝙺)      
—◉ ${reason ? '𝐌𝐨𝐭𝐢𝐯𝐨 (𝙰𝙵𝙺): ' + reason : '𝐌𝐨𝐭𝐢𝐯𝐨 (𝙰𝙵𝙺): _𝐍𝐨 𝐞𝐬𝐩𝐞𝐜𝐢𝐟𝐢𝐜𝐚𝐝𝐨_'}
—◉ 𝐓𝐢𝐞𝐦𝐩𝐨 𝐎𝐟𝐥𝐢𝐧𝐞 (𝙰𝙵𝙺): ${(new Date - afkTime).toTimeString()}
  `.trim());
  }
  return true;
}
