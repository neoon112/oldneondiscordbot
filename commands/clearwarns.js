var Discord = require('discord.js');
const warnings = require('./warnings');
const db = require('quick.db');

module.exports = {
    name: "clearwarns",
    description: "Delete a member's warns",

    
    async execute (message, args){
        var prefix = '*'
        let msg = message.content.toUpperCase();
        if (msg.startsWith(prefix + 'CLEARWARNS')) {
            if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('❌ You can\'t use that.');

            const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    
            if(!user) return message.channel.send('❌ Please specify a user, via mention.');
    
            if(user.bot) return message.channel.send('❌ You can\'t warn bots.');
    
            if(user.id === message.author.id) return message.channel.send('❌ You can\'t clear your own warnings.');
    
            if(warnings === null) return message.channel.send(`❌ **${user.username} has no warnings.** Too add a warning do *warn <mention-a-user> <reason>.`);
    
    
            db.delete(`warnings_${message.guild.id}_${user.id}`);
    
            message.channel.send(':white_check_mark: Success! :white_check_mark:')
        }
    }
}