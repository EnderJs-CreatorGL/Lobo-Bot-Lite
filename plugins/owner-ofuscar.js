import JavaScriptObfuscator from 'javascript-obfuscator'

var handler = async(m, { conn, text }) => {
if (!text) return m.reply(`[⛔]𝐈𝐍𝐆𝐑𝐄𝐒𝐀 𝐄𝐋 𝐂𝐎𝐃𝐈𝐆𝐎 𝐀 𝐎𝐅𝐔𝐒𝐂𝐀𝐑 ?`) 
function obfuscateCode(code) {
  return JavaScriptObfuscator.obfuscate(code, { compact: false, controlFlowFlattening: true, deadCodeInjection: true, simplify: true, numbersToExpressions: true }).getObfuscatedCode();
}
let obfuscatedCode = await obfuscateCode(text);
conn.sendMessage(m.chat, {text: obfuscatedCode}, {quoted: m});
}
handler.command = /^(codigox|jsox)$/i
export default handler
