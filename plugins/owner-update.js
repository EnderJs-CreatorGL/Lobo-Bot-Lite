import {execSync} from 'child_process';

const handler = async (m, {conn, text}) => {
  try {
    if (global.conn.user.jid == conn.user.jid) {
      const stdout = execSync('git pull' + (m.fromMe && text ? '🌹𝗔𝗰𝘁𝘂𝗮𝗹𝗶𝘇𝗮𝗻𝗱𝗼 𝗟𝗼𝗯𝗼-𝗕𝗼𝘁-𝗟𝗶𝘁𝗲 ' + text : ''));
      conn.reply(m.chat, stdout.toString(), m);
    }
  } catch (error) {
    console.error(error);
    let errorMessage = 'An error occurred while executing the command.';
    if (error.message) {
      errorMessage += '\nError message: ' + error.message;
    }
    await conn.reply(m.chat, errorMessage, m);
  }
};

handler.help = ['update'];
handler.tags = ['owner'];
handler.command = /^update|repo1$/i;
handler.rowner = true;
export default handler;
