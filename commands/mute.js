var Discord = require('discord.js');
module.exports = {
    name: 'mute',
    description: 'Mute Command',
    async execute (message, args) {
        var prefix = '*'
        let msg = message.content.toUpperCase();
        if (msg.startsWith(prefix + 'MUTE')) {
            if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You can\'t use that!');

            var user = message.mentions.users.first();
            if(!user) return message.reply('You didn\'t mention anyone!');
        
            var member;
        
            try {
                member = await message.guild.members.fetch(user);
            } catch(err) {
                member = null;
            }
        
            if(!member) return message.reply('They aren\'t in the server!');
            if(member.hasPermission('MANAGE_MESSAGES')) return message.reply('You cannot mute that person!');
        
            var reason = args.splice(1).join(' ');
            if(!reason) return message.reply('You need to give a reason!');
        
            var channel = message.guild.channels.cache.find(c => c.name === 'logs');
        
            var log = new Discord.MessageEmbed()
            .setTitle('User Muted')
            .addField('User:', user, true)
            .addField('By:', message.author, true)
            .addField('Reason:', reason)
            channel.send(log);
        
            var embed = new Discord.MessageEmbed()
            .setTitle('You were muted!')
            .addField('Reason:', reason, true);
        
            try {
                user.send(embed);
            } catch(err) {
                console.warn(err);
            }
        
            var role = message.guild.roles.cache.find(r => r.name === 'Muted');
        
            member.roles.add(role);
        
            message.channel.send(`**${user}** has been muted by **${message.author}**!`);
        }
    },
};