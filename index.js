var TelegramBot = require('node-telegram-bot-api');
var token = process.env.VALEU_TOKEN;
var bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, function (msg) {
  bot.sendMessage(msg.chat.id, 'Comandos: \n /options \n /nomairValeu for 3 valeu\'s \n /valeu for a single valeu \n /ronaldinho for ronaldinho sign');
});

bot.onText(/\/options/, function (msg) {
  bot.sendMessage(msg.chat.id, 'Comandos: \n /options \n /nomairValeu for 3 valeu\'s \n /valeu for a single valeu \n /ronaldinho for ronaldinho sign');
});

bot.onText(/\/valeu/, function (msg) {
  bot.sendMessage(msg.chat.id, 'valeu');
});

bot.onText(/\/nomairValeu/, function (msg) {
  bot.sendMessage(msg.chat.id, 'Valeu valeu ... ... Valeu');
});

bot.onText(/\/ronaldinho/, function (msg) {
  const url = 'https://mds-ca-1.maciv.com/ronaldinho/photos/2017/05/5USfZ_169107_bd5e1e0597ef620657bdd9f8b6f397a9.jpg'
  bot.sendPhoto(msg.chat.id, url);
});

bot.onText(/\/staMae/, function (msg) {
  bot.sendMessage(msg.chat.id, 'Num acredito! A STA é uma mãe...');
});
