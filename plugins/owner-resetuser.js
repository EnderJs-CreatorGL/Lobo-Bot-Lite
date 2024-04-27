const handler = async (m, { conn, text }) => {
    const numberPattern = /\d+/g;
    let user = '';
    const numberMatches = text.match(numberPattern);
    if (numberMatches) {
        const number = numberMatches.join('');
        user = number + '@s.whatsapp.net';
    } else if (m.quoted && m.quoted.sender) {
        const quotedNumberMatches = m.quoted.sender.match(numberPattern);
        if (quotedNumberMatches) {
            const number = quotedNumberMatches.join('');
            user = number + '@s.whatsapp.net';
        } else {
        return conn.sendMessage(m.chat, {text: `[🌹] ᴇʀʀᴏʀ ɴᴏ ʀᴇᴄᴏɴᴏᴄɪᴅᴏ`}, {quoted: m});
    }
    } else {
        return conn.sendMessage(m.chat, {text: `[🌹] ᴇʀʀᴏʀ ɴᴏ ʀᴇᴄᴏɴᴏᴄɪᴅᴏ`}, {quoted: m});
    }        
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {};
        const participants = m.isGroup ? groupMetadata.participants : [];
        const users = m.isGroup ? participants.find(u => u.jid == user) : {};
        const userNumber = user.split('@')[0];
        if (!global.global.db.data.users[user] || global.global.db.data.users[user] == '') {
            return conn.sendMessage(m.chat, {text: `[🧸] ᴇʟ ᴜsᴇʀ @${userNumber} ɴᴏ ᴇsᴛᴀ ᴇɴ ʟᴀ ᴅᴀᴛᴀ ʙᴀsᴇ`, mentions: [user]}, {quoted: m});
         }
        delete global.global.db.data.users[user];
        conn.sendMessage(m.chat, {text: `[🌹] ᴘᴇʀғᴇᴄᴛᴏ ᴇʟɪᴍɪɴᴇ ʟᴏs ᴅᴀᴛᴏs ᴅᴇʟ ᴜsᴜᴀʀɪᴏ @${userNumber} ᴅᴇ ʟᴀ ᴅᴀᴛᴀ ʙᴀsᴇ ᴅᴇ ʟᴏʙᴏ-ʙᴏᴛ-ʟɪᴛᴇ`, mentions: [user]}, {quoted: m});
};
handler.tags = ['owner'];
handler.command = /(data0|deletedatauser|datos0)$/i;
handler.rowner = true;
export default handler;
