const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const optionsFull =`┏━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ◉— 𝗟𝗢𝗕𝗢-𝗕𝗢𝗧-𝗠𝗗 —◉
┃ [🔮]𝐌𝐎𝐃𝐎: ➡️𝐀𝐃𝐌𝐈𝐍𝐒⬅️
┃ [💖]𝐋𝐎𝐁𝐎: ➡️𝐎𝐖𝐍𝐄𝐑𝐒⬅️
┗━━━━━━━━━━━━━━━━━━━━━━━━━━┛

 [🔮]𝗠𝗢𝗗𝗢: 🌟☆||☆𝐖𝐄𝐋𝐂𝐎𝐌𝐄

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} welcome
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [💖]𝗟𝗢𝗕𝗢-𝗕𝗢𝗧: 👥☆||☆𝐌𝐎𝐃𝐎 𝐏𝐔𝐁𝐋𝐈𝐂𝐎 

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} public
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [🔮]𝗠𝗢𝗗𝗢: 🔥☆||☆𝐌𝐎𝐃𝐎 𝐇𝐎𝐑𝐍𝐘

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} modohorny
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [🔮]𝗠𝗢𝗗𝗢: 🚨☆||☆𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} antilink
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆


 [🔮]𝗠𝗢𝗗𝗢: 🚨☆||☆𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊2

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢:* ${usedPrefix + command} antilink2
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [🔮]𝗠𝗢𝗗𝗢: 🔎☆||☆𝐃𝐄𝐓𝐄𝐂𝐓

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} detect
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [🔮]𝗠𝗢𝗗𝗢: 🔎☆||☆𝐃𝐄𝐓𝐄𝐂𝐓 2

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} detect2
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆


[💖]𝗟𝗢𝗕𝗢-𝗕𝗢𝗧: 🛡☆||☆𝐑𝐄𝐒𝐓𝐑𝐈𝐂𝐓

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} restrict
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆


 [💖]𝗟𝗢𝗕𝗢-𝗕𝗢𝗧: 🔮☆||☆𝐀𝐔𝐓𝐎𝐑𝐄𝐀𝐃

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} autoread
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [🔮]𝗠𝗢𝗗𝗢: 🔊☆||☆𝐀𝐔𝐃𝐈𝐎𝐒

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} audios
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [🔮]𝗠𝗢𝗗𝗢: 🎨☆||☆𝐀𝐔𝐓𝐎𝐒𝐓𝐈𝐂𝐊𝐄𝐑

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} autosticker 
⧫⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [💖]𝗟𝗢𝗕𝗢-𝗕𝗢𝗧: 💬☆||☆𝐏𝐂𝐎𝐍𝐋𝐘

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} pconly
⧫⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [💖]𝗟𝗢𝗕𝗢-𝗕𝗢𝗧: 🗺️☆||☆𝐆𝐂𝐎𝐍𝐋𝐘

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} gconly
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [💖]𝗠𝗢𝗗𝗢: 🖼️☆||☆𝐀𝐍𝐓𝐈𝐕𝐈𝐄𝐖𝐎𝐍𝐂𝐄 

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} antiviewonce
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [💖]𝗟𝗢𝗕𝗢-𝗕𝗢𝗧: 📵☆||☆𝐀𝐍𝐓𝐈 𝐋𝐋𝐀𝐌𝐀𝐃𝐀

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} anticall
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [💖]𝗟𝗢𝗕𝗢-𝗕𝗢𝗧: 🚫☆||☆𝐀𝐍𝐓𝐈𝐏𝐑𝐈𝐕𝐀𝐃𝐎

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} antiprivado
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [🔮]𝗠𝗢𝗗𝗢: 🤬☆||☆𝐀𝐍𝐓𝐈𝐓𝐎𝐗𝐈𝐂

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} antitoxic
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [🔮]𝗠𝗢𝗗𝗢: 🖇️☆||☆𝐀𝐍𝐓𝐈𝐓𝐑𝐀𝐁𝐀𝐒

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} antitraba
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [🔮]𝗠𝗢𝗗𝗢: 🔪☆||☆𝐀𝐍𝐓𝐈𝐀𝐑𝐀𝐁𝐄𝐒

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} antiarabes
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [🔮]𝗠𝗢𝗗𝗢: 🔪☆||☆𝐀𝐍𝐓𝐈𝐀𝐑𝐀𝐁𝐄𝐒 2

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} antiarabes2
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [💖]𝗟𝗢𝗕𝗢-𝗕𝗢𝗧: 🤖☆||☆𝐌𝐎𝐃𝐄𝐉𝐀𝐃𝐈𝐁𝐎𝐓

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} modejadibot
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [🔮]𝗠𝗢𝗗𝗢: 💻☆||☆𝐌𝐎𝐃𝐎𝐀𝐃𝐌𝐈𝐍

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} modoadmin
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [🔮]𝗠𝗢𝗗𝗢: 🛰️☆||☆𝐒𝐈𝐌𝐒𝐈𝐌𝐈

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} simsimi
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [💖]𝗟𝗢𝗕𝗢-𝗕𝗢𝗧: ⏳☆||☆𝐀𝐍𝐓𝐈𝐒𝐏𝐀𝐌

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} antispam
⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [🔮]𝗠𝗢𝗗𝗢: 🧿☆||☆𝐀𝐍𝐓𝐈𝐃𝐄𝐋𝐄𝐓𝐄 
 
✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} antidelete
⧫⧫☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆✦☆

 [💖]𝗟𝗢𝗕𝗢-𝗕𝗢𝗧: 🔊☆||☆𝐀𝐔𝐃𝐈𝐎𝐒_𝐁𝐎𝐓

✓𝗖𝗢𝗠𝗔𝗡𝗗𝗢: ${usedPrefix + command} audios_bot`.trim();

  const isEnable = /true|enable|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidelete = isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'antilink2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'modohorny':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!isOwner) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'audios_bot':
      isAll = true;
      if (!isOwner) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;      
      break;
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `[💖] 𝐎𝐏𝐂𝐈𝐎𝐍: ${type}\n[🌼] 𝐄𝐒𝐓𝐀𝐃𝐎: ${isEnable ? '𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾' : '𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾'}\n[🌟] 𝐏𝐀𝐑𝐀: ${isAll ? '𝙴𝚂𝚃𝙴 𝙱𝙾𝚃' : isUser ? '' : '𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃'}`}, {quoted: m});
};
handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i;
export default handler;
