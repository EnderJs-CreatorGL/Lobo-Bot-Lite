
import {generateWAMessageFromContent} from '@whiskeysockets/baileys'; 
//const { generateWAMessageFromContent } = require('whatsapp-web.js');
import axios = from 'axios't;
 

//Crea una nueva instancia del generateWAMessageFromContente y escucha los mensajes entrantes:

// if (command == 'play2') {
const generateWAMessageFromContent = new generateWAMessageFromContent();

generateWAMessageFromContent.on('message', async message => {
   if (command == 'noticia') {
        let news = await getNews();
        if (news) {
            message.reply(`Título: ${news.title}\nFecha: ${news.publishedAt}\nArtículo: ${news.description}\nURL: ${news.url}`);
            conn.sendFile(m.chat, news.urlToImage, 'news.jpeg', '', m);
        } else {
            message.reply('Lo siento, no pude obtener las noticias en este momento.');
        }
    }
});

generateWAMessageFromContent.initialize();
 

//Crea una función para obtener una noticia aleatoria:

 
async function getNews() {
    try {
        let response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=84baef01e6c640799202a741a11fdedf');
        let articles = response.data.articles;
        return articles[Math.floor(Math.random() * articles.length)];
    } catch (error) {
        console.error(error);
        return null;
    }
}
 handler.command = ['noticia']
export default handler

//He usado tu clave de API en la URL de la solicitud a la API de NewsAPI.
