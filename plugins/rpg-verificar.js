import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `[✔️] 𝗬𝗮 𝗲𝘀𝘁𝗮𝘀 𝘃𝗲𝗿𝗶𝗳𝗶𝗰𝗮𝗱𝗼\n\n¿𝗤𝘂𝗶𝗲𝗿𝗲𝘀 𝘃𝗲𝗿𝗶𝗳𝗶𝗰𝗮𝗿𝘁𝗲 𝗱𝗲 𝗻𝘂𝗲𝘃𝗼?\n\n 📓𝗨𝘀𝗮 𝗲𝘀𝘁𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼 𝗽𝗮𝗿𝗮 𝗲𝗹𝗶𝗺𝗶𝗻𝗮𝗿 𝘁𝘂 𝘃𝗲𝗿𝗶𝗳𝗶𝗰𝗮𝗰𝗶𝗼𝗻 \n*${usedPrefix}unreg* <Número de serie>`;
  if (!Reg.test(text)) throw `[❕] 𝗨𝘀𝗼 𝗶𝗻𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗼\n\n—◉ 𝗨𝘀𝗼 𝗱𝗲𝗹 𝗰𝗼𝗺𝗮𝗻𝗱𝗼: ${usedPrefix + command} nombre.edad*\n*—◉ Ejemplo: ${usedPrefix + command} Shadow.18*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙳𝙴𝙱𝙴𝚂 𝙿𝙾𝙽𝙴𝚁 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴*';
  if (!age) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙰 𝙴𝙳𝙰𝙳 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝚅𝙰𝙲𝙸𝙰*';
  if (name.length >= 30) throw '[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙴𝚂 𝙳𝙴𝙼𝙰𝚂𝙸𝙰𝙳𝙾 𝙻𝙰𝚁𝙶𝙾';
  age = parseInt(age);
  if (age > 100) throw '[⁉️] ¿𝗦𝗶𝗴𝘂𝗲𝘀 𝘃𝗶𝘃𝗼 𝗮𝘂𝗻 𝗮 𝘁𝘂 𝗲𝗱𝗮𝗱?';
  if (age < 5) throw '[⁉️] ¿𝗨𝗻 𝗯𝗲𝗯𝗲 𝗾𝘂𝗲 𝘂𝘀𝗮 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽? ';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `┏┅ ━━━━━━━━━━━━ ┅ ━
┇「 ~𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍~ 」
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ ✦𝗡𝗮𝗺𝗲: ${name}
┃ ✦𝗘𝗱𝗮𝗱: ${age} años
┃ ✦𝗡𝘂𝗺𝗲𝗿𝗼 𝗱𝗲 𝘀𝗲𝗿𝗶𝗲:
┃ ${sn}
┣┅ ━━━━━━━━━━━━ ┅ ━
┃      ☆𝗗𝗮𝘁𝗼☆:...
┃
☆¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 
┃ 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 
┃ 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!☆
┗┅ ━━━━━━━━━━━━ ┅ ━`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|verificar|reg|registrar)$/i;
export default handler;
