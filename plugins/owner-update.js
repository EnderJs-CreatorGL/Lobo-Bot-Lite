import { execSync } from 'child_process'

var handler = async (m, { conn, text }) => {

m.react('🛑') 
try {

const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()

if (messager.includes('☘️ Ya estoy actualizado.')) messager = '☘️ Ya estoy actualizado a la última versión.'

if (messager.includes('💫 Actualizando.')) messager = '✨️ Procesando, espere un momento mientras me actualizo.\n\n' + stdout.toString()
conn.reply(m.chat, messager, m,)

} catch { 
try {

const status = execSync('git status --porcelain')

if (status.length > 0) {
const conflictedFiles = status.toString().split('\n').filter(line => line.trim() !== '').map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('session/') || line.includes('npm-debug.log')) {
return null
}
return '*→ ' + line.slice(3) + '*'}).filter(Boolean)
if (conflictedFiles.length > 0) {
const errorMessage = `🔰 Null editaron desde el servidor, ahora no se puede actualizar el bot.`
await conn.reply(m.chat, errorMessage, m,)
}
}
} catch (error) {
console.error(error)
let errorMessage2 = '⚠️ Ocurrió un error inesperado.'
if (error.message) {
errorMessage2 += '\n⚠️ Mensaje de error: ' + error.message;
}
await conn.reply(m.chat, errorMessage2, m,)
}
}

}

handler.help = ['update', 'actualizar']
handler.tags = ['owner']
handler.command = ['update', 'actualizar']
handler.rowner = true

export default handler