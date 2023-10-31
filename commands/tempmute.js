var Discord = require('discord.js');
const { min } = require('moment');
var ms = require('ms');
module.exports = {
    name: 'tempmute',
    description: 'Tempmute Command',
    async execute (message, args) {
        var prefix = '*'
        let msg = message.content.toUpperCase();
        if (msg.startsWith(prefix + 'TEMPMUTE')) {
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
            if(member.hasPermission('MANAGE_MESSAGES')) return message.reply('You cannot tempmute ' + user + '!');
            let minutes = Math.floor(args[1] * 60000);

            var rawTime = minutes;
            var checkargs2 = args[2];
            if (!checkargs2) return message.reply('Please specify the arguments (reason and or time).')
            var time = ms(rawTime);
            if(!time) return message.reply('You didn\'t specify a time!');
        
            var reason = args.splice(2).join(' ');
            if(!reason) return message.reply('You need to give a reason!');
        
            var channel = message.guild.channels.cache.find(c => c.name === 'logs');
            var log = new Discord.MessageEmbed()
            .setTitle('User TempMuted')
            .addField('User:', user, true)
            .addField('By:', message.author, true)
            .addField('Expires:', time)
            .addField('Reason:', reason)
            channel.send(log);
        
            var embed = new Discord.MessageEmbed()
            .setTitle('You were tempmuted!')
            .addField('Expires: ', time, true)
            .addField('Reason:', reason, true);
        
            try {
                user.send(embed);
            } catch(err) {
                console.warn(err);
            }
        
            var role = message.guild.roles.cache.find(r => r.name === 'Muted');
        
            member.roles.add(role);
        
            setTimeout(async() => {
                member.roles.remove(role);
            }, rawTime);
        
            message.channel.send(`**${user}** has been tempmuted by **${message.author}** for **${time}**!`);
        }
    },
};