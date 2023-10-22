const handler = async (m, {conn, isPrems}) => {
  const hasil = Math.floor(Math.random() * 1000);
  const time = global.db.data.users[m.sender].lastmiming + 600000;
  if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `[🕕] 𝗘𝘀𝘁𝗮𝘀 𝗰𝗮𝗻𝘀𝗮𝗱𝗼/𝗮 𝗺𝗲𝗷𝗼𝗿 𝗲𝘀𝗽𝗲𝗿𝗮 ${msToTime(time - new Date())} 𝗣𝗮𝗿𝗮 𝗿𝗲𝘁𝗼𝗿𝗻𝗮𝗿 𝗮 𝗹𝗮 𝗺𝗶𝗻𝗲𝗿𝗶𝗮`;
  m.reply(`𝗣𝗲𝗿𝗳𝗲𝗰𝘁𝗼 𝗮𝘀 𝗺𝗶𝗻𝗮𝗱𝗼 ${hasil} 𝗱𝗲 𝘅𝗽🌟`);
  global.db.data.users[m.sender].lastmiming = new Date * 1;
};
handler.help = ['minar'];
handler.tags = ['xp'];
handler.command = ['minar', 'miming', 'mine'];
handler.fail = null;
handler.exp = 0;
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ' m y ' + seconds + ' s ';
}
