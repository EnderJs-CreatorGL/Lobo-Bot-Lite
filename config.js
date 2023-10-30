import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.owner = [
  ['528142113343', 'Ａｌｃａ Ｂｏｔ🍭', true],
  ['5217294888993', '🍧𝚂𝚃𝙰𝙵𝙵 Ａｌｃａ🍧', true],

];

global.suittag =['50558124470']
global.prems =['50558124470']

global.packname = '☯︎ 𝙱𝙾𝚃\n☯︎ 𝙾𝚆𝙽𝙴𝚁';
global.author = 'ʜᴀᴄʜɪᴋᴏ-ʙᴏᴛ-ᴍᴅ\nʜᴀᴄʜᴇᴊᴏᴛᴀ';
global.wm = '𝙰𝚕𝚌𝚊 𝚅𝚎𝚗𝚝𝚊𝚜';
global.titulowm = '🤖 𝗔𝗹𝗰𝗮 𝗕𝗼𝘁 -𝗠𝗗 ';
global.titulowm2 =`✦𝗔𝗹𝗰𝗮 𝗕𝗼𝘁 🦾✦`
global.igfg = '🤖 𝗔𝗹𝗰𝗮 𝗕𝗼𝘁 -𝗠𝗗'  ;
global.wait = '*[❗] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/avatar_contact.png');
global.imagen3 = fs.readFileSync('./src/avatar_contact.png');
global.imagen4 = fs.readFileSync('./10 sin título_20231029211450.png');
global.imagen5 = fs.readFileSync('./src/+avatar_contact.png');
global.imagen6= fs.readFileSync('./10 sin título_20231029211450');
global.imagen7= fs.readFileSync('./src/avatar_contact.png');
global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});

//****************************
global.gp1 = 'https://chat.whatsapp.com/Li46EUQhA5tJqXEENfKPJd'
global.gp2 = 'https://whatsapp.com/channel/0029VaCtl9r05MUjcuMd9l2W'
global.wm2 = `▸ ${dia} ${fecha}\n▸ 𝙰𝚕𝚌𝚊 𝚅𝚎𝚗𝚝𝚊𝚜`;
global.gt = '𝗔𝗹𝗰𝗮 𝗕𝗼𝘁 -𝗠𝗗★★';
global.mysticbot = '𝗔𝗹𝗰𝗮 𝗕𝗼𝘁 -𝗠𝗗★';
global.md = 'https://github.com/Ender-GB-Isis777/LOBO-BOT-MD';
global.mysticbot = 'https://github.com/Ender-GB-Isis777/LOBO-BOT-MD';
global.waitt = '*[⛔] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';
global.waittt = '*[⛔] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';
global.waitttt = '*[⛔] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';
global.nomorown = '51992004112', '50576390682', '50558124470';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; // Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;// America/Los_Angeles
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************
let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
