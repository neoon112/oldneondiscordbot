var Discord = require('discord.js');
module.exports = {
    name: 'kick',
    description: 'Kick Command',
    execute (message) {
        var prefix = '*'
        let msg1 = message;
        let args1 = msg1.content.slice(prefix.length).split(/ +/);
        let command = args1.shift().toLowerCase();
        let cmd = command;
        if(cmd === 'kick'){
            if(!msg1.member.hasPermission('KICK_MEMBERS')) return msg1.channel.send("❌ You don't have permission to kick members.");
            let toKick = msg1.mentions.members.first();
            let reason = args1.slice(1).join(" ");
            if(!args1[0]) return msg1.channel.send('🗣 Please mention someone to kick');
            if(!toKick) return msg1.channel.send(`🤖 ${args1[0]} is not a member.`);
            if(!reason) return msg1.channel.send('📝 Specify a reason.');
    
            if(!toKick.kickable){
                return msg1.channel.send('❌ I cannot kick someone that is mod/admin.');
            }
    
            if(toKick.kickable){
                let x = new Discord.MessageEmbed()
                .setTitle('Kick')
                .addField('Member Kicked', toKick)
                .addField('Kicked by', msg1.author)
                .addField('Reason', reason)
                .addField('Date', msg1.createdAt)
    
                msg1.channel.send(x);
                toKick.kick();
            }
        }
    },
};