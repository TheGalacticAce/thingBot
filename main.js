const Discord = require('discord.js');
const prefix = '~';
const client = new Discord.Client();

client.once('ready', () => {
    console.log("Bot has started up!");
    console.log("Remember to use 'Crtl + C' to shut down the bot!");
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split("/ +/");
    const commands = args.shift().toLowerCase();

    if(commands === 'ping'){
        message.channel.send('Pong!')
    }
});

client.login("priv");