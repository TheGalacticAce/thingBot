const Discord = require('discord.js');
const prefix = '~';
const client = new Discord.Client();
const fs = require ('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.command.set(command.name, command);
}

client.once('ready', () => {
    console.log("Bot has started up!");
    console.log("Remember to use 'Crtl + C' to shut down the bot!");
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split("/ +/");
    const command = args.shift().toLowerCase();

    if(commands === 'ping'){
        client.commands.get('ping').execute(message, args);
    }   

    else if (commands === 'help') {
        client.commands.get('help').execute(message, args);
    }
});


client.login("<token>");