const handler = async (m, { conn, command, text }) => {
  const bibliaPercentage = Math.floor(Math.random() * 100);
  const isHighbiblia = bibliaPercentage >= 50;
  const bibliaMessages = [
"Isaias 41:10, No tengas miedo por que yo estoy con tigo, No te desalientes por que yo soy tu Dios, Te dare fuerzas y te ayudare te sostendre con mi mano derecha victoriosa"
,

"Juan 11:25 y 26, Yo soy la resurreccion y la vida, el que cree en mi aun que este muerto vivira, y todo aquel que vive y creen en mi, No morira eternamente"
,

  ];
  const notSoHighbibliaMessages = [
"Isaias 41:10, No tengas miedo por que yo estoy con tigo, No te desalientes por que yo soy tu Dios, Te dare fuerzas y te ayudare te sostendre con mi mano derecha victoriosa"
,

];
    const bibliaDescription = isHighbiblia ? "Esta es la palabra de Dios" : "Jehova Dios nuestro creador";

  const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];
  const bibliaMessage = isHighbiblia ? getRandomMessage(bibliaMessages) : getRandomMessage(notSoHighbibliaMessages);
  const response =
    `━━━━━━━⬣ 𝐑𝐞𝐲𝐧𝐚 𝐕𝐚𝐥𝐞𝐫𝐚 ⬣━━━━━━━\n` +
    `🌹 𝐁𝐞𝐧𝐝𝐢𝐜𝐢𝐨𝐧𝐞𝐬, ${text}  @${m.sender.split('@')[0]} ${bibliaDescription}
animo ${bibliaPercentage}% de 100%\n\n` +
    `*❥ ${bibliaMessage}*\n` +
    `━━━━━━━⬣ 𝐒𝐚𝐧𝐭𝐚 𝐁𝐢𝐛𝐥𝐢𝐚 ⬣━━━━━━━`    

  async function loading() {
var hawemod = [
" ████40%",
" ███████60%",
" ██████████80%",
" ███████████100%"
]
   let { key } = await conn.sendMessage(m.chat, {text: `🌏 𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐄𝐥 𝐕𝐞𝐫𝐬𝐢𝐜𝐮𝐥𝐨`, mentions: conn.parseMention(response)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(response)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: response, edit: key, mentions: conn.parseMention(response)}, {quoted: m});         
 }
loading()    
};
handler.help = ['santabiblia'];
handler.tags = ['santabiblia'];
handler.command = /^(santabiblia|versiculo)$/i;
export default handler;