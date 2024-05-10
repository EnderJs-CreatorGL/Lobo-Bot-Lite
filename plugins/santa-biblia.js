const handler = async (m, { conn, command, text }) => {
  const bibliaporcentaje = Math.floor(Math.random() * 100);
  const isHighLove = bibliaporcentaje >= 50;
  const bibliaMessages = ["Isaias 41:10, No tengas miedo por que yo estoy con tigo, No te desalientes por que yo soy tu Dios, Te dare fuerzas y te ayudare te sostendre con mi mano derecha victoriosa".;
  ];
  const notSoHighbibliaMessages = ["Isaias 41:10, No tengas miedo por que yo estoy con tigo, No te desalientes por que yo soy tu Dios, Te dare fuerzas y te ayudare te sostendre con mi mano derecha victoriosa.";
    
  ];
  const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];
  const bibliaMessage = isHighbiblia ? getRandomMessage(bibliaMessages) : getRandomMessage(notSoHighbibliaMessages);
  const response =
    `━━━━━━━⬣ 𝑹𝒆𝒚𝒏𝒂 𝒗𝒂𝒍𝒆𝒓𝒂 ⬣━━━━━━━\n` +
    `𝑩𝒆𝒏𝒅𝒊𝒄𝒊𝒐𝒏𝒆𝒔, ${text}  @${m.sender.split('@')[0]} numero favorito ${bibliaPercentage}%\n\n` +
    `*❥ ✦${bibliaMessage}*\n` +
    `━━━━━━━⬣ 𝑺𝒂𝒏𝒕𝒂 𝑩𝒊𝒃𝒍𝒊𝒂 ⬣━━━━━━━`    

  async function loading() {
var hawemod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%"
]
   let { key } = await conn.sendMessage(m.chat, {text: `🌏 𝑬𝒏𝒗𝒊𝒂𝒏𝒅𝒐 𝒗𝒆𝒓𝒔𝒊𝒄𝒖𝒍𝒐`, mentions: conn.parseMention(response)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(response)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: response, edit: key, mentions: conn.parseMention(response)}, {quoted: m});         
 }
loading()    
};
handler.help = ['biblia'];
handler.tags = ['santa'];
handler.command = /^(santabiblia|versiculo)$/i;
export default handler;