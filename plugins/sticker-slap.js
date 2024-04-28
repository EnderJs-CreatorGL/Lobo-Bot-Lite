import {sticker} from "../lib/sticker.js";
import fetch from "node-fetch";
const handler = async (m, { conn, args, usedPrefix, command }) => {
    let who;
    if (m.isGroup) {
      who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    } else { 
      who = m.chat;
    }
      const textquien = `[🌹] 𝐸𝑡𝑖𝑞𝑢𝑒𝑡𝑎 𝑜 𝑚𝑒𝑛𝑐𝑖𝑜𝑛𝑎 𝑎𝑙 𝑢𝑠𝑢𝑎𝑟𝑖𝑜\n\n𝐸𝑗𝑒𝑚𝑝𝑙𝑜:\n◉ ${usedPrefix + command} @${global.suittag}`;
    if (who === m.chat && m.isGroup || !who && m.isGroup) return m.reply(textquien, m.chat, {mentions: conn.parseMention(textquien)});
  try {
    let name;
    if (who === m.chat) {
      name = "Lobo-Bot-Lite";
    } else {
      name = conn.getName(who);
    }
    let name2 = conn.getName(m.sender);
    let apislap = await fetch(`https://api.waifu.pics/sfw/slap`);
    let jkis = await apislap.json();
    let { url } = jkis;
    let stiker = await sticker(null, url, `${name2} le dio una bofetada a ${name}`, null);
    conn.sendFile(m.chat, stiker, null, {asSticker: true}, m, true, {contextInfo: {forwardingScore: 200, isForwarded: true}}, {quoted: m});
  } catch {
    throw `[🌹] 𝐸𝑟𝑟𝑜𝑟 𝑖𝑛𝑡𝑒𝑛𝑡𝑎𝑟 𝑑𝑒 𝑛𝑢𝑒𝑣𝑜.`;
  };
};
handler.help = ["slap"];
handler.tags = ["General"];
handler.command = /^(slap|bofetada)$/i;
export default handler;
