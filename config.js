import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs';
import *as cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = ""
global.confirmCode = ""

global.owner = [
['50558124470', '🌹𝙴𝙽𝙳𝙴𝚁 𝙲𝚁𝙴𝙰𝚃𝙾𝚁🌹', true],
['573012482597', '🌩𝚂𝚃𝙰𝙵𝙵 𝙳𝙸𝙴𝙶𝙾🌩', true],
['51929972576', '🍧𝚂𝚃𝙰𝙵𝙵 𝙰𝚇𝙴𝙻🍧', true],
['5491130182250', '𝙴𝚂𝚃𝙰𝙵𝙵 𝙴𝙽𝚉𝙾', true],
['593939005387', '𝚂𝚃𝙰𝙵𝙵 𝙹𝙾𝚂𝚃𝙸𝙽', true],
['595992809980', '𝚂𝚃𝙰𝙵𝙵 𝙸𝚅𝙰𝙽', true],
['50576390682'],
['584129799955'], 
['573027866596'], 
['51941987051'],
['5214437863111']]
  
global.suittag = ['50558124470']
global.prems = ['50558124470']


global.packname = '🌼𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃\n🌼𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾\n🌼𝚂𝙾𝙳𝙸𝙰𝙲𝙰𝙻\n🌼𝙶𝚕𝚘𝚋𝚊𝚕 𝚂𝚃𝙰𝙵𝙵';
global.author = '☆𝕷𝖔𝖇𝖔-𝕭𝖔𝖙-𝕸𝕯☆\n☆𝕰𝖓𝖉𝖊𝖗 𝕷𝕯☆\n☆𝕬𝖗𝖎𝖊𝖘☆\n☆𝕺𝖜𝖓𝖊𝖗𝖘☆ ';
global.wm = '𝗟𝗼𝗯𝗼 - 𝗕𝗼𝘁 - 𝗟𝗶𝘁𝗲';
global.titulowm = ' 𝗟𝗼𝗯𝗼-𝗕𝗼𝘁-𝗟𝗶𝘁𝗲 ';
global.titulowm2 = `∇𝗟 𝗼 𝗯 𝗼 - 𝗕 𝗼 𝘁 - 𝗟 𝗜 𝗧 𝗘Δ`
global.vs =  '1.0.0'
global.vsJB = '0.1.2'
global.igfg = '𝗟𝗼𝗯𝗼 - 𝗕𝗼𝘁 - 𝗟𝗶𝘁𝗲'  ;
global.wait = '*[❗] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';


global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6= fs.readFileSync('./Menu3.png');
global.imagen7= fs.readFileSync('./src/hjbot.jpg');
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
global.gp1 = 'https://whatsapp.com/channel/0029VaCtl9r05MUjcuMd9l2W'
global.gp2 = 'https://chat.whatsapp.com/Li46EUQhA5tJqXEENfKPJd'
global.wm2 = `▸ ${dia} ${fecha}\n▸ 𝙻𝙾𝙱𝙾-𝙱𝙾𝚃-𝙻𝚒𝚝𝚎`;
global.gt = '★𝗟𝗼𝗯𝗼-𝗕𝗼𝘁-𝗟𝗶𝘁𝗲★';
global.mysticbot = '★𝗟𝗢𝗕𝗢 - 𝗟𝗶𝘁𝗲★';
global.md = 'https://github.com/Ender-GB-Isis777/Lobo-Bot-Lite';
global.mysticbot = 'https://github.com/Ender-GB-Isis777/Lobo-Bot-Lite';
global.waitt = '*[⛔] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';
global.waittt = '*[⛔] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';
global.waitttt = '*[⛔] Ƈᴀʀɢᴀɴᴅᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*';
global.nomorown = '50576390682', '50558124470';
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
global.botdate = `☆ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; // Asia/Jakarta
global.bottime = `☆𝕿 𝕴 𝕸 𝕰 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;// America/Los_Angeles
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
