const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

  const optionsFull =`
☆> ( 𝐿𝑜𝑏𝑜-𝐵𝑜𝑡-𝐿𝑖𝑡𝑒 1.2) <☆
┣☆ ඬ⃟🌹.𝗧𝗿𝘂𝗲 𝘄𝗲𝗹𝗰𝗼𝗺𝗲:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🌹.𝗙𝗮𝗹𝘀𝗲 𝘄𝗲𝗹𝗰𝗼𝗺𝗲:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🌐.𝘁𝗿𝘂𝗲 𝗽𝘂𝗯𝗹𝗶𝗰:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟🌐.𝗳𝗮𝗹𝘀𝗲 𝗽𝘂𝗯𝗹𝗶𝗰:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟💧.𝘁𝗿𝘂𝗲 𝗺𝗼𝗱𝗼𝗵𝗼𝗿𝗻𝘆:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟💧.𝗳𝗮𝗹𝘀𝗲 𝗺𝗼𝗱𝗼𝗵𝗼𝗿𝗻𝘆:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🖇️.𝘁𝗿𝘂𝗲 𝗮𝗻𝘁𝗶𝗹𝗶𝗻𝗸:(ᴀᴅᴍɪsɴ)
┣☆ ඬ⃟🖇️.𝗳𝗮𝗹𝘀𝗲 𝗮𝗻𝘁𝗶𝗹𝗶𝗻𝗸:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟📎.𝘁𝗿𝘂𝗲 𝗮𝗻𝘁𝗶𝗹𝗶𝗻𝗸2:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟📎.𝗳𝗮𝗹𝘀𝗲 𝗮𝗻𝘁𝗶𝗹𝗶𝗻𝗸2:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🖋️.𝘁𝗿𝘂𝗲 𝗱𝗲𝘁𝗲𝗰𝘁:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🖋️.𝗳𝗮𝗹𝘀𝗲 𝗱𝗲𝘁𝗲𝗰𝘁:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🖊️.𝘁𝗿𝘂𝗲 𝗱𝗲𝗰𝘁𝗲𝗰𝘁2:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🖊️.𝗳𝗮𝗹𝘀𝗲 𝗱𝗲𝘁𝗲𝗰𝘁2:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🛡️.𝘁𝗿𝘂𝗲 𝗿𝗲𝘀𝘁𝗿𝗶𝗰𝘁:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟🛡️.𝗳𝗮𝗹𝘀𝗲 𝗿𝗲𝘀𝘁𝗿𝗶𝗰𝘁:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟👤.𝘁𝗿𝘂𝗲 𝗽𝗰𝗼𝗻𝗹𝘆:(ᴏᴡɴᴇʀs
┣☆ ඬ⃟👤.𝗳𝗮𝗹𝘀𝗲 𝗽𝗰𝗼𝗻𝗹𝘆:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟👥.𝘁𝗿𝘂𝗲 𝗴𝗰𝗼𝗻𝗹𝘆:(ᴏᴡɴᴇʀs
┣☆ ඬ⃟👥.𝗳𝗮𝗹𝘀𝗲 𝗴𝗰𝗼𝗻𝗹𝘆:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟🔮.𝘁𝗿𝘂𝗲 𝗮𝘂𝘁𝗼𝗿𝗲𝗮𝗱:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟🔮.𝗳𝗮𝗹𝘀𝗲 𝗮𝘂𝘁𝗼𝗿𝗲𝗮𝗱:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟🧸.𝘁𝗿𝘂𝗲 𝗮𝘂𝗱𝗶𝗼𝘀:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🧸.𝗳𝗮𝗹𝘀𝗲 𝗮𝘂𝗱𝗶𝗼𝘀:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟📡.𝘁𝗿𝘂𝗲 𝗮𝗻𝘁𝗶𝘃𝗶𝗲𝘄𝗼𝗻𝗰𝗲:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟📡.𝗳𝗮𝗹𝘀𝗲 𝗮𝗻𝘁𝗶𝘃𝗶𝗲𝘄𝗼𝗻𝗰𝗲:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🎭.𝘁𝗿𝘂𝗲 𝗮𝘂𝘁𝗼𝘀𝘁𝗶𝗰𝗸𝗲𝗿:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🎭.𝗳𝗮𝗹𝘀𝗲 𝗮𝘂𝘁𝗼𝘀𝘁𝗶𝗰𝗸𝗲𝗿:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟📵.𝘁𝗿𝘂𝗲 𝗮𝗻𝘁𝗶𝗰𝗮𝗹𝗹:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟📵.𝗳𝗮𝗹𝘀𝗲 𝗮𝗻𝘁𝗶𝗰𝗮𝗹𝗹:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟🚷.𝘁𝗿𝘂𝗲 𝗮𝗻𝘁𝗶𝗽𝗿𝗶𝘃𝗮𝗱𝗼:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟🚷.𝗳𝗮𝗹𝘀𝗲 𝗮𝗻𝘁𝗶𝗽𝗿𝗶𝘃𝗮𝗱𝗼:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟☢️.𝘁𝗿𝘂𝗲 𝗮𝗻𝘁𝗶𝘁𝗼𝘅𝗶𝗰:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟☢️.𝗳𝗮𝗹𝘀𝗲 𝗮𝗻𝘁𝗶𝘁𝗼𝘅𝗶𝗰:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🔁.𝘁𝗿𝘂𝗲 𝗮𝗻𝘁𝗶𝗮𝗿𝗮𝗯𝗲𝘀:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟🔁.𝗳𝗮𝗹𝘀𝗲 𝗮𝗻𝘁𝗶𝗮𝗿𝗮𝗯𝗲𝘀:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟‼️.𝘁𝗿𝘂𝗲 𝗺𝗼𝗱𝗲𝗷𝗮𝗱𝗶𝗯𝗼𝘁:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟‼️.𝗳𝗮𝗹𝘀𝗲 𝗺𝗼𝗱𝗲𝗷𝗮𝗱𝗶𝗯𝗼𝘁:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟💻.𝘁𝗿𝘂𝗲 𝗺𝗼𝗱𝗼𝗮𝗱𝗺𝗶𝗻:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟💻.𝗳𝗮𝗹𝘀𝗲 𝗺𝗼𝗱𝗼𝗮𝗱𝗺𝗶𝗻:(ᴀᴅᴍɪɴs)
┣☆ ඬ⃟📼.𝘁𝗿𝘂𝗲 𝘀𝗶𝗺𝘀𝗶𝗺𝗶:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟📼.𝗳𝗮𝗹𝘀𝗲 𝘀𝗶𝗺𝘀𝗶𝗺𝗶:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟⚙️.𝘁𝗿𝘂𝗲 𝗮𝘂𝗱𝗶𝗼𝘀_𝗯𝗼𝘁:(ᴏᴡɴᴇʀs)
┣☆ ඬ⃟⚙️.𝗳𝗮𝗹𝘀𝗲 𝗮𝘂𝗱𝗶𝗼𝘀_𝗯𝗼𝘁:(ᴏᴡɴᴇʀs)
 ☆> ( 𝐿𝑜𝑏𝑜-𝐵𝑜𝑡-𝐿𝑖𝑡𝑒 1.2) <☆`.trim();

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
        if (!(isAdmin || isROwner || isOwner)) {
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
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'audios_bot':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;      
      break;
    case 'modoia':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.modoia = isEnable;      
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
      if (!(isROwner || isOwner)) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      //global.opts['autoread'] = isEnable;
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
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
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
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
      case 'game': case 'juegos': case 'fun': case 'ruleta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.game = isEnable          
break;
case 'reaction': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn); 
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: fkontak});
      throw false;
  }
     await conn.reply(m.chat, `╭╼〔 ${packname} 〕
┃֪࣪🍁 𝙾𝙿𝙲𝙸𝙾𝙽: ${type} 
┃֪࣪–––––––☆–––––––
┃֪࣪🌴 𝙴𝚂𝚃𝙰𝙳𝙾: ${isEnable ? '𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾' : '𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾'}
┃֪࣪–––––––☆–––––––
┃֪࣪🌻 𝙿𝙰𝚁𝙰: ${isAll ? '𝙻𝙾𝙱𝙾-𝙱𝙾𝚃-𝙻𝙸𝚃𝙴' : isUser ? '' : '𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃'} 
╰━━━⊰ ${saludo} ⊱━━━━╯`, m,{
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: `${wm}`,
body: saludo, previewType: 0, thumbnail: imagen4, sourceUrl: [gp1, gp1, md].getRandom()}}})} 

handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i;
export default handler;