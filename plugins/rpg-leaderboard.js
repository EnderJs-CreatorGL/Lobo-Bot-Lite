const handler = async (m, {conn, args, participants}) => {
  const users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key};
  });
  const sortedExp = users.map(toNumber('exp')).sort(sort('exp'));
  const sortedLim = users.map(toNumber('limit')).sort(sort('limit'));
  const sortedLevel = users.map(toNumber('level')).sort(sort('level'));
  const usersExp = sortedExp.map(enumGetKey);
  const usersLim = sortedLim.map(enumGetKey);
  const usersLevel = sortedLevel.map(enumGetKey);
  const len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedExp.length);
  const adventurePhrases = [
  "Lidera la aventura y forja tu camino hacia la cima.",
  "¡Desafía lo desconocido y alcanza nuevas alturas!",
  "Tu valentía te guiará a la cima de la tabla de clasificación.",
  "En cada paso, esculpe tu leyenda en esta gran aventura.",
  "Explora, compite y demuestra tu grandeza en esta tabla.",
  "Cada paso cuenta en tu viaje hacia la cima del ranking.",
  "La emoción de la competencia te impulsa hacia adelante.",
  "Aventúrate y conquista los primeros lugares con determinación.",
];
  const randomAdventurePhrase = adventurePhrases[Math.floor(Math.random() * adventurePhrases.length)];
  const texto = `
🌐𝑇𝑜𝑑𝑜𝑠 𝐴 𝑃𝑜𝑟 𝑒𝑙 𝑃𝑜𝑑𝑒𝑟🌐
~~~~~~~~~~~~~~~~~~~~~~~~~~  
—◉ 👑 𝕿𝖔𝖕𝖘 𝕽𝖆𝖓𝖌𝖔𝖘 (𝐓𝐔) ${len} 𝕰𝖝𝖕𝖊𝖗𝖙𝖔 

🌹𝑻𝒖 𝑹𝒂𝒏𝒈𝒐 𝒆𝒏 𝒍𝒂 𝑻𝒂𝒃𝒍𝒂:✨ ${usersExp.indexOf(m.sender) + 1} de ${usersExp.length}

${sortedExp.slice(0, len).map(({jid, exp}, i) => `${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${exp} exp*`).join`\n`}
~~~~~~~~~~~~~~~~~~~~~~~~~~
—◉ 💍 𝕿𝖔𝖕𝖘 𝕽𝖆𝖓𝖌𝖔𝖘 (𝐓𝐔) ${len} 𝕯𝕴𝖆𝖒𝖆𝖓𝖙𝖊𝖘 

🌹𝑻𝒖 𝑹𝒂𝒏𝒈𝒐 𝒆𝒏 𝒍𝒂 𝑻𝒂𝒃𝒍𝒂:✨ ${usersLim.indexOf(m.sender) + 1} de ${usersLim.length}

${sortedLim.slice(0, len).map(({jid, limit}, i) => `${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${limit} diamantes*`).join`\n`}
~~~~~~~~~~~~~~~~~~~~~~~~~~
—◉ 🌟 𝕿𝖔𝖕𝖘 𝕽𝖓𝖌𝖔𝖘 (𝐓𝐔) ${len} 𝕹𝖎𝖛𝖊𝖑 

🌹𝑻𝒖 𝑹𝒂𝒏𝒈𝒐 𝒆𝒏 𝒍𝒂 𝑻𝒂𝒃𝒍𝒂:✨ ${usersLevel.indexOf(m.sender) + 1} de ${usersLevel.length}

${sortedLevel.slice(0, len).map(({jid, level}, i) => `${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *nivel ${level}*`).join`\n`}

*🧸 ${randomAdventurePhrase} 🧸*`.trim();
  conn.sendMessage(m.chat, {text: texto, mentions: conn.parseMention(texto)}, {quoted: m})
};
handler.help = ['top'];
handler.tags = ['xp'];
handler.command = ['rangos', 'lb'];
handler.fail = null;
export default handler;

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property];
  else return (...args) => args[ascending & 1] - args[!ascending & 1];
}

function toNumber(property, _default = 0) {
  if (property) {
    return (a, i, b) => {
      return {...b[i], [property]: a[property] === undefined ? _default : a[property]};
    };
  } else return (a) => a === undefined ? _default : a;
}

function enumGetKey(a) {
  return a.jid;
}
