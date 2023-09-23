import yts from 'yt-search';
import fs from 'fs';

const handler = async (m, {conn, text}) => {
  if (!text) throw '[❗] 𝐐𝐮𝐞 𝐝𝐞𝐬𝐞𝐚𝐬 𝐛𝐮𝐬𝐜𝐚𝐫 𝐞𝐧 𝐘𝐨𝐮𝐭𝐮𝐛𝐞?';
  const results = await yts(text);
  const tes = results.all;
  const teks = results.all.map((v) => {
    switch (v.type) {
      case 'video': return `
 🏮 𝐓𝐢𝐭𝐮𝐥𝐨 :_ ${v.title}
 🔗 𝐋𝐢𝐧𝐤 :_ ${v.url}
 🕒 𝐃𝐮𝐫𝐚𝐜𝐢𝐨𝐧 :_ ${v.timestamp}
 📥 𝐒𝐮𝐛𝐢𝐝𝐨 :_ ${v.ago}
 👁 𝐕𝐢𝐬𝐭𝐚𝐬 :_ ${v.views}`;
    }                            
  }).filter((v) => v).join('\n\nꙬꙬꙬꙬꙬꙬꙬꙬꙬꙬ\n\n');
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m);
};
handler.help = ['ytsearch *<texto>*'];
handler.tags = ['search'];
handler.command = ['ytsearch', 'yts'];
export default handler;
