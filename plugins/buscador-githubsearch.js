import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `[✒️] 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐞𝐥 𝐭𝐞𝐱𝐭𝐨 𝐩𝐚𝐫𝐚 𝐢𝐧𝐢𝐜𝐢𝐚𝐫 𝐛𝐮𝐬𝐪𝐮𝐞𝐝𝐚, 𝐄𝐣𝐞𝐦𝐩𝐥𝐨: ${usedPrefix + command} 𝕷𝖔𝖇𝖔-𝕭𝖔𝖙-𝕸𝕯`;
  const res = await fetch(global.API('https://api.github.com', '/search/repositories', {
    q: text,
  }));
  const json = await res.json();
  if (res.status !== 200) throw json;
  //const imagen = await conn.getFile(json.items[0].owner.avatar_url).data
  const str = json.items.map((repo, index) => {
  return `
*${1 + index}. ${repo.full_name}${repo.fork ? ' (fork)' : ''}*
          ☆𝕷𝖔𝖇𝖔-𝕭𝖔𝖙-𝕸𝕯☆
🌼√ [𝗨𝗥𝗟: ${repo.html_url}
🌹√ [𝗖𝗿𝗲𝗮𝗱𝗼: ${formatDate(repo.created_at)}
🍀√ [𝗔𝗰𝘁𝘂𝗮𝗹𝗶𝘇𝗮𝗰𝗶𝗼𝗻 : ${formatDate(repo.updated_at)}
🌐√ [𝗧𝗼𝘁𝗮𝗹 𝗰𝗹𝗼𝗻𝗲: $ git clone ${repo.clone_url}
🌟√ [𝗧𝗼𝘁𝗮𝗹 𝘃𝗶𝘀𝘁𝗮𝘀: ${repo.watchers} ◉ 🌸 √[𝗙𝗼𝗿𝗸𝘀: ${repo.forks} ◉ ✨ √[𝗘𝘀𝘁𝗿𝗲𝗹𝗹𝗮𝘀: ${repo.stargazers_count} ◉ ☃️ √[𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝗰𝗶𝗼𝗻:
${repo.description ? `📄 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝗰𝗶𝗼𝗻:\n${repo.description}` : ''}
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
