var Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "warnings",
    description: "Check a users warnings",

    async execute (message, args){
        var prefix = '*'
        let msg = message.content.toUpperCase();
        if (msg.startsWith(prefix + 'WARNINGS')) {
            const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;


            let warnings = await db.get(`warnings_${message.guild.id}_${user.id}`);
    
            if(warnings === null) warnings = 0;
    
            message.channel.send(`**${user.username}** has *${warnings}* warning(s)`);
        }
    }
}