import moment from 'moment-timezone';
import fetch from 'node-fetch';
const handler = async (m, { conn, args }) => {
   const res = await fetch('https://api.github.com/repos/HACHEJOTA/Hachiko-Bot-MD');
   const json = await res.json();
   let txt = ` *◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇 ◉*
    ➪ cd && termux-setup-storage
    ➪ apt-get update -y && apt-get upgrade -y
    ➪ pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 
    ➪ git clone https://github.com/HACHEJOTA/Hachiko-Bot-MD.git && cd Hachiko-Bot-MD
    ➪ yarn install
    ➪︎︎︎ npm install
    ➪ npm update
    ➪ npm start
    
    *⚠️ 𝚂𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝙳𝚄𝙳𝙰𝚂 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰 𝙰 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #𝙾𝚆𝙽𝙴𝚁︎ ⚠️*  `;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": global.md, "sourceUrl": global.md}}}, {quoted: m});
};
handler.help = ['scbot'];
handler.tags = ['info'];
handler.command = /^(instalarbot|descargarbot)$/i;
export default handler;
