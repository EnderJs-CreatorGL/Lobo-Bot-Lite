const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let enviando;
const handler = async (m, {conn, text, isMods, isOwner, isPrems}) => {
 if (enviando) return;
     enviando = true 
  try {
    const link = text //(m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text;
    if (!link || !link.match(linkRegex)) throw '[❗𝐈𝐍𝐅𝐎❗] 𝐋𝐈𝐍𝐊 𝐄𝐑𝐑𝐎𝐍𝐄𝐎 𝐎 𝐅𝐀𝐋𝐓𝐀𝐍𝐓𝐄, 𝐈𝐍𝐆𝐑𝐄𝐒𝐄 𝐄𝐋 𝐄𝐍𝐋𝐀𝐂𝐄 𝐃𝐄 𝐔𝐍 𝐆𝐑𝐔𝐏𝐎 𝐃𝐄 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏.\n\n*—◉ Ejemplo:*\n*◉ #join https://chat.whatsapp.com/FwEUGxkvZD85fIIp0gKyFC*';
    const [_, code] = link.match(linkRegex) || [];
    if ( isPrems || isMods || isOwner || m.fromMe) {
      const res = await conn.groupAcceptInvite(code);
      await conn.sendMessage(m.chat, {text: '*[🐺]PERFECTO, LOBO-BOT-MD SE UNIO CORRECTAMENTE*.'}, {quoted: m})
      enviando = false 
    } else {
      conn.sendMessage(m.chat, {text: '[❗𝐈𝐍𝐅𝐎❗] 𝐋𝐈𝐍𝐊 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 𝐒𝐄 𝐄𝐍𝐕𝐈𝐎 𝐀 𝐋𝐎𝐒 𝐎𝐖𝐍𝐄𝐑𝐒.\n\n*—◉ Su grupo estará en evaluación y el propietario/a del Bot decidirá si agrega o no al Bot.*\n\n*—◉ Algunas de las razones por la cual su solicitud puede ser rechazada son:*\n*1.- El Bot está saturado.*\n*2.- El Bot fue eliminado del grupo recientemente.*\n*3.- El link del grupo ha sido restablecido.*\n*4.-El Bot no se agrega a grupos por decisión del propietario/a.*\n\n*—◉ El proceso de evaluación puede tomar algo de tiempo, incluso dias, tenga paciencia.*'}, {quoted: m});
      const data = global.owner.filter(([id]) => id)[0];
      const dataArray = Array.isArray(data) ? data : [data];
      for (const entry of dataArray) await conn.sendMessage(entry + '@s.whatsapp.net', {text: '[❗] 𝐀𝐋𝐆𝐔𝐈𝐄𝐍 𝐒𝐎𝐋𝐈𝐂𝐈𝐓𝐀 LOBO-𝐁𝐎𝐓-𝐌𝐃 𝐏𝐀𝐑𝐀 𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 [❗]\n\n*—◉ ☆𝘚𝘖𝘓𝘐𝘊𝘐𝘛𝘈𝘕𝘛𝘌☆:* ' + '@' + m.sender.split('@')[0] + '\n*—◉ ☆𝘓𝘐𝘕𝘒 𝘋𝘌𝘓 𝘎𝘙𝘜𝘗𝘖☆:* ' + link, mentions: [m.sender], contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [m.sender], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": `${link}`, "sourceUrl": `${link}`}}}, {quoted: m});
      enviando = false 
    }
  } catch {
    enviando = false 
    throw '[❗𝐈𝐍𝐅𝐎❗] 𝐅𝐀𝐋𝐋𝐎, 𝐀𝐋𝐆𝐎 𝐒𝐀𝐋𝐈𝐎 𝐌𝐀𝐋, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐑𝐄𝐏𝐎𝐑𝐓𝐄𝐋𝐎 𝐎 𝐕𝐔𝐄𝐋𝐕𝐀 𝐀 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐑.';
  }
};
handler.help = ['join [chat.whatsapp.com]'];
handler.tags = ['premium'];
handler.command = /^join|nuevogrupo$/i;
handler.private = true;
export default handler;
