import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
  const info = `
┇〘🐺𝐋𝐎𝐁𝐎 𝐈𝐍𝐅𝐎🐺〙 ┇
┇ ✪ ⃟🥛[🖥️] 𝐎𝐰𝐧𝐞𝐫: 𝙴𝚗𝚍𝚎𝚛 𝙻𝙱
┇ ✪ ⃟🥤[☎️] 𝐍𝐮𝐦𝐞𝐫𝐨: wa.me/50576390682
┇ ✪ ⃟🍪[🔌] 𝐏𝐫𝐞𝐟𝐢𝐣𝐨: .
┇ ✪ ⃟☕[⚖️] 𝐂𝐡𝐚𝐭𝐬 𝐏𝐫𝐢𝐯𝐚𝐝𝐨𝐬: 9
┇ ✪ ⃟🍡[👥] 𝐆𝐫𝐮𝐩𝐨𝐬 𝐜𝐡𝐚𝐭𝐬: 45
┇ ✪ ⃟🍬[☃️] 𝐂𝐡𝐚𝐭𝐬 𝐓𝐨𝐭𝐚𝐥𝐞𝐬: 54 
┇ ✪ ⃟🍫[🛰️] 𝐀𝐜𝐭𝐢𝐯𝐢𝐝𝐚𝐝: 00:37:46
┇ ✪ ⃟🍨[🎭] 𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬: 360 𝚗𝚞𝚖𝚎𝚛𝚘𝚜
┇ ✪ ⃟🍕[🔮] 𝐀𝐮𝐭𝐨𝐫𝐞𝐚𝐝: 𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘
┇ ✪ ⃟🥨[🛡️] 𝐑𝐞𝐬𝐭𝐫𝐢𝐜𝐭: 𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘 
┇ ✪ ⃟🥭[💬] 𝐏𝐜𝐨𝐧𝐥𝐲: 𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘
┇ ✪ ⃟🍉[🏢] 𝐆𝐜𝐨𝐧𝐥𝐲: 𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘
┇ ✪ ⃟🍇[🌎] 𝐌𝐨𝐝𝐨: 𝚙𝚞𝚋𝚕𝚒𝚌𝚘
┇ ✪ ⃟🧁[💬] 𝐀𝐧𝐭𝐢𝐏𝐫𝐢𝐯𝐚𝐝𝐨: 𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘
┇ ✪ ⃟🍥[🤖] 𝐌𝐨𝐝𝐞𝐉𝐚𝐝𝐢𝐛𝐨𝐭: 𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘
┇ ✪ ⃟🍭[📵] 𝐀𝐧𝐭𝐢𝐥𝐥𝐚𝐦𝐚𝐝𝐚: 𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘
┇ ✪ ⃟🍧[📡] 𝐕𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝: 0.008422017097473145 ms
┇〘🐺𝐋𝐎𝐁𝐎 𝐈𝐍𝐅𝐎🐺〙 ┇
`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://github.com/HACHEJOTA/Hachiko-Bot-MD` },
    mimetype: `application/${document}`,
    fileName: `「  𝐇𝐚𝐜𝐡𝐢𝐤𝐨-𝐁𝐨𝐭-𝐌𝐃 」`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://github.com/HACHEJOTA/Hachiko-Bot-MD",
        mediaType: 2,
        previewType: "pdf",
        title: "ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ",
        body: wm,
        thumbnail: imagen1,
        sourceUrl: "https://github.com/HACHEJOTA/Hachiko-Bot-MD",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: m });
};
handler.help = ["infobot", "speed"];
handler.tags = ["info", "tools"];
handler.command = /^(ping|speed|infobot)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
