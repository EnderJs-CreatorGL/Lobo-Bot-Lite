import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `[🌹ᴇʀʀᴏʀ] ɪɴɢʀᴇsᴀ ᴇɴʟᴀᴄᴇ ᴅᴇ ɢɪᴛʜᴜʙ: ${usedPrefix + command} https://github.com/EnderJs-CreatorGL/Lobo-Bot-Lite`;
  if (!regex.test(args[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙸𝙽𝙺 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾!*';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`🌼 ᴅᴀᴍᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ ᴍɪᴇɴᴛʀᴀs ᴛᴇ ᴇɴᴠɪᴏ ᴇʟ ᴀʀᴄʜɪᴠᴏ`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.help = ['gitclone <url>'];
handler.tags = ['downloader'];
handler.command = /gitclone/i;
export default handler;
