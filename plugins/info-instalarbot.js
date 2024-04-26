import moment from 'moment-timezone';
import fetch from 'node-fetch';
const handler = async (m, { conn, args }) => {
   const res = await fetch('https://api.github.com/repos/EnderJs-CreatorGL/Lobo-Bot-Lite');
   const json = await res.json();
   let txt = ` ◉ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐭𝐞𝐫𝐦𝐮𝐱 ◉
    ➪ cd && termux-setup-storage
    ➪ apt-get update -y && apt-get upgrade -y
    ➪ pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 
    ➪ git clone https://github.com/EnderJs-CreatorGL/Lobo-Bot-Lite.git && cd Lobo-Bot-Lite
    ➪ yarn install
    ➪︎︎︎ npm install
    ➪ npm update
    ➪ npm start
    
    🔮 𝐓𝐢𝐞𝐧𝐞𝐬 𝐝𝐮𝐝𝐚𝐬 ? 𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐚 𝐚𝐥 𝐞𝐪𝐮𝐢𝐩𝐨 𝐝𝐞 𝐬𝐭𝐚𝐟𝐟 𝐲 𝐜𝐫𝐞𝐚𝐝𝐨𝐫 𝐮𝐬𝐚 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 #𝙾𝚆𝙽𝙴𝚁︎ 🔮  `;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": global.md, "sourceUrl": global.md}}}, {quoted: m});
};
handler.help = ['scbot'];
handler.tags = ['info'];
handler.command = /^(instalarbot|descargarbot)$/i;
export default handler;
