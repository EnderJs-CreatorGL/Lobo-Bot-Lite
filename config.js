import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//num owners
global.owner = [
   ['50558124470', 'Creador 👑', true],
   ['573012482597', 'Dev Diego 🧊', true]
]

global.mods = []
global.prems = []

//etiquetas name
global.packname = '🔰 Lobo Bot - Lite 🔰'
global.author = 'EnderJs 🐢'
global.wm = '🍭 LoboBot By • Ender'
global.vs = '1.0.3'

//imagen
global.imagen1 = ''

//enlaces
global.md = 'https://github.com/EnderJs-CreatorGL/Lobo-Bot-Lite'
global.grupohost = 'https://chat.whatsapp.com/Jt0Z1ERzXCV5srN7XH7Qws'
global.channel = 'https://whatsapp.com/channel/0029ValCkNT2ER6gHWFRQ71J'
global.dash = 'https://dash.olympus-host.xyz'
global.panel = 'https://panel.olympus-host.xyz'

//globales
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//warn
global.multiplier = 69 
global.maxwarn = '2' 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})