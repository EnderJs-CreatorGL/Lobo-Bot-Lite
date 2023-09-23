import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `[❗] 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐞𝐥 𝐭𝐞𝐱𝐭𝐨 𝐩𝐚𝐫𝐚 𝐢𝐧𝐢𝐜𝐢𝐚𝐫 𝐛𝐮𝐬𝐪𝐮𝐞𝐝𝐚, 𝐄𝐣𝐞𝐦𝐩𝐥𝐨: ${usedPrefix + command} 𝐋𝐎𝐁𝐎-𝐁𝐎𝐓-𝐌𝐃`;
  const res = await fetch(global.API('https://api.github.com', '/search/repositories', {
    q: text,
  }));
  const json = await res.json();
  if (res.status !== 200) throw json;
  //const imagen = await conn.getFile(json.items[0].owner.avatar_url).data
  const str = json.items.map((repo, index) => {
  return `
*${1 + index}. ${repo.full_name}${repo.fork ? ' (fork)' : ''}*
🔗 𝐔𝐑𝐋: ${repo.html_url}
📅 𝐂𝐫𝐞𝐚𝐝𝐨 𝐞𝐥: ${formatDate(repo.created_at)}
🔄 𝐀𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐝𝐨 𝐞𝐥: ${formatDate(repo.updated_at)}
📥 𝐂𝐥𝐨𝐧𝐞: $ git clone ${repo.clone_url}
👁 𝐕𝐢𝐬𝐭𝐚𝐬: ${repo.watchers} ◉ 🍴 *𝙵𝙾𝚁𝙺𝚂:* ${repo.forks} ◉ ⭐ *𝙴𝚂𝚃𝚁𝙴𝙻𝙻𝙰𝚂:* ${repo.stargazers_count} ◉ ❓ *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:*
${repo.description ? `📝 *Descripción:*\n${repo.description}` : ''}
`.trim()}).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
  conn.sendMessage(m.chat, {text: str.trim()}, {quoted: m})
//conn.sendMessage(m.chat, {text: str.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [m.sender], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen, "mediaUrl": global.md}}}, {quoted: m});  
};
handler.help = ['githubs'];
handler.tags = ['buscadores'];
handler.command = /^(ghs|githubs|githubs|githubsearch|gits|gitsearch)$/i;
export default handler;

function formatDate(n, locale = 'es') {
  const d = new Date(n);
  return d.toLocaleDateString(locale, {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
}
