const toxicRegex = /puto|puta|rata|estupido|imbecil|rctmre|mrd|verga|vrga|maricon/i;

export async function before(m, {isAdmin, isBotAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) {
    return !1;
  }
  const user = global.db.data.users[m.sender];
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  const isToxic = toxicRegex.exec(m.text);

  if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
    user.warn += 1;
    if (!(user.warn >= 5)) await m.reply(`${user.warn == 1 ? `𝐇𝐨𝐥𝐚 *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, 𝐝𝐞𝐜𝐢𝐫 𝐥𝐚 𝐩𝐚𝐥𝐚𝐛𝐫𝐚 (${isToxic}) 𝐞𝐬𝐭𝐚 𝐩𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐚 *${user.warn}/5* 𝐚𝐝𝐯𝐞𝐫𝐭𝐞𝐧𝐜𝐢𝐚 [💢]`, false, {mentions: [m.sender]});
  }

  if (user.warn >= 5) {
    user.warn = 0;
    await m.reply(`𝐌𝐦𝐦 *@${m.sender.split`@`[0]}*, 𝐬𝐮𝐩𝐞𝐫𝐚𝐬𝐭𝐞𝐬 𝐥𝐚𝐬 𝐚𝐝𝐯𝐞𝐫𝐭𝐞𝐧𝐜𝐢𝐚𝐬 𝐬𝐞𝐫𝐚𝐬 𝐯𝐞𝐭𝐚𝐝𝐨 𝐝𝐞 𝐞𝐬𝐭𝐞 𝐠𝐫𝐮𝐩𝐨 [💢]`, false, {mentions: [m.sender]});
    user.banned = true;
    await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    // await this.updateBlockStatus(m.sender, 'block')
  }
  return !1;
}
