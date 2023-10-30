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
     
   〘 𝕷𝖔𝖇𝖔-𝕭𝖔𝖙-𝕸𝕯 〙 ═
╠⟣☆[🖥️] *𝙾𝚆𝙽𝙴𝚁:* 𝗘𝗻𝗱𝗲𝗿 𝗟𝗗
╠⟣☆[☎️] *𝙽𝚄𝙼𝙴𝚁𝙾:* wa.me/50558124470
╠⟣☆[⚔️] *𝚂𝚄𝙿𝙿𝙾𝚁𝚃:* 𝗛𝗮𝗰𝗵𝗲𝗷𝗼𝘁𝗮
╠⟣☆[☎️] *𝙽𝚄𝙼𝙴𝚁𝙾:* wa.me/51992004117
╠⟣☆[🔑] *𝙿𝚁𝙴𝙵𝙸𝙹𝙾:* ${usedPrefix}
╠⟣☆[🔒] *𝙲𝙷𝙰𝚃𝚂 𝙿𝚁𝙸𝚅𝙰𝙳𝙾𝚂:* ${chats.length - groups.length}
╠⟣☆[👥] *𝙶𝚁𝚄𝙿𝙾𝚂 𝙲𝙷𝙰𝚃𝚂:* ${groups.length}
╠⟣☆[🎉] *𝙲𝙷𝙰𝚃𝚂 𝚃𝙾𝚃𝙰𝙻𝙴𝚂:* ${chats.length} 
╠⟣☆[🧸] *𝙰𝙲𝚃𝙸𝚅𝙸𝙳𝙰𝙳:* ${uptime}
╠⟣☆[🎭] *𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂:* ${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜
╠⟣☆[🔮] *𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳:* ${autoread ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
╠⟣☆[⚖️] *𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃:* ${restrict ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"} 
╠⟣☆[💬] *𝙿𝙲𝙾𝙽𝙻𝚈:* ${pconly ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
╠⟣☆[🏢] *𝙶𝙲𝙾𝙽𝙻𝚈:* ${gconly ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
╠⟣☆[🌐] *𝙼𝙾𝙳𝙾:* ${self ? "*𝚙𝚛𝚒𝚟𝚊𝚍𝚘*" : "*𝚙𝚞𝚋𝚕𝚒𝚌𝚘*"}
╠⟣☆[💬] *𝙰𝙽𝚃𝙸𝙿𝚁𝙸𝚅𝙰𝙳𝙾:* ${antiprivado ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
╠⟣☆[💻] *𝙼𝙾𝙳𝙴𝙹𝙸𝙱𝙾𝚃:* ${modejadibot ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
╠⟣☆[📵] *𝙰𝙽𝚃𝙸𝙻𝙻𝙰𝙼𝙰𝙳𝙰:* ${antiCall ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
╠⟣☆[⌚] *𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳:* ${speed} ms
   〘 𝕷𝖔𝖇𝖔-𝕭𝖔𝖙-𝕸𝕯 〙 ═
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
    document: { url: `https://github.com/Ender-GB-Isis777/LOBO-BOT-MD` },
    mimetype: `application/${document}`,
    fileName: `𝗛𝗲𝗹𝗹𝗼 𝘄𝗼𝗿𝗹`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://github.com/Ender-GB-Isis777/LOBO-BOT-MD",
        mediaType: 2,
        previewType: "pdf",
        title: "ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ",
        body: wm,
        thumbnail: imagen1,
        sourceUrl: "https://github.com/Ender-GB-Isis777/LOBO-BOT-MD",
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
