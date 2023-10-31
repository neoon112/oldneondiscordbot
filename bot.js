var Discord = require('discord.js');
var bot = new Discord.Client();
const fs = require("fs");

bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
//npm install --global windows-build-tools
//npm install -g node-gyp
//https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/troubleshooting.md
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}
bot.on('message', async message => {
    var prefix = '*'
    let msg = message.content.toUpperCase();
    if (msg.includes('NIGGER' || 'NIGGA')) { //naughty word filter
        //msg.delete();
        message.reply('❌ Please don\'t say that word ❌');
        message.channel.send('*tempmute <@' + message.author + '> 5' + ' Said a blacklisted word.').then( message => message.delete({ timeout: 3000}));
        msg.delete();
        return;
    }
    if (msg.startsWith(prefix + "UPTIME")) {
        let totalSeconds = (bot.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        let uptimecorrecc = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds.`;
        message.channel.send({embed:{
            title:"Uptime",
            description:"The uptime for the bot is: " + uptimecorrecc,
            color: 0x17A589,
            timestamp: new Date(),
            footer: {
                text:'Uptime',
                icon_url: 'https://cdn.discordapp.com/attachments/758230746518650892/777425562858946591/NeonSploit_logo_transparent.png'
            }
        }})
    }else {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if(!bot.commands.has(command)) return;
        try{
            bot.commands.get(command).execute(message, args);
        }catch(error){
            console.error(error);
            message.reply('❌ There was an issue executing that command');
        }
    }    
});
bot.on('ready', () => {
    console.log('NeonSploit bot online.')
    console.log('Successfully logged into ' + bot.user.username + '. ID_' + bot.user)
    bot.user.setActivity('www.neonhax.tk')
    console.log('Successfully set the status of the bot.')
    loaded()
});

function loaded() {
    console.log('Bot loaded everything. Ready for usage!')
}


bot.login('bottoken')
