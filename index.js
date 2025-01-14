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
const require = createRequire(__dirname)
const { name, author } = require(join(__dirname, './package.json'))
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

async function main() {
  const opcion = await new Promise((resolve) => {
    rl.question('—◉ㅤSeleccione una opción (solo el numero):
1. Con código QR
2. Con código de texto de 8 dígitos
—> ', resolve);
  });

  if (opcion === '1') {
    process.argv.push('qr');
  } else if (opcion === '2') {
    const codigoOchoDigitos = await new Promise((resolve) => {
      rl.question('—◉ㅤIngrese su código de 8 dígitos:
—> ', resolve);
    });
    process.argv.push(codigoOchoDigitos);
  } else {
    console.log('Opción no válida. Saliendo...');
    process.exit(0);
  }

  start('main.js');
}

main();
