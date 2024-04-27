var handler = async (m, { conn, participants, usedPrefix, command }) => {
    if (!m.mentionedJid[0] && !m.quoted) {
        return conn.reply(m.chat, '[💖]𝗥𝗘𝗦𝗣𝗢𝗡𝗗𝗘 𝗔𝗟 𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗗𝗘𝗟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢\n\n—◉ 🖋️𝗘𝗝𝗘𝗠𝗣𝗟𝗢:\n*#kick @user*', m);
    }
  
    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;

    const groupInfo = await conn.groupMetadata(m.chat);
    const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
    const ownerBot = global.owner || m.chat.split`-`[0] + '@s.whatsapp.net';


    if (user === conn.user.jid) {
        return conn.reply(m.chat, '[🚫] 𝗡𝗢 𝗣𝗨𝗘𝗗𝗢 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗥𝗠𝗘 𝗔 𝗠𝗜 𝗠𝗜𝗦𝗠𝗢, 𝗦𝗔𝗖𝗔𝗠𝗘 𝗠𝗔𝗡𝗨𝗔𝗟𝗠𝗘𝗡𝗧𝗘.', m);
    }

    if (user === ownerGroup) {
        return conn.reply(m.chat, '[🚫] 𝗡𝗢 𝗟𝗢 𝗣𝗨𝗘𝗗𝗢 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗥.', m);
    }

    if (user === ownerBot) {
        return conn.reply(m.chat, '☄️ No Lo Puedo Eliminar', m);
    }

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
};

handler.help = ['kick'];
handler.tags = ['grupo'];
handler.command = /^(kick|echar|hechar|sacar|ban)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;

export default handler;