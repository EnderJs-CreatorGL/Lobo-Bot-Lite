console.log('🚀 Iniciando...')
import { join, dirname } from 'path'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts'
import { createInterface } from 'readline'
import yargs from 'yargs'

// https://stackoverflow.com/a/50052194
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) // Bring in the ability to create the 'require' method
const { name, author } = require(join(__dirname, './package.json')) // https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)

say('LoboBotLite', {
font: 'block',
align: 'center',
colors: ['cyan', 'magenta']
})
say(`By: Ender`, {
font: 'console',
gradient: ['blue', 'green']
})

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
if (isRunning) return
isRunning = true
let args = [join(__dirname, file), ...process.argv.slice(2)]
say([process.argv[0], ...args].join(' '), {
font: 'console',
align: 'center',
gradient: ['blue', 'magenta']
})
setupMaster({
exec: args[0],
args: args.slice(1),
})
let p = fork()
p.on('message', data => {
switch (data) {
case 'reset':
p.process.kill()
isRunning = false
start.apply(this, arguments)
break
case 'uptime':
p.send(process.uptime())
break
}
})
p.on('exit', (_, code) => {
isRunning = false
console.error('⚠️ Ocurrió un error inesperado:', code)
process.exit();
if (code === 0) return
watchFile(args[0], () => {
unwatchFile(args[0])
start(file)
})
})
let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test'])
if (!rl.listenerCount()) rl.on('line', line => {
p.emit('message', line.trim())
})
}

import { createInterface } from 'readline';
import chalk from 'chalk';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  const opcion = await new Promise((resolve) => {
    rl.question(chalk.yellowBright.bold('—◉ㅤSeleccione una opción (solo el numero):
') + chalk.white.bold('1. Con código QR
2. Con código de texto de 8 dígitos
—> '), resolve);
  });

  let numeroTelefono = '';
  if (opcion === '2') {
    const phoneNumber = await new Promise((resolve) => {
      rl.question(chalk.yellowBright.bold('
—◉ㅤEscriba su número de WhatsApp:
') + chalk.white.bold('◉ㅤEjemplo: +5219992095479
—> '), resolve);
    });
    numeroTelefono = formatearNumeroTelefono(phoneNumber);
    if (!esNumeroValido(numeroTelefono)) {
      console.log(chalk.bgRed(chalk.white.bold('[ ERROR ] Número inválido. Asegúrese de haber escrito su numero en formato internacional y haber comenzado con el código de país.
—◉ㅤEjemplo:
◉ +5219992095479
')));
      process.exit(0);
    }
    process.argv.push(numeroTelefono);
  }

  if (opcion === '1') {
    process.argv.push('qr');
  } else if (opcion === '2') {
    process.argv.push('code');
  }

  const args = [join(__dirname, file), ...process.argv.slice(2)];
  setupMaster({ exec: args[0], args: args.slice(1) });

  const p = fork();

  p.on('message', (data) => {
    console.log(chalk.green.bold('—◉ㅤRECIBIDO:'), data);
    switch (data) {
      case 'reset':
        p.process.kill();
        isRunning = false;
        start.apply(this, arguments);
        break;
      case 'uptime':
        p.send(process.uptime());
        break;
    }
  });

  p.on('exit', (_, code) => {
    isRunning = false;
    console.error(chalk.red.bold('[ ERROR ] Ocurrió un error inesperado:'), code);
    p.process.kill();
    isRunning = false;
    start.apply(this, arguments);
    if (process.env.pm_id) {
      process.exit(1);
    } else {
      process.exit();
    }
  });

  const opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
  if (!opts['test']) {
    if (!rl.listenerCount()) {
      rl.on('line', (line) => {
        p.emit('message', line.trim());
      });
    }
  }

  rl.close(); // Cierra la interfaz al final
}

main(); // Llama a la función principal
